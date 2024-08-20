import fetch from "node-fetch";
import axios from "axios";
let cachedToken = null;
let tokenExpiry = null;

async function fetchToken() {
  try {
    // 请求新的 token
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.access_token) {
      return {
        accessToken: data.access_token,
        expiresIn: data.expires_in,
      };
    } else {
      throw new Error(
        "Failed to fetch access_token: " + (data.error || "Unknown error")
      );
    }
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    throw new Error("Failed to fetch access_token");
  }
}

export default async function getAccessToken() {
  const currentTime = Date.now();

  // 如果缓存的 token 存在并且没有过期，直接返回缓存的 token
  if (cachedToken && tokenExpiry && currentTime < tokenExpiry) {
    return cachedToken;
  }

  // 请求新的 token
  try {
    const { accessToken, expiresIn } = await fetchToken();
    cachedToken = accessToken;
    tokenExpiry = currentTime + (expiresIn - 60) * 1000; // 设置过期时间，减去60秒的缓冲期
    return cachedToken;
  } catch (error) {
    throw new Error("Failed to fetch access_token");
  }
}
