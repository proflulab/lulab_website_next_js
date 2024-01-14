import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  return (
    <>
      <App />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Grid item>
          <img
            src="/metaverse.png"
            alt=""
            width="100%"
            height="auto"
            style={{ maxWidth: 600 }}
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
            variant="h4"
            sx={{ fontSize: "36px", marginLeft: { xs: 0, md: "320px" } }}
          >
            DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
            FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
            <br />
            LISTENING AND SPEAKING SKILLS.
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
            marginLeft: { xs: 0, md: "300px" },
            textAlign: "left",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "36px", margin: "20px" }}>
            The Metaverse Club is dedicated to creating a virtual language
            <br />
            environment for children to enhance their foreign language
            <br />
            listening and speaking skills. In this unique atmosphere,
            <br />
            children can effortlessly improve their language abilities
            <br /> while enjoying their favorite activities and hobbies.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "30px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Head of Lab, Professor Lu
          </Typography>
        </Grid>
      </Grid>
      <hr style={{ marginBottom: "400px" }} />
      <End />
    </>
  );
}
