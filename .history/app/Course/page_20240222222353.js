"use client";
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
      <div
        style={{
          backgroundColor: "white",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {/* Stripe Buy Button code */}
          <stripe-buy-button
            buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
            publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
          ></stripe-buy-button>
        </div>
        <div style={{ marginLeft: "20px", colors: black }}>
          {/* Additional text */}
          <p>
            Tsinghua Professor Lu Xiangqian <br />
            Family Education & Career Development planning <br />
            Includes 1 to 1 consultation and Q&A <br />
            Train children into <br />
            Stanford Berkeley <br />
            Instruct multiple participants to join <br />
            Or start a unicorn company
          </p>
        </div>
      </div>
      <End />
    </>
  );
};

export default Course;
