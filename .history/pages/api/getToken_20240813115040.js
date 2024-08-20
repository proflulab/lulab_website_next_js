// pages/api/getToken.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { app_id, client_id, secret_key, grant_type } = req.query;

    // 发起 GET 请求到小鹅通的获取 access_token 接口
    const response = await axios.get("https://api.xiaoe-tech.com/token", {
      params: {
        app_id,
        client_id,
        secret_key,
        grant_type: "client_credential",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 检查是否成功获取到 access_token
    if (response.data.code === 0) {
      res.status(200).json(response.data.data);
    } else {
      res.status(400).json({ error: response.data.msg });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch access_token" });
  }
}
