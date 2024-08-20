/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import App from "./title/page";
import End from "./title/end";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import {
  Event as OverviewIcon,
  School as EduIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginTop: "40px",
      marginBottom: "40px",
      textAlign: "center",
      color: "black",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "black",
    },
    body1: {
      fontWeight: "400",
      color: "black",
    },
  },
});

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <App />

      <Box sx={{ backgroundColor: "white", textAlign: "center", pt: 2 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "50vw", sm: "40vw", md: "30vw" },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "5%",
              right: "5%",
              display: "flex",
              justifyContent: "space-between",
              zIndex: 2,
              transform: "translateY(-50%)",
            }}
          >
            <Button
              onClick={showPreviousImage}
              sx={{ color: "green", fontSize: "28px" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button
              onClick={showNextImage}
              sx={{ color: "green", fontSize: "28px" }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 1,
              width: isMobile ? "90%" : "60%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: isMobile ? "15px" : "24px" }}
            >
              Gathering the world&apos;s elite masters to play in a group.
            </Typography>
          </Box>

          {images.length > 0 && (
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Box>

        <Container sx={{ py: 5 }}>
          <Typography variant="h2">Welcome to Lu Lab</Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="flex-start" mb={2}>
                <OverviewIcon fontSize="large" color="primary" />
                <Box ml={2}>
                  <Typography variant="h3">Overview</Typography>
                  <Typography variant="body1">
                    In 1994, Professor Lu Xiangqian established a laboratory to
                    test his teaching methods, convinced that the Internet would
                    change the world.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="flex-start" mb={2}>
                <EduIcon fontSize="large" color="primary" />
                <Box ml={2}>
                  <Typography variant="h3">Educational concept</Typography>
                  <Typography variant="body1">
                    It is better to learn theory than to learn cases; It is
                    better to learn cases than to make cases; It is better to
                    make a case than to play a case; One person is not as good
                    as several; A few people to play is not as good as gathering
                    the world&apos;s elite masters to play in a group.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="flex-start" mb={2}>
                <PersonIcon fontSize="large" color="primary" />
                <Box ml={2}>
                  <Typography variant="h3">Personalized learning</Typography>
                  <Typography variant="body1">
                    Students are divided into different clubs according to their
                    age and interests. Respect students&apos; hobbies and
                    provide development space for students&apos; growth.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <End />
    </ThemeProvider>
  );
};

export default Home;
