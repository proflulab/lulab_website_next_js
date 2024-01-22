/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "@nextui-org/react";

import React from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";
import { Grid } from "@mui/material";

export default function About() {
  return (
    <>
      <App />
      <Grid>
        <img
          src="/image2.jpg"
          alt=""
          style={{
            width: "100vw",
            height: "50vw",
          }}
        />
      </Grid>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "4vw", // Adjusted font size for mobile
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
          fontSize: "3vw", // Adjusted font size for mobile
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
          fontSize: "2.5vw", // Adjusted font size for mobile
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
            fontSize: "4vw", // Adjusted font size for mobile
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome From the Head of Lab
        </h1>
        <div
          style={{
            height: "300px",
            width: "90%", // Adjusted width for mobile
            margin: "0 auto",
            backgroundColor: "#DDDDDD",
            display: "flex",
            flexDirection: "column", // Adjusted flex direction for mobile
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          <img src="/LuXiangqian.png" alt="" width="80%" height="auto" />{" "}
          {/* Adjusted image size for mobile */}
          <div
            style={{
              color: "black",
              fontSize: "3vw", // Adjusted font size for mobile
              fontWeight: "400",
              marginLeft: "0px",
              textAlign: "left",
              padding: "10px", // Added padding for mobile
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: "3.5vw", // Adjusted font size for mobile
                fontWeight: "800",
                marginLeft: "0px",
                textAlign: "left",
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
              fontSize: "4vw", // Adjusted font size for mobile
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
              width: "90%", // Adjusted width for mobile
              margin: "auto",
              marginTop: "40px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "2vw", // Adjusted font size for mobile
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
            MEMBER(ADULT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
            MEMBER(MINOR)
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "90%", // Adjusted width for mobile
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "2vw", // Adjusted font size for mobile
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
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
              width: "90%", // Adjusted width for mobile
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "2vw", // Adjusted font size for mobile
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
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
              width: "90%", // Adjusted width for mobile
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
}
