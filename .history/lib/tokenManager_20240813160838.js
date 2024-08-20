// lib/tokenManager.js
import fetch from "node-fetch";

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  const currentTime = Date.now();

  // 如果缓存的token存在并且没有过期，直接返回缓存的token
  if (cachedToken && tokenExpiry && currentTime < tokenExpiry) {
    return cachedToken;
  }

  // 请求新的 token
  const res = await fetch(
    `/api/getToken?app_id=${process.env.NEXT_PUBLIC_APP_ID}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&secret_key=${process.env.NEXT_PUBLIC_SECRET_KEY}`
  );
  const data = await res.json();

  if (data.access_token) {
    cachedToken = data.access_token;
    tokenExpiry = currentTime + (data.expires_in - 60) * 1000; // 设置过期时间
    return cachedToken;
  } else {
    throw new Error("Failed to fetch access_token");
  }
}

export default getAccessToken;
