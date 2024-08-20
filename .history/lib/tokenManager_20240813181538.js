// lib/tokenManager.js
import fetch from 'node-fetch';

let cachedToken = null;
let tokenExpiry = null;

async function fetchToken() {
  try {
    // 请求新的 token
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getToken?app_id=${process.env.NEXT_PUBLIC_APP_ID}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&secret_key=${process.env.NEXT_PUBLIC_SECRET_KEY}&grant_type=client_credential`
    );

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
      throw new Error("Failed to fetch access_token: " + (data.error || "Unknown error"));
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
v