"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [token, setToken] = useState(null); // 存储 access_token
  const [loading, setLoading] = useState(true);

  // 获取 access_token
  const getToken = async () => {
    try {
      const response = await fetch("https://api.xiaoe-tech.com/token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app_id: "appp7SI9foD2454", // 替换为真实的 app_id
          client_id: "xopTLrQOK9O9175", // 替换为真实的 client_id
          secret_key: "vbKx6QkVe4soNAdv7GLYegWwWa5aQPhp", // 替换为真实的 secret_key
          grant_type: "client_credential",
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setToken(result.access_token); // 存储获取到的 access_token
      } else {
        throw new Error(result.error || "Error fetching access token.");
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken(); // 获取 access_token

    // 这里可以继续动态加载其他所需脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 清理脚本
    };
  }, []); // 仅在页面加载时执行

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
        {isSmallerScreen ? (
          <>
            <Grid item xs={12} md={4}>
              {/* 如果需要用到 access_token，你可以在这里利用它 */}
              {!loading && token && (
                <Typography variant="body1">Access Token: {token}</Typography>
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
              {!loading && token && (
                <Typography variant="body1">Access Token: {token}</Typography>
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
