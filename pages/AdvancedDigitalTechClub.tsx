/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "../app/title/page";
import End from "../app/title/end";

const AdvancedDigitalTechClub: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src="/Tech.png"
            alt=""
            style={{
              width: "100vw",
              height: "50vw",
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          component="div"
          sx={{
            position: "relative",
            backgroundColor: "#BBBBBB",
            color: "#ffffff",
            padding: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "20px", md: "36px" }, margin: "20px" }}
          >
            MASTERING ADVANCED DIGITAL TECHNOLOGY THROUGH PROJECT-DRIVEN
            LEARNING.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          component="div"
          sx={{
            position: "relative",
            fontWeight: "800",
            backgroundColor: "#FFFFFF",
            color: "#000000",
            padding: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "36px" },
              margin: "20px",
              marginBottom: 0,
              fontWeight: "bold",
            }}
          >
            At the Advanced Digital Technology Club, we are committed to turning
            knowledge into action. Our approach is to learn skills by doing
            projects. Students begin their learning journey by attending
            meetings that encourage questions and discussion. With a solid
            foundation, let&apos;s do projects together and turn ideas into
            reality! Join us for a better future!
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: { xs: "18px", md: "30px" },
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Head of Lab, Professor Lu
          </Typography>
        </Grid>
      </Grid>

      <End />
    </>
  );
};

export default AdvancedDigitalTechClub;
