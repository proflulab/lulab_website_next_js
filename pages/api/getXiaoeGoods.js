// pages/api/getXiaoeGoods.js

// 获取 Xiaoe access_token 的函数
const getXiaoeToken = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/getXiaoeToken`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Xiaoe access token");
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching Xiaoe token:", error.message);
    throw error;
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
    // 获取 access_token
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
