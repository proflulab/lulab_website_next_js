// pages/api/getXiaoeToken.js
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_SECRET_KEY } =
    process.env;

  // 构建请求体
  const params = new URLSearchParams({
    app_id: NEXT_PUBLIC_APP_ID,
    client_id: NEXT_PUBLIC_CLIENT_ID,
    secret_key: NEXT_PUBLIC_SECRET_KEY,
    grant_type: "client_credential",
  }).toString();

  const apiUrl = `https://api.xiaoe-tech.com/token?${params}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Xiaoe access token");
    }

    const data = await response.json();
    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    console.error("Error fetching Xiaoe token:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
