/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "../app/title/page";
import End from "../app/title/end";
import Image from "next/image";
const LiteracyClub: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image
            src="/literacy.png"
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
            sx={{ fontSize: { xs: "20px", md: "32px" }, margin: "20px" }}
          >
            STRIVES TO ENHANCE CHILDREN&apos;S COMPUTER SKILLS AND DIGITAL
            LITERACY THROUGH GAMES AND PRACTICAL EXPERIENCE.
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
            The &quot;Digital Literacy Club&quot; strives to enhance
            children&apos;s computer skills and digital literacy through games
            and practical experience. Children will gain a deeper understanding
            of digital products and grasp fundamental programming concepts,
            seamlessly integrating computer technology into their daily lives.
            This sets a solid foundation for them to become adept talents in the
            era of artificial intelligence.
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

export default LiteracyClub;
