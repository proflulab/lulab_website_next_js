// lib/cache.js
let tokenCache = {
  accessToken: null,
  expiresAt: null, // 记录过期时间
};

export const setAccessToken = (token, expiresIn) => {
  tokenCache.accessToken = token;
  tokenCache.expiresAt = Date.now() + expiresIn * 1000; // 将过期时间设为当前时间加上 `expires_in`
};

export const getAccessToken = () => {
  if (tokenCache.expiresAt && tokenCache.expiresAt > Date.now()) {
    return tokenCache.accessToken;
  }
  return null;
};
