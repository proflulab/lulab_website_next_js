/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-09-06 16:06:27
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-09-11 15:46:21
 * @FilePath: \checkout-single-subscriptiond:\lulab_web_nextjs\dev\lulab_website_next_js\pages\api\webhook.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { Readable } from "stream";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const feishuAppToken = process.env.FEISHU_TABLE_APP_TOKEN!; // Feishu 应用的 Token
const feishuTableAId = process.env.FEISHU_TABLE_AID; // 表 A 的 ID (订单表)
const feishuTableBId = process.env.FEISHU_TABLE_BID; // 表 B 的 ID (用户表)

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

// 定义字段及其类型
// const fieldDefinitions: { [key: string]: { type: number; options?: any } } = {
//   channel_order_id: { type: 1 }, // 多行文本
//   channel_user_id: { type: 1 },  // 多行文本
//   user_real_name: { type: 1 },   // 多行文本
//   user_email: { type: 1 },       // 多行文本
//   phone: { type: 13 },           // 电话号码
//   real_price: { type: 2 },       // 数字
//   currency_unit: { type: 3 },    // 多行文本
//   pay_time: { type: 5 },         // 日期
//   order_state: { type: 3 },      // 多行文本
//   product_category: {
//     type: 3, // 单选
//     options: { choices: ["课程", "商品", "服务"] }, // 单选的可选项
//   },
//   collecting_company: { type: 1 }, // 多行文本
// };

// // 检查并新增字段
// async function checkAndAddFields(recordFields: { [key: string]: any }) {
//   try {
//   const existingFields = await getFields();
//   let missingFieldsCount = 0; // 计数器，用于追踪缺失字段的数量

//   for (const field in recordFields) {
//     if (!existingFields.includes(field)) {
//       console.log(`字段 "${field}" 不存在，正在创建...`);
//       const { type, options } = fieldDefinitions[field];
//       await addField(field, type, options);
//       missingFieldsCount++; // 每新增一个字段，计数器增加
//     }
//   }

//   if (missingFieldsCount === 0) {
//     console.log("所有字段都已存在，无需新增字段。");
//     return "所有字段都已存在，无需新增字段。";
//   } else {
//     console.log(`${missingFieldsCount} 个字段已成功新增。`);
//     return `${missingFieldsCount} 个字段已成功新增。`;
//   }
// } catch (error) {
//   console.error("检查并新增字段时发生错误:", error);
//   throw new Error("检查并新增字段失败");
// }
// }

// // 获取现有的字段
// async function getFields() {
//   const response = await fetch(
//     `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/fields`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
//       },
//     }
//   );

//   const data = await response.json();
//   if (data.code !== 0) {
//     throw new Error(`获取字段失败: ${data.msg}`);
//   }

//   // 返回现有字段名称列表
//   return data.data.items.map((field: any) => field.field_name);
// }

// // 添加新字段
// async function addField(fieldName: string, fieldType: number, options?: any) {
//   const body = {
//     field_name: fieldName,
//     type: fieldType,
//     ...options && { options }, // 如果有options则添加
//   };

//   const response = await fetch(
//     `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/fields`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     }
//   );

//   const data = await response.json();
//   if (data.code !== 0) {
//     throw new Error(`新增字段失败: ${data.msg}`);
//   }

//   return data;
// }

// 新增用户到表 B
async function insertToTableB(userData: any) {
  const response = await fetch(
    `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableBId}/records/batch_create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [userData] }),
    }
  );

  const data = await response.json();

  // 如果 code 不为 0，表示失败，抛出错误
  if (data.code !== 0) {
    throw new Error(`Failed to insert user to Table B: ${data.msg}`);
  }

  // 确保 data.data 和 items 存在
  if (!data.data || !data.data.records || !data.data.records[0]) {
    throw new Error(
      `Unexpected response structure from Table B insert operation`
    );
  }

  // 返回创建成功的用户记录
  return data.data.records[0];
}

// 新增订单到表 A
async function insertToTableA(orderData: any) {
  const response = await fetch(
    `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableAId}/records/batch_create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [orderData] }),
    }
  );

  const data = await response.json();

  // 如果 code 不为 0，表示失败，抛出错误
  if (data.code !== 0) {
    throw new Error(`Failed to insert order to Table A: ${data.msg}`);
  }

  // 确保 data.data 和 items 存在
  if (!data.data || !data.data.records || !data.data.records[0]) {
    throw new Error(
      `Unexpected response structure from Table A insert operation`
    );
  }

  console.log("Order successfully inserted to Table A");
  return data;
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

    // 处理 checkout.session.completed 事件
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // 格式化支付时间
      // const formattedPaymentTime = formatDateForFeishuGMT8(session.created);

      // 先插入用户到表 B
      const userRecordData = {
        fields: {
          real_name: session.customer_details?.name || "",
          email: session.customer_details?.email || "",
          phone: session.customer_details?.phone || "",
          创建时间: Date.now(),
        },
      };

      try {
        const userRecord = await insertToTableB(userRecordData); // 插入用户数据
        const userRecordId = userRecord.record_id; // 获取用户的 record_id
        console.log(userRecord.record_id);

        const orderRecordData = {
          fields: {
            channel_order_id: session.id,
            // channel_user_id: session.customer || "",
            // user_real_name: session.customer_details?.name || "",
            // user_email: session.customer_details?.email || "",
            user: [userRecordId], // 关联的用户ID
            phone: session.customer_details?.phone || "",
            real_price: (session.amount_total || 0) / 100, // 将金额从分转换为元
            currency_unit: session.currency?.toUpperCase() || "",
            pay_time: Date.now(), // 使用格式化后的支付时间
            order_state:
              session.payment_status === "paid" ? "已发货" : "未送达",
            product_category: "课程",
          },
        };

        console.log("插入到 Feishu 表的数据:", orderRecordData);
        await insertToTableA(orderRecordData); // 插入订单数据

        // // 检查并创建缺失的字段
        // const checkResult = await checkAndAddFields(recordData.fields);
        // console.log(checkResult); // 输出字段检查结果

        // const feishuResponse = await fetch(
        //   `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/records/batch_create`,
        //   {
        //     method: "POST",
        //     headers: {
        //       Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ records: [recordData] }),
        //   }
        // );

        // const result = await feishuResponse.json();
        // if (result.code !== 0) {
        //   throw new Error(`数据插入失败: ${result.msg}`);
        // }
        // console.log("数据成功插入到 Feishu 多维表:", result);
        res.status(200).json({ received: true });
      } catch (error: any) {
        console.error(
          "插入数据到 Feishu 多维表时发生错误:",
          error.response ? error.response.data : error.message
        );
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
