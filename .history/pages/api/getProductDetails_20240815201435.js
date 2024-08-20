"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../title/page";
import End from "../title/end";
import axios from "axios"; // For making API requests

const Course = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details when component mounts
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("/api/getProductDetails");
        setProductDetails(response.data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();

    // Add Stripe Buy Button script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
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
              {/* Stripe Buy Button code */}
              <stripe-buy-button
                buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
                publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
              ></stripe-buy-button>
            </Grid>
            <Grid item xs={12} md={6}>
              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1" color="error">
                  {error}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  {/* {productDetails?.name} <br />
                  Price: {productDetails?.price} <br />
                  Stock: {productDetails?.stock} <br />
                  <span style={{ color: "green" }}>
                    Includes 1 to 1 consultation and Q&A
                  </span>
                  <br />
                  Train children into <br />
                  Stanford Berkeley <br />
                  Instruct multiple participants to join <br />
                  Or start a unicorn company */}
                </Typography>
              )}
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
              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1" color="error">
                  {error}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  {productDetails?.name} <br />
                  Price: {productDetails?.price} <br />
                  Stock: {productDetails?.stock} <br />
                  <span style={{ color: "green" }}>
                    Includes 1 to 1 consultation and Q&A
                  </span>
                  <br />
                  Train children into <br />
                  Stanford Berkeley <br />
                  Instruct multiple participants to join <br />
                  Or start a unicorn company
                </Typography>
              )}
            </Grid>
          </>
        )}
      </Grid>
      <End />
    </>
  );
};

export default Course;
