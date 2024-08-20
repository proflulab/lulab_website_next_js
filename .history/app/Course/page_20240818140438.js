"use client";
import {
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null); // Xiaoe access_token
  const [goodsData, setGoodsData] = useState(null); // 商品数据
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
      setAccessToken(data.access_token);
    } catch (error) {
      console.error("Error fetching Xiaoe token:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 获取商品数据的函数
  const getGoodsData = async () => {
    if (!accessToken) return;

    try {
      const response = await fetch("/api/getXiaoeGoods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resources: [
            {
              type: 50,
              ids: ["course_2k0XIFOjNxdCd9Uej4MjXwEBQmQ"],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch goods data");
      }

      const data = await response.json();
      setGoodsData(data.data[0]); // 假设返回的数组第一项是我们需要的数据
    } catch (error) {
      console.error("Error fetching goods data:", error.message);
      setError(error.message);
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

  useEffect(() => {
    if (accessToken) {
      getGoodsData(); // 获取商品数据
    }
  }, [accessToken]);

  const isSmallerScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <App />
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          padding: 2,
          justifyContent: "center",
        }}
        direction={isSmallerScreen ? "column" : "row"} // 根据屏幕宽度切换布局方向
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
        ) : goodsData ? (
          <>
            {/* 左侧：商品图片 */}
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="100%"
                image={goodsData.goods_img[0]} // 商品图片
                alt={goodsData.goods_name}
                sx={{ width: "100%", objectFit: "cover", borderRadius: 2 }}
              />
            </Grid>

            {/* 右侧：商品详情 */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {goodsData.goods_name} {/* 商品名称 */}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginTop: 2 }}
                  >
                    {goodsData.goods_detail_text && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: goodsData.goods_detail_text, // 商品描述（HTML）
                        }}
                      />
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    ¥{(goodsData.price_low / 100).toFixed(2)} {/* 商品价格 */}
                  </Typography>
                  {apiKey && buyButtonId && (
                    <Box sx={{ marginTop: 2 }}>
                      <stripe-buy-button
                        buy-button-id={buyButtonId}
                        publishable-key={apiKey}
                      ></stripe-buy-button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </>
        ) : (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            No goods data available
          </Typography>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
