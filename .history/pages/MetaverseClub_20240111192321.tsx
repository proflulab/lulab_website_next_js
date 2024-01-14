/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src="/metaverse.png"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "700px" }}
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
            sx={{ fontSize: { xs: "20px", md: "32px" }, margin: "20px" }}
          >
            DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT FOR CHILDREN TO
            ENHANCE THEIR FOREIGN LANGUAGE LISTENING AND SPEAKING SKILLS.
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
              fontSize: { xs: "18px", md: "32px" },
              margin: "20px",
              marginBottom: 0,
              fontWeight: "bold",
            }}
          >
            The Metaverse Club is dedicated to creating a virtual language
            environment for children to enhance their foreign language listening
            and speaking skills. In this unique atmosphere, children can
            effortlessly improve their language abilities while enjoying their
            favorite activities and hobbies.
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
}
