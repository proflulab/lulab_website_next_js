/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-09-06 16:06:27
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-09-12 11:29:40
 * @FilePath: \Tik-Tok-Web-fully-automatic-replyd:\lulab_web_nextjs\dev\lulab_website_next_js\pages\api\webhook.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// pages/api/webhook.tsx
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { Readable } from "stream";
import { insertToTableB, insertToTableA } from "../../utils/stripe_webhook"; // 导入封装好的函数

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const feishuAppToken = process.env.FEISHU_TABLE_APP_TOKEN!;
const feishuTableAId = process.env.FEISHU_TABLE_AID!;
const feishuTableBId = process.env.FEISHU_TABLE_BID!;

export const config = {
  api: {
    bodyParser: false, // 关闭 bodyParser，因为我们需要原始的请求体
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

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

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        // 插入用户到表 B
        const userRecord = await insertToTableB(
          feishuAppToken,
          feishuTableBId,
          session
        );

        // 插入订单到表 A
        await insertToTableA(
          feishuAppToken,
          feishuTableAId,
          session,
          userRecord
        );
        res.status(200).json({ received: true });
      } catch (error: any) {
        console.error("Error inserting data into Feishu:", error.message);
        res.status(500).json({ error: error.message });
      }
    } else {
      console.log(`Unhandled event type ${event.type}`);
      res.status(400).json({ received: false });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
