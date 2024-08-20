"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [productData, setProductData] = useState(null); // State to store product data

  useEffect(() => {
    // Fetch product data from the API
    const fetchProductData = async () => {
      const response = await axios.post(
        "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: "Y2FHMTNLNZGTMDY2YY0ZN2I4LTG4MWMTNZQ4Y2NLYTIYM2E3", // replace with your actual token
            resources: [
              {
                type: 2, // or the appropriate resource type
                ids: ["p_62692d0ee4b09dda126125b5"], // replace with the actual ID
              },
            ],
            body: "stock,sku,attr",
          }),
        }
      );

      const data = await response.json();
      if (data.code === 0) {
        // Check if request was successful
        setProductData(data.data[0]); // Set the product data
      } else {
        console.error("Failed to fetch product data:", data.msg);
      }
    };

    fetchProductData();

    // Dynamically add Stripe Buy Button script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs only on mount

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
        {productData ? (
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
                {productData.goods_name} <br />
                {productData.goods_brief_text} <br />
                <span style={{ color: "green" }}>
                  {productData.price_low / 100} - {productData.price_high / 100}{" "}
                  USD
                </span>
                <br />
                {productData.goods_detail_text}
              </Typography>
            </Grid>
          </>
        ) : (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            Loading...
          </Typography>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
