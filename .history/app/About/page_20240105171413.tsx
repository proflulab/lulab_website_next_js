/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";

export default function About() {
  return (
    <>
      <App />
      <div style={{ height: "1000px", width: "1700px", position: "relative" }}>
        <img src="/image2.jpg" alt="" width="1700" height="1000" />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "70px",
            fontWeight: "bold",
          }}
        >
          The New Education
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "50px",
            fontWeight: "normal",
          }}
        >
          in AI age
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "40px",
            fontWeight: "normal",
          }}
        >
          All work and no play makes Jack a dull boy
        </div>

        <div
          style={{
            height: "800px",
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
            position: "absolute",
            top: "82%",
            paddingBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome From the Head of Lab
          </h1>
          <div
            style={{
              height: "300px",
              width: "55%",
              margin: "0 auto",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <img src="/LuXiangqian.png" alt="" width="260" height="280" />
            <div
              style={{
                color: "black",
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginLeft: "0px",
                  textAlign: "left",
                }}
              >
                Thank you for your interest in Lu Lab!
              </div>
              <br />
              So much has been accomplished since Lu Lab was founded in 1994.
              Our lab has grown in such tremendous ways, but I am so proud that
              our mission and our unique character have remained firmly in
              place.
              <br />
              <br />I invite you to explore our website, discover more about our
              worldwide learning community, and see what makes the Lu Lab
              experience so extraordinary. <br />
              <br />
              -Lewis X. Lu, Ph.D.
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#40A850",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Lu Lab Tuition Standard
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "40px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-55px",
              }}
            >
              TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
              MEMBER(ADULT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
              MEMBER(MINOR)
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-200px",
              }}
            >
              INDUSTRIAL
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥76,000
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-195px",
              }}
            >
              METAVERSE
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥19,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            />
            <End />
          </div>
        </div>
      </div>
    </>
  );
}
