// Import Material UI components
import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import { Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";

const Course = () => {
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
  }, []); // 依赖项为空数组表示只在组件加载时运行一次

  return (
    <>
      <App />
      {/* Material UI Container for centering content */}
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Paper
          elevation={3}
          style={{ backgroundColor: "white", padding: "20px" }}
        >
          {/* Material UI Grid for responsive layout */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Your main content goes here */}
              <Image src="your-image-url" alt="Your Image" />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Stripe Buy Button and End component */}
              <div>
                <stripe-buy-button
                  buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
                  publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
                ></stripe-buy-button>
                <End />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Course;
