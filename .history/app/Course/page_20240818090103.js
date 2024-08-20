"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null); // 用于存储 access_token
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 用于存储错误信息

  // 获取 access_token 的函数
  const getAccessToken = async () => {
    const apiUrl = "https://api.xiaoe-tech.com/token";
    const params = {
      app_id: "app7SI9foD2454", // 替换为你的app_id
      client_id: "xopTLrQOK9O9175", // 替换为你的client_id
      secret_key: "vbKx6QkVe4soNAdv7GLYegWwWa5aQPhp", // 替换为你的secret_key
      grant_type: "client_credential",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      // 检查是否请求成功
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch access_token");
      }

      setAccessToken(data.access_token); // 保存 access_token
    } catch (error) {
      setError(error.message); // 捕获错误信息
    } finally {
      setLoading(false); // 请求完成，设置 loading 为 false
    }
  };

  useEffect(() => {
    getAccessToken(); // 页面加载时请求 access_token
  }, []); // 空依赖数组，表示只在组件加载时执行一次

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
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            Access Token: {accessToken}
          </Typography>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
