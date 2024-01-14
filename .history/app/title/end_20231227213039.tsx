"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const End: React.FC = () => {
  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <div style={{ flex: "0 0 5%", marginRight: "20px" }}>
        <Image src="/logo.png" alt="" height="50" width="50" />
      </div>
      <div style={{ flex: "0 0 95%" }}>
        <Image src="/title.jpg" alt="" height="230" width="100%" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "90px",
          left: "2.5%",
          textAlign: "left",
          flex: "0 0 95%",
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
  );
};

export default End;
