import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import App from "../title/page";
import End from "../title/end";

// 动画效果
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function About() {
  return (
    <>
      <App />
      <Grid>
        <div style={{ position: "relative" }}>
          <img
            src="/image2.jpg"
            alt="Background"
            style={{
              width: "100vw",
              height: "50vw",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              color: "white",
              textAlign: "center",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            <Typography
              variant="h1"
              style={{ fontSize: "4.5vw", fontWeight: "bold" }}
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
              textAlign: "center",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            <Typography
              variant="h2"
              style={{ fontSize: "4vw", fontWeight: "normal" }}
            >
              in AI Age
            </Typography>
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              color: "white",
              textAlign: "center",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: "2.4vw", fontWeight: "normal" }}
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
          padding: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "25px", md: "40px" },
            color: "black",
            fontWeight: "bold",
            marginBottom: "20px",
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          Welcome From the Head of Lab
        </Typography>
        <Box
          sx={{
            width: { xs: "90%", md: "90%" },
            margin: "0 auto",
            backgroundColor: "#DDDDDD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <img
            src="/LuXiangqian.png"
            alt="Head of Lab"
            width="360"
            height="380"
            style={{ borderRadius: "10px" }}
          />
          <Grid
            sx={{
              color: "black",
              fontSize: { xs: "15px", md: "24px" },
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
                textAlign: { xs: "center", md: "left" },
                animation: `${fadeIn} 1s ease-out`,
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

        <div style={{ marginTop: "30px" }}>
          <Box
            sx={{
              width: { xs: "90%", md: "70%" },
              margin: "0 auto",
              padding: "20px",
              backgroundColor: "#F9F9F9",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "25px", md: "40px" },
                fontWeight: "bold",
                color: "#40A850",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Lu Lab Tuition Standard
            </Typography>
            <Divider
              sx={{
                border: "none",
                borderBottom: "1px solid black",
                margin: "auto",
                marginBottom: "20px",
              }}
            />
            <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: { xs: "12px", md: "18px" },
                      fontWeight: "600",
                    }}
                  >
                    INDUSTRIAL GRADE
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: { xs: "12px", md: "18px" },
                      marginTop: "10px",
                    }}
                  >
                    Individual Member: ¥38,000
                    <br />
                    Family Member: ¥76,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: { xs: "12px", md: "18px" },
                      fontWeight: "600",
                    }}
                  >
                    METAVERSE GRADE
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: { xs: "12px", md: "18px" },
                      marginTop: "10px",
                    }}
                  >
                    Individual Member: ¥19,000
                    <br />
                    Family Member: ¥38,000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <End />
        </div>
      </div>
    </>
  );
}
