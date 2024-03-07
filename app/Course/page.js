"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
  useEffect(() => {
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
              {/* Stripe Buy Button code */}
              <stripe-buy-button
                buy-button-id="buy_btn_1OpiXQJAR8bDRsEH6knOQv8R"
                publishable-key="pk_live_51OdmsRJAR8bDRsEHIoskHYvVlHrxSILRwkvbEGaHJkg5PQcpb22j3lC2XdWptqbl28hNLtaBJQYozW4uy9xGGeo500aE45XnDP"
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
              {/* Stripe Buy Button code */}
              <stripe-buy-button
                buy-button-id="buy_btn_1OpiXQJAR8bDRsEH6knOQv8R"
                publishable-key="pk_live_51OdmsRJAR8bDRsEHIoskHYvVlHrxSILRwkvbEGaHJkg5PQcpb22j3lC2XdWptqbl28hNLtaBJQYozW4uy9xGGeo500aE45XnDP"
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
