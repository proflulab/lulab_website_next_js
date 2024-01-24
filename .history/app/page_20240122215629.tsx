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
import { Button, Grid, Typography } from "@mui/material";

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
  const contentData = [
    {
      title: "Overview",
      image: "/Overview.png",
      description:
        "In 1994, Professor Lu Xiangqian established a laboratory to test his teaching methods, convinced that the Internet would change the world.",
    },
    {
      title: "Educational concept",
      image: "/Edu.png",
      description:
        "It is better to learn theory than to learn cases; It is better to learn cases than to make cases; It is better to make a case than to play a case; One person is not as good as several; A few people to play is not as good as gathering the world's elite masters to play in a group.",
    },
    {
      title: "Personalized learning",
      image: "/Overview.png",
      description:
        "Students are divided into different clubs according to their age and interests. Respect students' hobbies and provide development space for students' growth.",
    },
  ];
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

          <Grid container>
          <Grid item xs={12}>
            <div style={{ position: "relative" }}>
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: isMobile ? "50vh" : "95vh",
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
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
                <Button
                  onClick={showNextImage}
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Typography
            variant="h2"
            align="center"
            style={{ fontWeight: "bold", color: "#000000" }}
          >
            Welcome to Lu Lab
          </Typography>

          {isMobile ? (
            <>
              {contentData.map((content, index) => (
                <Grid item xs={12} key={index}>
                  <MobileContent content={content} />
                </Grid>
              ))}
            </>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {contentData.map((content, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <DesktopContent content={content} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>

        <hr style={{ marginBottom: "50px" }} />
      </div>
      <End />
    </>
  );
};

const MobileContent: React.FC<{ content: ContentData }> = ({ content }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", alignItems: "flex-start" }}>
      <img
        src={content.image}
        alt=""
        width={25}
        height={35}
        style={{ marginLeft: "-30px" }}
      />
      <div style={{ marginLeft: "15px" }}>
        <Typography variant="h4" fontWeight="bold" mb={1} mt={-1}>
          {content.title}
        </Typography>
        <Typography variant="body1" lineHeight="1.5">
          {content.description}
        </Typography>
      </div>
    </div>
  );
};

const DesktopContent: React.FC<{ content: ContentData }> = ({ content }) => {
  return (
    <div>
      <img src={content.image} alt="" width={25} height={35} style={{ marginLeft: "-30px" }} />
      <div style={{ marginLeft: "40px" }}>
        <Typography variant="h4" color="black" fontWeight="bold" mt={-50} textAlign="left">
          {content.title}
        </Typography>
        <Typography variant="body1" color="black" textAlign="left">
          {content.description}
        </Typography>
      </div>
    </div>
           
          )}

          <hr
            style={{
              marginBottom: "50px",
            }}
          />
        </div>
        <End />
      </div>
    </>
  );
};

export default Home;
