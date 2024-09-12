// utils/stripe_webhook.ts

// 插入表 B (用户表)
export async function insertToTableB(
  feishuAppToken: string,
  feishuTableBId: string,
  session: any
) {
  // 插入用户到表 B
  const userRecordData = {
    fields: {
      real_name: session.customer_details?.name || "",
      email: session.customer_details?.email || "",
      phone: session.customer_details?.phone || "",
      创建时间: Date.now(),
    },
  };

  const response = await fetch(
    `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableBId}/records/batch_create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [userRecordData] }),
    }
  );

  const data = await response.json();

  if (data.code !== 0) {
    throw new Error(`Failed to insert user to Table B: ${data.msg}`);
  }

  if (!data.data || !data.data.records || !data.data.records[0]) {
    throw new Error(
      `Unexpected response structure from Table B insert operation`
    );
  }

  return data.data.records[0].record_id;
}

// 插入表 A (订单表)
export async function insertToTableA(
  feishuAppToken: string,
  feishuTableAId: string,
  session: any,
  userRecordId: any
) {
  // 插入订单到表 A
  const orderRecordData = {
    fields: {
      channel_order_id: session.id,
      user: [userRecordId],
      phone: session.customer_details?.phone,
      real_price: (session.amount_total || 0) / 100,
      currency_unit: session.currency?.toUpperCase() || "",
      pay_time: Date.now(),
      order_state: session.payment_status === "paid" ? "已发货" : "未送达",
      product_category: "课程",
    },
  };

  const response = await fetch(
    `https://base-api.feishu.cn/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableAId}/records/batch_create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [orderRecordData] }),
    }
  );

  const data = await response.json();

  if (data.code !== 0) {
    throw new Error(`Failed to insert order to Table A: ${data.msg}`);
  }

  if (!data.data || !data.data.records || !data.data.records[0]) {
    throw new Error(
      `Unexpected response structure from Table A insert operation`
    );
  }

  return data.data.records[0];
}
