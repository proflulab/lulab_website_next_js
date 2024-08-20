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
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "url('background.jpg') no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1200px",
              height: isMobile ? "50vw" : "60vw",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
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
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  color: "#333",
                  border: "none",
                  borderRadius: "50%",
                  padding: "15px",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "background 0.3s, transform 0.3s",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.7)")
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={showNextImage}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  color: "#333",
                  border: "none",
                  borderRadius: "50%",
                  padding: "15px",
                  fontSize: "30px",
                  cursor: "pointer",
                  transition: "background 0.3s, transform 0.3s",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.7)")
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
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
                  transition: "transform 1s ease-in-out",
                }}
              />
            )}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              background: "rgba(255, 255, 255, 0.8)",
              color: "#333",
              padding: "15px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography
              style={{
                fontSize: isMobile ? "16px" : "24px",
                margin: "0",
              }}
            >
              Gathering the world&apos;s elite masters to play in a group.
            </Typography>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "20px",
            marginBottom: "20px",
          }}
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
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
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
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
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
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
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
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
