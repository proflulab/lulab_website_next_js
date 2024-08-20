/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <App />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: { xs: "50vw", md: "50vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("/image2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", color: "white" }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "5vw", md: "4.5vw" }, fontWeight: "bold" }}
          >
            The New Education
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "4vw", md: "4vw" }, fontWeight: "normal" }}
          >
            in AI age
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "3vw", md: "2.4vw" }, fontWeight: "normal" }}
          >
            All work and no play makes Jack a dull boy
          </Typography>
        </motion.div>
      </Box>

      {/* Intro Section */}
      <Box
        sx={{
          padding: { xs: "20px", md: "40px" },
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "25px", md: "40px" },
            color: "black",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome From the Head of Lab
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <img
              src="/LuXiangqian.png"
              alt="Lewis X. Lu"
              style={{
                width: "100%",
                maxWidth: "360px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "15px", md: "24px" },
                fontWeight: "400",
                textAlign: { xs: "center", md: "left" },
                marginTop: { xs: "20px", md: "0" },
              }}
            >
              Thank you for your interest in Lu Lab!
              <br />
              So much has been accomplished since Lu Lab was founded in 1994.
              Our lab has grown in such tremendous ways, but I am so proud that
              our mission and our unique character have remained firmly in
              place.
              <br />
              <br />I invite you to explore our website, discover more about our
              worldwide learning community, and see what makes the Lu Lab
              experience so extraordinary.
              <br />
              <br />
              -Lewis X. Lu, Ph.D.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Tuition Standard Section */}
      <Box
        sx={{
          padding: { xs: "20px", md: "40px" },
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "25px", md: "40px" },
            fontWeight: "bold",
            color: "#40A850",
            marginBottom: "20px",
          }}
        >
          Lu Lab Tuition Standard
        </Typography>
        <Divider
          sx={{
            borderBottom: "1px solid black",
            margin: "20px auto",
            width: "80%",
          }}
        />
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
            MEMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
            MEMBER
          </Typography>
          <Divider
            sx={{ borderBottom: "1px solid black", marginTop: "20px" }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              marginTop: "20px",
            }}
          >
            INDUSTRIAL
            GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥76,000
          </Typography>
          <Divider
            sx={{ borderBottom: "1px solid black", marginTop: "20px" }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              marginTop: "20px",
            }}
          >
            METAVERSE
            GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥19,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥38,000
          </Typography>
          <Divider
            sx={{
              borderBottom: "1px solid black",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          />
        </Box>
      </Box>

      <End />
    </>
  );
}
