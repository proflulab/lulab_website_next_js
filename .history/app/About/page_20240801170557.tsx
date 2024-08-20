/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
  keyframes,
} from "@mui/material";
import App from "../title/page";
import End from "../title/end";

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <>
      <App />
      <Grid container>
        <Box sx={{ position: "relative", width: "100%" }}>
          <img
            src="/image2.jpg"
            alt="Background"
            style={{
              width: "100%",
              height: isSmallScreen ? "40vh" : isMediumScreen ? "50vh" : "60vh",
              objectFit: "cover",
              filter: "brightness(0.7)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: isSmallScreen
                  ? "6vw"
                  : isMediumScreen
                  ? "5vw"
                  : "4vw",
                fontWeight: "bold",
                marginBottom: "20px",
                whiteSpace: "nowrap",
              }}
            >
              The New Education
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: isSmallScreen
                  ? "4vw"
                  : isMediumScreen
                  ? "3vw"
                  : "2.5vw",
                fontWeight: "normal",
                marginBottom: "20px",
                whiteSpace: "nowrap",
              }}
            >
              in AI Age
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: isSmallScreen
                  ? "2.5vw"
                  : isMediumScreen
                  ? "2vw"
                  : "1.5vw",
                fontWeight: "normal",
              }}
            >
              All work and no play makes Jack a dull boy
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
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
            width: { xs: "90%", md: "70%" },
            margin: "0 auto",
            backgroundColor: "#f7f7f7",
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
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "auto",
              borderRadius: "10px",
              marginRight: isSmallScreen ? "0" : "20px",
              marginBottom: isSmallScreen ? "20px" : "0",
            }}
          />
          <Grid
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: "400",
              marginLeft: { xs: "0px", md: "20px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: "800",
                textAlign: { xs: "center", md: "left" },
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              Thank you for your interest in Lu Lab!
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "0.9rem", md: "1.2rem" },
                textAlign: { xs: "center", md: "left" },
                marginTop: "10px",
              }}
            >
              So much has been accomplished since Lu Lab was founded in 1994.
              Our lab has grown in such tremendous ways, but I am so proud that
              our mission and our unique character have remained firmly in
              place.
              <br />
              <br />
              I invite you to explore our website, discover more about our
              worldwide learning community, and see what makes the Lu Lab
              experience so extraordinary.
              <br />
              <br />
              -Lewis X. Lu, Ph.D.
            </Typography>
          </Grid>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "70%" },
            margin: "30px auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              color: "#333333",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Lu Lab Tuition Standard
          </Typography>
          <Divider
            sx={{
              border: "none",
              borderBottom: "1px solid #333333",
              margin: "auto",
              marginBottom: "20px",
              width: "50%",
            }}
          />
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "#40A850",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "#40A850",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    Individual Member
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: "#40A850",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    Family Member
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    Industrial Grade
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    ¥38,000
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    ¥76,000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    Metaverse Grade
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    ¥19,000
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    ¥38,000
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <End />
      </Box>
    </>
  );
}
