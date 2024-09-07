/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-09-06 16:06:27
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-09-06 18:20:29
 * @FilePath: \checkout-single-subscriptiond:\lulab_web_nextjs\dev\lulab_website_next_js\pages\api\webhook.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import axios from "axios";
import { Readable } from "stream";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const feishuAppToken = "IbqUbbb3HaMQcgs4shgcAmoqnbb"; // Feishu 应用的 Token
const feishuTableId = "tblsGd06nGT04w5K"; // Feishu 表的 ID

export const config = {
  api: {
    bodyParser: false, // 关闭 bodyParser，因为我们需要原始的请求体
  },
};

// 自定义 buffer 函数来读取请求体
async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// 定义一个函数将日期格式化为 "YYYY/MM/DD HH:mm(GMT+8)"
// function formatDateForFeishuGMT8(timestamp: number): string {
//   // 将 Unix 时间戳（秒）转换为毫秒
//   const date = new Date(timestamp * 1000);

//   // 计算 GMT+8 时区的时间
//   const utcTimestamp = date.getTime() + date.getTimezoneOffset() * 60000;
//   const offset = 8; // GMT+8 时区偏移量
//   const gmt8Date = new Date(utcTimestamp + 3600000 * offset);

//   // 格式化日期和时间
//   const year = gmt8Date.getFullYear();
//   const month = String(gmt8Date.getMonth() + 1).padStart(2, "0");
//   const day = String(gmt8Date.getDate()).padStart(2, "0");
//   const hours = String(gmt8Date.getHours()).padStart(2, "0");
//   const minutes = String(gmt8Date.getMinutes()).padStart(2, "0");

//   return `${year}/${month}/${day} ${hours}:${minutes}(GMT+8)`;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // 处理 checkout.session.completed 事件
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // 格式化支付时间
      // const formattedPaymentTime = formatDateForFeishuGMT8(session.created);

      const recordData = {
        fields: {
          订单ID: session.id,
          用户ID: session.customer || "",
          用户姓名: session.customer_details?.name || "",
          用户邮箱: session.customer_details?.email || "",
          支付金额: ((session.amount_total || 0) / 100).toString(), // 将金额从分转换为元
          支付货币: session.currency?.toUpperCase() || "",
          支付时间: Date.now(), // 使用格式化后的支付时间
          支付状态: session.payment_status || "",
        },
      };

      console.log("插入到 Feishu 表的数据:", recordData);

      try {
        const feishuResponse = await axios.post(
          `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/records/batch_create`,
          { records: [recordData] },
          {
            headers: {
              Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("数据成功插入到 Feishu 多维表:", feishuResponse.data);
      } catch (error: any) {
        console.error(
          "插入数据到 Feishu 多维表时发生错误:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
