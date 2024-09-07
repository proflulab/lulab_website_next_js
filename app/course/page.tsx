"use client";

import { Grid, Typography, Card, CardContent, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const Course = () => {
  const [goodsData, setGoodsData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const buyButtonId = "buy_btn_1PuU6jJAR8bDRsEHJ75g29QJ";
  const publishableKey = "pk_live_51OdmsRJAR8bDRsEHIoskHYvVlHrxSILRwkvbEGaHJkg5PQcpb22j3lC2XdWptqbl28hNLtaBJQYozW4uy9xGGeo500aE45XnDP";

  useEffect(() => {
    const fetchXiaoeGood = async () => {
      try {
        const response = await fetch("/api/xiaoe/good", { method: "GET" });
        if (!response.ok) {
          throw new Error("Failed to fetch Xiaoe good");
        }
        const data = await response.json();
        setGoodsData(data.data[0]);
      } catch (error) {
        setError((error as Error).message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchXiaoeGood();

    const loadStripeScript = () => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const stripeScriptCleanup = loadStripeScript();

    return stripeScriptCleanup;
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f5f5f5" }}>
        <CircularProgress sx={{ color: "#5e72e4" }} />
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" sx={{ color: "red", textAlign: "center" }}>
        Error: {error}
      </Typography>
    );
  }

  if (!goodsData) {
    return (
      <Typography variant="body1" sx={{ color: "black", textAlign: "center" }}>
        No goods data available
      </Typography>
    );
  }

  return (
    <>
      <App />
      <Grid
        sx={{
          backgroundColor: "white",
          backgroundImage: "linear-gradient(to right, #f8f9fa, #e9ecef)",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          marginTop: 0, // Ensure no top margin
          width: "100%",
        }}
      >
        <Card
          sx={{
            maxWidth: isMobile ? 360 : 600,
            margin: "0px",
            textAlign: "center",
            borderRadius: "16px", // 圆角
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // 阴影
          }}
        >
          <Carousel>
            {goodsData.goods_img.map((img: string, index: number) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  height: isMobile ? "250px" : "400px",
                }}
              >
                <Image
                  src={img}
                  alt={`商品图片 ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }} // 渐入效果
                  onLoadingComplete={(img) => (img.style.opacity = "1")}
                />
              </div>
            ))}
          </Carousel>
          <CardContent>
            <Typography variant="h5" component="div">
              {goodsData.goods_name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
              价格: ¥{(goodsData.price_high / 100).toFixed(2)}
            </Typography>
            {goodsData.goods_detail_text && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: 2, lineHeight: "1.6" }} // 增加行间距
                dangerouslySetInnerHTML={{ __html: goodsData.goods_detail_text }}
              />
            )}
          </CardContent>
        </Card>
      </Grid>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 0", // 减少高度
          zIndex: 1000,
        }}
      >
        <stripe-buy-button
          buy-button-id={buyButtonId} // 使用变量
          publishable-key={publishableKey} // 使用变量
        ></stripe-buy-button>
      </div>
    </>
  );
};

export default Course;