/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "./title/page";
import End from "../title/end";

const About: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <img
          src="/image2.jpg"
          alt=""
          style={{
            width: "100%",
            height: "auto", // 让图片按比例缩放适应宽度
          }}
        />
      </Grid>
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        The New Education
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginTop: "10px",
        }}
      >
        in AI age
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        All work and no play makes Jack a dull boy
      </div>

      <div
        style={{
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome From the Head of Lab
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="/LuXiangqian.png"
            alt=""
            width="160"
            height="180"
            style={{
              marginBottom: "10px",
            }}
          />
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginLeft: "0px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "0px",
              }}
            >
              Thank you for your interest in Lu Lab!
            </div>
            <br />
            So much has been accomplished since Lu Lab was founded in 1994. Our
            lab has grown in such tremendous ways, but I am so proud that our
            mission and our unique character have remained firmly in place.
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
        </div>
        <End />
      </div>
    </>
  );
};
