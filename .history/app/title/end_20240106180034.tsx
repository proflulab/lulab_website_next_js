/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const End: React.FC = () => {
  return (
    <div style={{ background: "black", padding: "20px" }}>
      <div style={{ position: "relative" }}>
        <img src="/logo.png" alt="" height="50" width="50" />
        <p
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: "600",
            marginLeft: "25px",
          }}
        >
          Lu Lab
        </p>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "left",
          color: "white", // 设置文字颜色为白色
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          CONTACT INFO
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "400",
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
  );
};

export default End;
