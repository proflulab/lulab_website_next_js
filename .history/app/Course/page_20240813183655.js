"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/api/getProductDetails");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
                {productDetails ? (
                  <>
                    {productDetails.name} <br />
                    {productDetails.description} <br />
                    <span style={{ color: "green" }}>
                      Price: {productDetails.price}
                    </span>
                  </>
                ) : (
                  "No product details available."
                )}
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={4}>
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
                {productDetails ? (
                  <>
                    {productDetails.name} <br />
                    {productDetails.description} <br />
                    <span style={{ color: "green" }}>
                      Price: {productDetails.price}
                    </span>
                  </>
                ) : (
                  "No product details available."
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
