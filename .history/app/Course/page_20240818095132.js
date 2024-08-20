"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null); // 用于存储 Xiaoe access_token
  const [apiKey, setApiKey] = useState(null); // Stripe API Key
  const [buyButtonId, setBuyButtonId] = useState(null); // Stripe Buy Button ID
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 错误信息

  // 获取 Xiaoe access_token 的函数
  const getXiaoeToken = async () => {
    try {
      const response = await fetch("/api/getXiaoeToken", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Xiaoe access token");
      }

      const data = await response.json();
      setAccessToken(data.access_token); // 将 access_token 存储到状态中
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 获取 Stripe API Key 和 Buy Button ID 的函数
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
        setBuyButtonId(result.buy_button_id);
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
    getXiaoeToken(); // 页面加载时请求 Xiaoe access_token
    getApiKey(); // 获取 Stripe API Key 和 Buy Button ID

    // 动态添加 Stripe Buy Button 脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const isSmallerScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <App />
      <Grid
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          display: "flex",
          flexDirection: isSmallerScreen ? "column" : "row",
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
              Access Token: {accessToken ? accessToken : "No token available"}
            </Typography>
            {/* Stripe Buy Button 仅在 API 密钥和按钮 ID 存在时显示 */}
            {apiKey && buyButtonId && (
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
