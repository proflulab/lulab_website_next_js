/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const End: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative" }}>
        {/* 使用一个空的占位元素来替换图片 */}
        <div
          style={{
            height: "230px", // 保持与图片高度相同
            width: "100%", // 或设置与图片相同的宽度
            backgroundColor: "#e0e0e0", // 或其他颜色作为占位符
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "2%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/logo.png" alt="" height="50" width="50" />
          <p
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginLeft: "20px",
            }}
          >
            Lu Lab
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "90px",
            left: "2.5%",
            textAlign: "left",
          }}
        >
          <div
            style={{
              color: "grey",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            CONTACT INFO
          </div>
          <div
            style={{
              color: "grey",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "2px",
              textAlign: "left",
            }}
          >
            <br />
            admin@lulabs.org
            <br />
            <br />
            East Brokaw Road 310-F San Jose, CA 95112 USA <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
