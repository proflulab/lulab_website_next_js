"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAccessToken = async () => {
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
      console.log("Response data:", data); // 打印完整响应数据进行调试
      setAccessToken(data.access_token); // 假设 access_token 在 data.access_token 中
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
