"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 动态添加 Stripe Buy Button 脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 在组件卸载时移除脚本
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // 获取商品详情
    const fetchProductDetails = async () => {
      try {
        const res = await fetch("/api/getProductDetails");
        const data = await res.json();
        setProduct(data[0]); // 假设返回的数据是数组，这里只取第一个商品详情
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetails();
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
        {isSmallerScreen ? (
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
                {product && (
                  <>
                    {product.goods_name} <br />
                    <img
                      src={product.goods_img[0]}
                      alt={product.goods_name}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <br />
                    {product.goods_detail_text && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.goods_detail_text,
                        }}
                        style={{ textAlign: "left" }}
                      ></div>
                    )}
                    <span style={{ color: "green" }}>
                      Includes 1 to 1 consultation and Q&A
                    </span>
                    <br />
                    Price: ¥{product.sku[0].sku_price / 100}
                    <br />
                    Stock: {product.extend.stock}
                  </>
                )}
              </Typography>
            </Grid>
          </>
        ) : (
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
                {product && (
                  <>
                    {product.goods_name} <br />
                    <img
                      src={product.goods_img[0]}
                      alt={product.goods_name}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <br />
                    {product.goods_detail_text && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.goods_detail_text,
                        }}
                        style={{ textAlign: "left" }}
                      ></div>
                    )}
                    <span style={{ color: "green" }}>
                      Includes 1 to 1 consultation and Q&A
                    </span>
                    <br />
                    Price: ¥{product.sku[0].sku_price / 100}
                    <br />
                    Stock: {product.extend.stock}
                  </>
                )}
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
