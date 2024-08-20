import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import App from "../title/page";
import End from "../title/end";

export default function About() {
  return (
    <>
      <App />
      <Grid>
        <div style={{ position: "relative" }}>
          <img
            src="/image2.jpg"
            alt=""
            style={{
              width: "100vw",
              height: "50vw",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              color: "white",
            }}
          >
            <Typography
              variant="h1"
              style={{ fontSize: "5vw", fontWeight: "bold" }}
            >
              The New Education
            </Typography>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          >
            <Typography
              variant="h2"
              style={{ fontSize: "4vw", fontWeight: "normal" }}
            >
              in AI age
            </Typography>
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: "2.6vw", fontWeight: "normal" }}
            >
              All work and no play makes Jack a dull boy
            </Typography>
          </div>
        </div>
      </Grid>

      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "25px", md: "40px" },
            color: "black",
            fontWeight: "bold",
          }}
        >
          Welcome From the Head of Lab
        </Typography>
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
            backgroundColor: "#DDDDDD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            component="img"
            src="/LuXiangqian.png"
            alt=""
            sx={{
              width: { xs: "80%", sm: "50%", md: "360px" },
              height: "auto",
              maxWidth: "100%",
            }}
          />
          <Grid
            sx={{
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
              marginLeft: { xs: "0px", md: "20px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "15px", md: "24px" },
                fontWeight: "800",
                marginLeft: "0px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Thank you for your interest in Lu Lab!
            </Typography>
            <br />
            So much has been accomplished since Lu Lab was founded in 1994. Our
            lab has grown in such tremendous ways, but I am so proud that our
            mission and our unique character have remained firmly in place.
            <br />
            <br />I invite you to explore our website, discover more about our
            worldwide learning community, and see what makes the Lu Lab
            experience so extraordinary.
            <br />
            <br />
            -Lewis X. Lu, Ph.D.
          </Grid>
        </Box>

        <div style={{ marginTop: "10px" }}>
          <Box
            sx={{
              margin: "0 auto",
              width: { xs: "90%", md: "90%" }, // Adjust width based on screen size
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "25px", md: "40px" },
                fontWeight: "bold",
                color: "#40A850",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Lu Lab Tuition Standard
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
                marginTop: "20px",
                textIndent: { xs: "0px", md: "0px" },
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
              MEMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
              MEMBER
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",
                marginTop: "20px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
                marginTop: "20px",
              }}
            >
              INDUSTRIAL
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥76,000
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",

                marginTop: "20px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
                marginTop: "20px",
              }}
            >
              METAVERSE
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥19,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",

                marginTop: "20px",
                marginBottom: "50px",
              }}
            />
          </Box>

          <End />
        </div>
      </div>
    </>
  );
}
