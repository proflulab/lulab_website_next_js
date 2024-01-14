import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <App />
      <Container maxWidth="md">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <div>
              <img
                src="/metaverse.png"
                alt=""
                style={{ width: "100%", height: "auto" }}
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
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    margin: 20,
                    marginLeft: isMobile ? "0" : "20px",
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
                  textAlign: "left",
                }}
              >
                <div style={{ margin: "20px ", fontSize: "24px" }}>
                  <div>
                    The Metaverse Club is dedicated to creating a virtual
                    language
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
                      fontSize: "20px",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Head of Lab, Professor Lu
                  </div>
                </div>
              </div>
            </div>{" "}
          </Grid>
        </Grid>
      </Container>
      <hr style={{ marginBottom: "400px" }} />
      <End />
    </>
  );
}
