/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import App from "../title/page";
import End from "../title/end";

const About = () => {
  return (
    <>
      <App />

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
        <Typography variant="h4" gutterBottom>
          Welcome From the Head of Lab
        </Typography>
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item>
              <img src="/LuXiangqian.png" alt="" width="260" height="280" />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" fontWeight="bold">
                Thank you for your interest in Lu Lab!
              </Typography>
              <br />
              <Typography>
                So much has been accomplished since Lu Lab was founded in 1994.
                Our lab has grown in such tremendous ways, but I am so proud
                that our mission and our unique character have remained firmly
                in place.
                <br />
                <br />
                I invite you to explore our website, discover more about our
                worldwide learning community, and see what makes the Lu Lab
                experience so extraordinary.
                <br />
                <br />- Lewis X. Lu, Ph.D.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        {/* 更多 Material-UI 组件的使用 */}
        <End />
      </div>
    </>
  );
};

export default About;
