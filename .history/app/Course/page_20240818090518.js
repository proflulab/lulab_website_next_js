"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState(null); // Stripe API Key
  const [buyButtonId, setBuyButtonId] = useState(null); // Stripe Buy Button ID

  // 获取 access_token 的函数
  const getAccessToken = async () => {
    const apiUrl = "https://api.xiaoe-tech.com/token";
    const params = {
      app_id: "app7SI9foD2454", // 替换为你的 app_id
      client_id: "xopTLrQOK9O9175", // 替换为你的 client_id
      secret_key: "vbKx6QkVe4soNAdv7GLYegWwWa5aQPhp", // 替换为你的 secret_key
      grant_type: "client_credential",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // 修改为POST请求
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch access_token");
      }

      const data = await response.json();
      setAccessToken(data.access_token); // 保存 access_token
    } catch (error) {
      setError(error.message); // 捕获错误信息
    } finally {
      setLoading(false); // 请求完成，设置 loading 为 false
    }
  };

  const getApiKey = async () => {
    try {
      const response = await fetch("/api/getapikey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_name: "stripe API Key" }),
      });
      const result = await response.json();
      if (response.ok) {
        setApiKey(result.api_key);
        setBuyButtonId(result.buy_button_id); // 设置 Buy Button ID
      } else {
        throw new Error(result.error || "Error fetching API key.");
      }
    } catch (error) {
      console.error("Error fetching API key:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccessToken(); // 页面加载时请求 access_token
    getApiKey(); // 页面加载时获取 Stripe 的 API Key 和 Buy Button ID

    // 动态添加 Stripe Buy Button 脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 在组件卸载时移除脚本
      document.body.removeChild(script);
    };
  }, []); // 依赖项为空数组，表示只在组件加载时执行一次

  const isSmallerScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <App />
      <Grid
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          display: "flex",
          flexDirection: isSmallerScreen ? "column" : "row", // 移动端垂直布局，其他水平布局
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            Loading...
          </Typography>
        ) : error ? (
          <Typography
            variant="body1"
            sx={{ color: "red", textAlign: "center" }}
          >
            Error: {error}
          </Typography>
        ) : (
          <>
            <Typography
              variant="body1"
              sx={{ color: "black", textAlign: "center" }}
            >
              Access Token: {accessToken}
            </Typography>
            {/* Stripe Buy Button 仅在 API 密钥和按钮 ID 存在时显示 */}
            {!loading && apiKey && buyButtonId && (
              <stripe-buy-button
                buy-button-id={buyButtonId}
                publishable-key={apiKey}
              ></stripe-buy-button>
            )}
          </>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
