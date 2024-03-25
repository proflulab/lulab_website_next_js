/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import App from "@/app/title/page";
import End from "@/app/title/end";

const DigitalMarketingClub: React.FC = () => {
  return (
    <>
      <App />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src="/Marketing.jpg"
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
            TAKE YOU TO MASTER CUTTING-EDGE PRACTICAL DIGITAL MARKETING
            METHODOLOGY.
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
            In Digital Marketing Club, you can understand the latest TikTok,
            Wechat Video Account, Red Booklet and other mainstream short video
            and live platform play, participate in Tsinghua Professor Lu
            Xiangqian IP account operation, we will also invite the
            industry&apos;s front-line operators and digital marketing experts
            from time to time to share and exchange, to help you master the most
            needed marketing skills in this era.
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

export default DigitalMarketingClub;
