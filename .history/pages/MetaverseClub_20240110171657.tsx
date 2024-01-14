/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <App />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                style={{ height: "100%", width: "auto" }}
                image="/metaverse.png"
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
                  variant="body1"
                  style={{
                    margin: isSmallScreen ? "10px" : "20px",
                    fontSize: isSmallScreen ? "24px" : "36px",
                    marginLeft: isSmallScreen ? "50px" : "320px",
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
                  <Typography
                    variant="body1"
                    style={{
                      color: "black",
                      fontSize: isSmallScreen ? "16px" : "30px",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Head of Lab, professor Lu
                  </Typography>
                </div>
              </div>
            </Card>
            <hr
              style={{
                marginBottom: "400px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <End />
    </>
  );
}
