"use client";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "./title/page";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [goodsData, setGoodsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchXiaoeToken = async () => {
      try {
        const response = await fetch("/api/getXiaoeToken", { method: "GET" });
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

    const fetchApiKey = async () => {
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
        console.error("Error fetching API key:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchData = async () => {
      await fetchXiaoeToken();
      await fetchApiKey();
    };

    fetchData();

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchGoodsData = async () => {
      if (!accessToken) return;
      try {
        const response = await fetch("/api/getXiaoeGoods", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resources: [{ type: 21, ids: ["g_665f2719e0bcd_mrMARvTL54"] }],
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch goods data");
        }
        const data = await response.json();
        setGoodsData(data.data[0]);
      } catch (error) {
        console.error("Error fetching goods data:", error.message);
        setError(error.message);
      }
    };

    fetchGoodsData();
  }, [accessToken]);

  return (
    <>
      <App />
      <Grid
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
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
        ) : goodsData ? (
          <Card sx={{ maxWidth: 600, margin: "20px", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="400"
              image={goodsData.goods_img[0]} // 商品图片
              alt={goodsData.goods_name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
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
            </CardContent>
          </Card>
        ) : (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            No goods data available
          </Typography>
        )}
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
          padding: "10px 0",
          zIndex: 1000,
        }}
      >
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <stripe-buy-button
          buy-button-id="buy_btn_1PfCPSEmgDIszJrIncbXJvj4"
          publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
        ></stripe-buy-button>
      </div>
    </>
  );
};

export default Course;
