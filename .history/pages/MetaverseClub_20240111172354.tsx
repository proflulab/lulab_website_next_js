import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  return (
    <>
      <App />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/metaverse.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "#BBBBBB",
                color: "#ffffff",
                padding: "10px",
                textAlign: "left",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h4"
                style={{
                  margin: 20,
                  marginLeft: "320px",
                }}
              >
                DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
                FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
                <br />
                LISTENING AND SPEAKING SKILLS.
              </Typography>
            </div>
            <div
              style={{
                position: "absolute",
                fontWeight: "800",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                padding: "10px",
                marginLeft: "300px",
                textAlign: "left",
              }}
            >
              <div style={{ margin: "20px ", fontSize: "36px" }}>
                <div>
                  The Metaverse Club is dedicated to creating a virtual language
                  <br />
                  environment for children to enhance their foreign language
                  <br />
                  listening and speaking skills. In this unique atmosphere,
                  <br />
                  children can effortlessly improve their language abilities
                  <br /> while enjoying their favorite activities and hobbies.
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Head of Lab, professor Lu
                </div>
              </div>
            </div>
          </div>{" "}
        </Grid>
      </Grid>
      <hr style={{ marginBottom: "400px" }} />
      <End />
    </>
  );
}
