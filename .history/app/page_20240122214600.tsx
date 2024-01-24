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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              width: "100vw",
              height: "50vw",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "5%",
                right: "5%",
                display: "flex",
                justifyContent: "space-between",
                zIndex: 2,
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

            <div
              style={{
                position: "absolute",
                top: "90%",
                left: "50%", // 将左侧设为50%
                transform: "translateX(-50%)", // 使用负的50%宽度的偏移量，使其居中
                backgroundColor: "#333333",
                color: "#fff",
                padding: "20px",
                zIndex: 1,
                width: isMobile ? "90%" : "60%",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "15px" : "24px",
                  textAlign: "center", // 居中对齐
                }}
              >
                Gathering the world&apos;s elite masters to play in a group.
              </p>
            </div>

            {images.length > 0 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: isMobile ? "100%" : "95%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />
            )}
          </div>

          <div>
            <Grid container spacing={3}>
              {/* Welcome Message */}
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: "bold",
                    color: "#000000",
                    margin: "40px 0",
                  }}
                >
                  Welcome to Lu Lab
                </Typography>
              </Grid>

              {/* Overview Section */}
              <Grid item xs={12} md={6}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="/Overview.png"
                    alt=""
                    width={25}
                    height={35}
                    style={{ marginLeft: "-30px" }}
                  />
                  <div style={{ marginLeft: "15px" }}>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 600, margin: "5px 0" }}
                    >
                      Overview
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: 400, lineHeight: "1.5" }}
                    >
                      In 1994, Professor Lu Xiangqian
                      <br /> established a laboratory to test
                      <br />
                      his teaching methods, convinced that
                      <br /> the Internet would change the world.
                    </Typography>
                  </div>
                </div>
              </Grid>

              {/* Educational Concept Section */}
              <Grid item xs={12} md={6}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="/Edu.png"
                    alt=""
                    width={35}
                    height={35}
                    style={{ marginLeft: "35px" }}
                  />
                  <div style={{ marginLeft: "15px" }}>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 600, margin: "5px 0" }}
                    >
                      Educational Concept
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: 400, lineHeight: "1.5" }}
                    >
                      It is better to learn theory than to learn cases;
                      <br />
                      It is better to learn cases than to make cases;
                      <br />
                      It is better to make a case than to play a case;
                      <br />
                      One person is not as good as several;
                      <br />
                      A few people to play is not as good as gathering
                      <br />
                      the world&apos;s elite masters to play in a group.
                    </Typography>
                  </div>
                </div>
              </Grid>

              {/* Personalized Learning Section */}
              <Grid item xs={12} md={6}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="/Overview.png"
                    alt=""
                    width={25}
                    height={35}
                    style={{ marginLeft: "-30px" }}
                  />
                  <div style={{ marginLeft: "15px" }}>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 600, margin: "5px 0" }}
                    >
                      Personalized Learning
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: 400, lineHeight: "1.5" }}
                    >
                      Students are divided into different clubs
                      <br />
                      according to their age and interests.
                      <br />
                      Respect students&apos; hobbies and provide
                      <br />
                      development space for students&apos; growth.
                    </Typography>
                  </div>
                </div>
              </Grid>

              {/* Other Sections (Add as needed) */}

              <Grid item xs={12}>
                <hr style={{ marginBottom: "50px" }} />
              </Grid>
            </Grid>
          </div>
        </div>
        <End />
      </div>
    </>
  );
};

export default Home;
