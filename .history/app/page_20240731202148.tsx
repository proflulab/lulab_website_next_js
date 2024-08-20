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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(to right, #e0f2f1, #b9fbc0)",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: "100vw",
            height: "60vw",
            maxHeight: "600px",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "5%",
              right: "5%",
              display: "flex",
              justifyContent: "space-between",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            <button
              onClick={showPreviousImage}
              style={{
                color: "#388e3c",
                fontWeight: "bold",
                fontSize: "28px",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s ease", // 交互效果
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2c6c41")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#388e3c")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={showNextImage}
              style={{
                color: "#388e3c", // 绿色
                fontWeight: "bold",
                fontSize: "28px",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s ease", // 交互效果
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2c6c41")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#388e3c")}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              top: "85%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "15px",
              zIndex: 1,
              width: isMobile ? "90%" : "60%",
              borderRadius: "8px", // 边角圆润
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "15px" : "24px",
                margin: 0,
                fontWeight: "bold",
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
                height: "100%",
                objectFit: "cover",
                transition: "opacity 1s ease-in-out",
                opacity: 0.8,
              }}
            />
          )}
        </div>

        <div style={{ margin: "20px", padding: "0 20px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "35px", md: "60px" },
              color: "black",
              marginTop: "40px",
              marginBottom: "40px",
              textAlign: "center",
              fontWeight: "bold",
              transition: "color 0.3s ease", // 交互效果
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
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "15px",
                  background: "#e0f7fa", // 淡绿色背景
                  transition: "transform 0.3s ease", // 交互效果
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <OverviewIcon
                  fontSize="large"
                  style={{ color: "#4CAF50", marginRight: "15px" }}
                />
                <div>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "15px",
                  background: "#e0f7fa", // 淡绿色背景
                  transition: "transform 0.3s ease", // 交互效果
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <EduIcon
                  fontSize="large"
                  style={{ color: "#4CAF50", marginRight: "15px" }}
                />
                <div>
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
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "15px",
                  background: "#e0f7fa", // 淡绿色背景
                  transition: "transform 0.3s ease", // 交互效果
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <PersonIcon
                  fontSize="large"
                  style={{ color: "#4CAF50", marginRight: "15px" }}
                />
                <div>
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
                    age and interests. Respect students&apos; hobbies and
                    provide development space for students&apos; growth.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <End />
    </>
  );
};

export default Home;
