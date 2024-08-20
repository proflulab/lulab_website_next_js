/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";
import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();

  return (
    <>
      <App />
      <Grid container>
        <div style={{ position: "relative" }}>
          <img
            src="/image2.jpg"
            alt="Background"
            style={{
              width: "100vw",
              height: "50vw",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontSize: "4.5vw",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              }}
            >
              The New Education
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "4vw",
                fontWeight: "normal",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              in AI Age
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontSize: "2.4vw",
                fontWeight: "normal",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              All work and no play makes Jack a dull boy
            </Typography>
          </div>
        </div>
      </Grid>

      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontSize: "2.5rem",
            color: "black",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Welcome From the Head of Lab
        </Typography>
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            margin: "0 auto",
            backgroundColor: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/LuXiangqian.png"
            alt="Head of Lab"
            style={{ width: "360px", height: "380px", borderRadius: "8px" }}
          />
          <Grid
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "400",
              marginLeft: { xs: "0", md: "20px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Thank you for your interest in Lu Lab!
            </Typography>
            So much has been accomplished since Lu Lab was founded in 1994. Our
            lab has grown in such tremendous ways, but I am so proud that our
            mission and our unique character have remained firmly in place.
            <br />
            <br />
            I invite you to explore our website, discover more about our
            worldwide learning community, and see what makes the Lu Lab
            experience so extraordinary.
            <br />
            <br />
            -Lewis X. Lu, Ph.D.
          </Grid>
        </Box>

        <div style={{ marginTop: "2rem" }}>
          <Box
            sx={{
              margin: "0 auto",
              width: { xs: "90%", md: "80%" }, // Adjust width based on screen size
              padding: "2rem",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                color: "#40A850",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Lu Lab Tuition Standard
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",
                marginBottom: "1rem",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                textAlign: "left",
                whiteSpace: "pre-line",
              }}
            >
              TYPE
              {"\n"}INDIVIDUAL MEMBER{"\n"}¥38,000 {"\n"}FAMILY MEMBER{"\n"}
              ¥76,000
              {"\n\n"}
              INDUSTRIAL GRADE{"\n"}¥38,000 {"\n"}¥76,000
              {"\n\n"}
              METAVERSE GRADE{"\n"}¥19,000 {"\n"}¥38,000
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            />
          </Box>

          <div style={{ marginTop: "2rem" }}>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#40A850",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
            >
              Learn More
            </Button>
          </div>

          <End />
        </div>
      </div>
    </>
  );
}
