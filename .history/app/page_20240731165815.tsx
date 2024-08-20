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
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <App />

      <div
        style={{
          background: "linear-gradient(to right, #4CAF50, #81C784)",
          padding: "0 20px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "50vw" : "60vw",
              overflow: "hidden",
              borderRadius: "10px",
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
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  padding: "10px",
                  fontSize: "28px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  transition: "background 0.3s, transform 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#388E3C")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4CAF50")
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={showNextImage}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  padding: "10px",
                  fontSize: "28px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  transition: "background 0.3s, transform 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#388E3C")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4CAF50")
                }
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
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                padding: "15px",
                borderRadius: "10px",
                zIndex: 1,
                width: isMobile ? "90%" : "60%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "15px" : "24px",
                  textAlign: "center",
                  margin: "0",
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
                  transition: "transform 0.8s ease-in-out",
                  transform: `scale(${isMobile ? 1.1 : 1})`,
                }}
              />
            )}
          </div>

          <div
            style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "35px", md: "60px" },
                color: "#333",
                marginTop: "40px",
                marginBottom: "40px",
                textAlign: "center",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
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
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
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
                        color: "#333",
                        fontSize: "24px",
                        marginBottom: "5px",
                      }}
                    >
                      Overview
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "400", color: "#555" }}
                    >
                      In 1994, Professor Lu Xiangqian established a laboratory
                      to test his teaching methods, convinced that the Internet
                      would change the world.
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
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
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
                        color: "#333",
                        fontSize: "24px",
                        marginBottom: "5px",
                      }}
                    >
                      Educational concept
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "400", color: "#555" }}
                    >
                      It is better to learn theory than to learn cases; It is
                      better to learn cases than to make cases; It is better to
                      make a case than to play a case; One person is not as good
                      as several; A few people to play is not as good as
                      gathering the world&apos;s elite masters to play in a
                      group.
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
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
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
                        color: "#333",
                        fontSize: "24px",
                        marginBottom: "5px",
                      }}
                    >
                      Personalized learning
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "400", color: "#555" }}
                    >
                      Students are divided into different clubs according to
                      their age and interests. Respect students&apos; hobbies
                      and provide development space for students&apos; growth.
                    </Typography>
                  </div>
                </div>
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
