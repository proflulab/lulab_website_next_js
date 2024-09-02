// pages/api/getXiaoeGoods.js

// 获取 Xiaoe access_token 的函数
import accessToken from "../api/getXiaoeToken";

export default async function handler(req, res) {
  try {
    const apiUrl = "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: accessToken,
        resources,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch goods data");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching goods data:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
