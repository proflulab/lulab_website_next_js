"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";
import { getProductDetails } from "../lib/api"; // 导入 API 调用函数

const Course = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 调用 API 获取商品详情
    const fetchData = async () => {
      try {
        const data = await getProductDetails();
        setProductDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();

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
          flexDirection: isSmallerScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : productDetails ? (
          <>
            <Grid item xs={12} md={4}>
              {/* Stripe Buy Button code */}
              <stripe-buy-button
                buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
                publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
              ></stripe-buy-button>
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
                {productDetails.stock} units available <br />
                SKU: {productDetails.sku} <br />
                Attributes: {productDetails.attr.join(", ")}
              </Typography>
            </Grid>
          </>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
