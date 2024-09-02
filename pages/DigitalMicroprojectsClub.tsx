/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "@/app/title/page";
import End from "@/app/title/end";
import Image from "next/image";
const MicroprojectsClub: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image
            src="/microprojects.png"
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
            THIS IS A CRADLE FOR A GROUP OF CHILDREN&apos;S PROJECT COLLISIONS.
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
            This club offers more than just programming; it provides a range of
            skill development opportunities. These include, but are not limited
            to, honing fundamental search skills, enhancing communication
            abilities, nurturing leadership qualities, and more. Through
            hands-on experiences, members progressively master the essential
            skills needed for project execution. This prepares children for
            further personal development as they aspire to excel in their future
            endeavors.
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

export default MicroprojectsClub;
