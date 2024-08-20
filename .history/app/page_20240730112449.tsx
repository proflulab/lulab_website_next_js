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
import { Grid, Typography } from "@mui/material";
import {
  Event as OverviewIcon,
  School as EduIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

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

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <App />
      <div style={{ background: "white" }}>
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: isMobile ? "60vw" : "40vw",
            overflow: "hidden",
          }}
        >
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
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
              <button
                onClick={showPreviousImage}
                style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={showNextImage}
                style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#333333",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textAlign: "center",
              width: isMobile ? "90%" : "60%",
            }}
          >
            <p style={{ fontSize: isMobile ? "15px" : "24px" }}>
              Gathering the world&apos;s elite masters to play in a group.
            </p>
          </div>
        </div>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "35px", md: "60px" },
            color: "black",
            marginTop: "40px",
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Welcome to Lu Lab
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <OverviewIcon fontSize="large" style={{ color: "#4CAF50" }} />
              <div style={{ marginLeft: "10px" }}>
                <Typography
                  variant="h3"
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "28px",
                  }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "400", color: "black" }}
                >
                  In 1994, Professor Lu Xiangqian established a laboratory to
                  test his teaching methods, convinced that the Internet would
                  change the world.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <EduIcon fontSize="large" style={{ color: "#4CAF50" }} />
              <div style={{ marginLeft: "10px" }}>
                <Typography
                  variant="h3"
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "28px",
                  }}
                >
                  Educational concept
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "400", color: "black" }}
                >
                  It is better to learn theory than to learn cases; It is better
                  to learn cases than to make cases; It is better to make a case
                  than to play a case; One person is not as good as several; A
                  few people to play is not as good as gathering the
                  world&apos;s elite masters to play in a group.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <PersonIcon fontSize="large" style={{ color: "#4CAF50" }} />
              <div style={{ marginLeft: "10px" }}>
                <Typography
                  variant="h3"
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "28px",
                  }}
                >
                  Personalized learning
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "400", color: "black" }}
                >
                  Students are divided into different clubs according to their
                  age and interests. Respect students&apos; hobbies and provide
                  development space for students&apos; growth.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <End />
    </>
  );
};

export default Home;
