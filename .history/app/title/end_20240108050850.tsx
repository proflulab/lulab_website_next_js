/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const End: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", height: "30vh" }}>
      <div style={{ marginLeft: "30px", paddingTop: "20px" }}>
        <div
          style={{
            position: "relative",

            display: "flex",
          }}
        >
          <img src="/logo.png" alt="" height="50" width="50" />
          <p
            style={{
              marginTop: "5px",
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
