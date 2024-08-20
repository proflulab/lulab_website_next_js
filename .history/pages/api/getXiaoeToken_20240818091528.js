// pages/api/getXiaoeToken.js

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    NEXT_PUBLIC_APP_ID,
    NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_SECRET_KEY,
    NEXT_PUBLIC_SUPABASE_URL,
  } = process.env;

  const apiUrl = "https://api.xiaoe-tech.com/token";

  const params = {
    app_id: NEXT_PUBLIC_APP_ID,
    client_id: NEXT_PUBLIC_CLIENT_ID,
    secret_key: NEXT_PUBLIC_SECRET_KEY,
    grant_type: XIAOE_GRANT_TYPE,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST", // Xiaoe的接口是POST请求
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Failed to fetch access token" });
    }

    const data = await response.json();
    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
