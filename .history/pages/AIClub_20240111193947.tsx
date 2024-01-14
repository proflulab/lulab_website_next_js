/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "../app/title/page";
import End from "../app/title/end";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src="/AI.png"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
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
            USING THE MOST ADVANCED ARTIFICIAL INTELLIGENCE
            <br />
            TECHNOLOGY TO CREATE &quot;EXCLUSIVE CHATGPT OF LULAB&quot;.
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
            AI Club focuses on the use of the most advanced artificial
            intelligence technology, together with the industry&apos;s leading
            artificial intelligence companies to create &quot;Exclusive ChatGPT
            of Lulab&quot;, the goal is to train excellent artificial
            intelligence talents who can be independent in the era of artificial
            intelligence.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: { xs: "18px", md: "30px" },
              fontWeight: "500",
              textAlign: "left",
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

export default MetaverseClub;
