import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Handling request...");

  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_SECRET_KEY } =
    process.env;

  // 确保环境变量被设置
  if (
    !NEXT_PUBLIC_APP_ID ||
    !NEXT_PUBLIC_CLIENT_ID ||
    !NEXT_PUBLIC_SECRET_KEY
  ) {
    console.error("Missing environment variables");
    return res.status(500).json({
      message: "Internal server error: Missing environment variables",
    });
  }

  // 使用 URLSearchParams 构造参数
  const params = new URLSearchParams({
    app_id: NEXT_PUBLIC_APP_ID,
    client_id: NEXT_PUBLIC_CLIENT_ID,
    secret_key: NEXT_PUBLIC_SECRET_KEY,
    grant_type: "client_credential",
  });

  const apiUrl = "https://api.xiaoe-tech.com/token";

  try {
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      method: "GET",
    });

    if (!response.ok) {
      console.error("Failed to fetch Xiaoe access token");
      throw new Error("Failed to fetch Xiaoe access token");
    }

    const data = await response.json();
    console.log("Xiaoe Token Response:", data);
    return res.status(200).json({ access_token: data.data.access_token });
  } catch (error) {
    // 确保 error 是 Error 类型
    if (error instanceof Error) {
      console.error("Error fetching Xiaoe token:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    } else {
      console.error("Unknown error occurred:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
