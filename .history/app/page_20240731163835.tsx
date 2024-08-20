/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect, useRef } from "react";
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
import { gsap } from "gsap";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [images, currentImageIndex]);

  const showNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    gsap.fromTo(
      imgRef.current!,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  };

  const showPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    gsap.fromTo(
      imgRef.current!,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  };

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <App />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#f5f5f5",
            position: "relative",
            width: "100vw",
            height: isMobile ? "60vw" : "50vw",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10px",
              right: "10px",
              display: "flex",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            <button
              onClick={showPreviousImage}
              style={{
                background: "transparent",
                border: "none",
                color: "#4CAF50",
                fontWeight: "bold",
                fontSize: "28px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={showNextImage}
              style={{
                background: "transparent",
                border: "none",
                color: "#4CAF50",
                fontWeight: "bold",
                fontSize: "28px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#333333",
              color: "#fff",
              padding: "15px",
              zIndex: 1,
              width: isMobile ? "90%" : "60%",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "15px" : "24px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Gathering the world&apos;s elite masters to play in a group.
            </p>
          </div>

          {images.length > 0 && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            />
          )}
        </div>

        <div style={{ margin: "40px auto", maxWidth: "1200px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "35px", md: "60px" },
              color: "#333",
              marginTop: "40px",
              marginBottom: "40px",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Welcome to Lu Lab
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <OverviewIcon fontSize="large" style={{ color: "#4CAF50" }} />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h3"
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      fontSize: "24px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Overview
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "400", color: "#333" }}
                  >
                    In 1994, Professor Lu Xiangqian established a laboratory to
                    test his teaching methods, convinced that the Internet would
                    change the world.
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <EduIcon fontSize="large" style={{ color: "#4CAF50" }} />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h3"
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      fontSize: "24px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Educational Concept
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "400", color: "#333" }}
                  >
                    It is better to learn theory than to learn cases; It is
                    better to learn cases than to make cases; It is better to
                    make a case than to play a case; One person is not as good
                    as several; A few people to play is not as good as gathering
                    the world&apos;s elite masters to play in a group.
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <PersonIcon fontSize="large" style={{ color: "#4CAF50" }} />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h3"
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      fontSize: "24px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Personalized Learning
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "400", color: "#333" }}
                  >
                    Students are divided into different clubs according to their
                    age and interests. Respect students&apos; hobbies and
                    provide development space for students&apos; growth.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <End />
      </div>
    </>
  );
};

export default Home;
