/* eslint-disable @next/next/no-img-element */
"use client";

import { Grid, Typography } from "@mui/material";
import React from "react";

const End: React.FC = () => {
  return (
    <Grid>
      <div style={{ backgroundColor: "black", height: "auto" }}>
        <div style={{ marginLeft: "30px", paddingTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center", // Center items vertically
            }}
          >
            <img src="/logo.png" alt="" height="50" width="50" />
            <Typography
              variant="h1"
              style={{
                marginTop: "5px",
                color: "white",

                fontWeight: "600",
                marginLeft: "25px",
              }}
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginTop: "5px",
                color: "white",

                fontWeight: "600",
                marginLeft: "25px",
              }}
            >
              Lu Lab
            </Typography>
          </div>
          <div
            style={{
              marginTop: "20px",
              position: "relative",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                color: "grey",

                fontWeight: "600",
              }}
            >
              CONTACT INFO
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                color: "grey",

                fontWeight: "500",
              }}
            >
              <br />
              admin@lulabs.org
              <br />
              <br />
              East Brokaw Road 310-F San Jose, CA 95112 USA <br />
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default End;
