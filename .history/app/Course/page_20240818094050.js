"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [apiKey, setApiKey] = useState(null);
  const [buyButtonId, setBuyButtonId] = useState(null);
  const [loading, setLoading] = useState(true);

  // 获取 API 密钥和 Buy Button ID
  // pages/api/getXiaoeToken.js
  async function handler(req, res) {
    if (req.method === "GET") {
      try {
        // 你的逻辑来获取 Xiaoe token
        const accessToken = "../"; // 替换为实际获取 token 的逻辑
        res.status(200).json({ access_token: accessToken });
      } catch (error) {
        res.status(500).json({ message: "Failed to fetch Xiaoe token" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }

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
    getApiKey();

    // 动态添加 Stripe Buy Button 脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 在组件卸载时移除脚本
      document.body.removeChild(script);
    };
  }, []); // 依赖项为空数组表示只在组件加载时运行一次

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
        {isSmallerScreen ? (
          <>
            <Grid item xs={12} md={4}>
              {/* Stripe Buy Button code */}
              {!loading && apiKey && buyButtonId && (
                <stripe-buy-button
                  buy-button-id={buyButtonId}
                  publishable-key={apiKey}
                ></stripe-buy-button>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  textAlign: "center",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Tsinghua Professor Lu Xiangqian <br />
                Family Education & Career Development planning <br />
                <span style={{ color: "green" }}>
                  Includes 1 to 1 consultation and Q&A
                </span>
                <br />
                Train children into <br />
                Stanford Berkeley <br />
                Instruct multiple participants to join <br />
                Or start a unicorn company
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={4}>
              {/* Stripe Buy Button code */}
              {!loading && apiKey && buyButtonId && (
                <stripe-buy-button
                  buy-button-id={buyButtonId}
                  publishable-key={apiKey}
                ></stripe-buy-button>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  textAlign: "center",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Tsinghua Professor Lu Xiangqian <br />
                Family Education & Career Development planning <br />
                <span style={{ color: "green" }}>
                  Includes 1 to 1 consultation and Q&A
                </span>
                <br />
                Train children into <br />
                Stanford Berkeley <br />
                Instruct multiple participants to join <br />
                Or start a unicorn company
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
