// pages/index.js
import { useState, useEffect } from "react";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 定义请求函数
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("https://api.xiaoe-tech.com/token", {
          method: "GET", // or 'GET' depending on the API endpoint method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_id: "appp7SI9foD2454", // replace with your actual app_id
            client_id: "xopxxxxxxxxxx", // replace with your actual client_id
            secret_key: "xxxxxxxxxxxxx", // replace with your actual secret_key
            grant_type: "client_credential",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAccessToken(data.access_token); // 假设返回的 JSON 包含 access_token 字段
      } catch (error) {
        setError(error.message);
      }
    };

    // 调用请求函数
    fetchAccessToken();
  }, []);

  return (
    <div>
      <h1>Access Token Example</h1>
      {error && <p>Error: {error}</p>}
      {accessToken ? <p>Access Token: {accessToken}</p> : <p>Loading...</p>}
    </div>
  );
}
