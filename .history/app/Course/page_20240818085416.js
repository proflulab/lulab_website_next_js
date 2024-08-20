"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 获取 access_token
  const getAccessToken = async () => {
    const apiUrl = "https://api.xiaoe-tech.com/token";
    const params = {
      app_id: "appp7SI9foD2454",  // 替换为你的app_id
      client_id: "xopTLrQOK9O9175",  // 替换为你的client_id
      secret_key: "vbKx6QkVe4soNAdv7GLYegWwWa5aQPhp",  // 替换为你的secret_key
      grant_type: "client_credential",
    };
    
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${apiUrl}?${queryString}`;

    try {
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setAccessToken(data.access_token); // 假设 API 返回的 access_token 在 data.access_token
    } catch (error) {
      console.error("Error fetching access_token:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccessToken();
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
          flexDirection: isSmallerScreen ? "column" : "row", // 移动端垂直布局，其他水平布局
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSmallerScreen ? (
          <>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ color: "black", textAlign: "center" }}
              >
                Access Token
              </Typography>
              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1" color="error">
                  Error: {error}
                </Typography>
              ) : (
                <Typography variant="body1">
                  {accessToken ? accessToken : "No token received"}
                </Typography>
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
              <Typography
                variant="h6"
                sx={{ color: "black", textAlign: "center" }}
              >
                Access Token
              </Typography>
              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1" color="error">
                  Error: {error}
                </Typography>
              ) : (
                <Typography variant="body1">
                  {accessToken ? accessToken : "No token received"}
                </Typography>
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
