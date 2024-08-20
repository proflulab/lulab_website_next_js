// pages/api/getXiaoeGoods.js
import fetch from "node-fetch";

const getXiaoeToken = async () => {
  try {
    const response = await fetch("/api/getXiaoeToken", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Xiaoe access token");
    }

    const data = await response.json();
    console.log("Xiaoe Token Response:", data); // 添加日志
    setAccessToken(data.data.access_token); // 将 access_token 存储到状态中
  } catch (error) {
    console.error("Error fetching Xiaoe token:", error.message);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { resources } = req.body;

  if (!resources) {
    return res.status(400).json({ message: "Missing parameters" });
  }

  try {
    const accessToken = await getXiaoeToken();

    const apiUrl = "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: accessToken,
        resources,
        body: "stock,sku,attr",
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
