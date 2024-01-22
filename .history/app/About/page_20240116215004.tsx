/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "@nextui-org/react";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";
import { Box, Divider, Grid, Typography } from "@mui/material";

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
        }}
      >
        <Typography
          variant="h1"
          style={{ fontSize: "4vw", fontWeight: "bold" }}
        >
          The New Education
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          style={{ fontSize: "3vw", fontWeight: "normal" }}
        >
          in AI age
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: "2.4vw", fontWeight: "normal" }}
        >
          All work and no play makes Jack a dull boy
        </Typography>
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
        <Typography
          variant="h1"
          style={{ fontSize: "3vw", fontWeight: "bold", color: "black" }}
        >
          Welcome From the Head of Lab
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            marginTop: "20px",
            backgroundColor: "#DDDDDD",
            padding: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#40A850",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Lu Lab Tuition Standard
          </Typography>
          <Divider
            sx={{
              border: "none",
              borderBottom: { xs: "1px solid black", md: "none" },
              width: "70%",
              margin: "auto",
              marginTop: "40px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
              textIndent: { xs: "0px", md: "-55px" },
            }}
          >
            TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
            MEMBER(ADULT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
            MEMBER(MINOR)
          </Typography>
          <Divider
            sx={{
              border: "none",
              borderBottom: { xs: "1px solid black", md: "none" },
              width: "70%",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
              textIndent: "-200px",
            }}
          >
            INDUSTRIAL
            GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥76,000
          </Typography>
          <Divider
            sx={{
              border: "none",
              borderBottom: { xs: "1px solid black", md: "none" },
              width: "70%",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "14px", md: "20px" },
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
          </Typography>
          <Divider
            sx={{
              border: "none",
              borderBottom: { xs: "1px solid black", md: "none" },
              width: "70%",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          />
        </Box>
        <End />
      </div>
    </>
  );
}
