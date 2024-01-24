/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import App from "./title/page";
import End from "./title/end";

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

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <App />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "85vh",
              maxWidth: "100%",
              maxHeight: "85vh",
            }}
          >
            {images.length > 0 && (
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: "95%",
                  objectFit: "cover",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "5%",
                right: "5%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={showPreviousImage}
                style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button
                onClick={showNextImage}
                style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>

          <Box
            style={{
              position: "absolute",
              top: isMobile ? "400px" : "620px",
              justifyContent: "space-between",
              backgroundColor: "#333333",
              color: "#fff",
              padding: "25px",
              zIndex: 1,
              width: isMobile ? "80%" : "auto",
            }}
          >
            <Typography style={{ fontSize: isMobile ? "20px" : "24px" }}>
              Gathering the world&apos;s elite masters to play in a group.
            </Typography>
          </Box>

          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "45px",
              color: "#000000",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            Welcome to Lu Lab
          </Typography>

          {isMobile ? (
            <>
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src="/Overview.png"
                  alt=""
                  width={25}
                  height={35}
                  style={{ marginLeft: "-30px" }}
                />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      marginBottom: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    Overview
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    In 1994, Professor Lu Xiangqian
                    <br /> established a laboratory to test
                    <br />
                    his teaching methods, convinced that
                    <br /> the Internet would change the world. <br />
                  </Typography>
                </div>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src="/Edu.png"
                  alt=""
                  width={35}
                  height={35}
                  style={{ marginLeft: "35px" }}
                />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      marginBottom: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    Educational concept
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    It is better to learn theory than to learn cases;
                    <br /> It is better to learn cases than to make cases;
                    <br /> It is better to make a case than to play a case;
                    <br /> One person is not as good as several;
                    <br /> A few people to play is not as good as gathering
                    <br /> the world&apos;s elite masters to play in a group.
                  </Typography>
                </div>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src="/Overview.png"
                  alt=""
                  width={25}
                  height={35}
                  style={{ marginLeft: "-30px" }}
                />
                <div style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      marginBottom: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    Personalized learning
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Students are divided into different clubs
                    <br /> according to their age and interests.
                    <br /> Respect students&apos; hobbies and provide
                    <br /> development space for students&apos; growth.
                  </Typography>
                </div>
              </div>
            </>
          ) : (
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "left",
                marginTop: "20px",
              }}
            >
              <Grid item xs={4}>
                <img
                  src="/Overview.png"
                  alt=""
                  width={25}
                  height={35}
                  style={{ marginLeft: "-30px" }}
                />
                <div style={{ marginLeft: "40px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      color: "black",
                      fontSize: "28px",
                      fontWeight: "600",
                      marginTop: "-50px",
                      textAlign: "left",
                    }}
                  >
                    Overview
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    In 1994, Professor Lu Xiangqian
                    <br /> established a laboratory to test
                    <br />
                    his teaching methods, convinced that
                    <br /> the Internet would change the world. <br />
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={4}>
                <img src="/Edu.png" alt="" width={35} height={35} />
                <div style={{ marginLeft: "60px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      color: "black",
                      fontSize: "28px",
                      fontWeight: "600",
                      marginTop: "-50px",
                      textAlign: "left",
                    }}
                  >
                    Educational concept
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    It is better to learn theory than to learn cases;
                    <br /> It is better to learn cases than to make cases;
                    <br /> It is better to make a case than to play a case;
                    <br /> One person is not as good as several;
                    <br /> A few people to play is not as good as gathering
                    <br /> the world&apos;s elite masters to play in a group.
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={4}>
                <img src="/Person.png" alt="" width={35} height={35} />
                <div style={{ marginLeft: "60px" }}>
                  <Typography
                    variant="h2"
                    style={{
                      color: "black",
                      fontSize: "28px",
                      fontWeight: "600",
                      marginTop: "-50px",
                      textAlign: "left",
                    }}
                  >
                    Personalized learning
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    Students are divided into different clubs
                    <br /> according to their age and interests.
                    <br /> Respect students&apos; hobbies and provide
                    <br /> development space for students&apos; growth.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          )}

          <hr style={{ marginBottom: "50px" }} />
        </div>
        <End />
      </div>
    </>
  );
};

export default Home;
