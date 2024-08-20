"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import App from "./title/page";
import End from "./title/end";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  Event as OverviewIcon,
  School as EduIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { gsap } from "gsap";

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

  useEffect(() => {
    gsap.from(".card", { opacity: 0, y: 50, stagger: 0.2, duration: 1 });
  }, []);

  return (
    <>
      <App />
      <div style={{ backgroundColor: "#f0f4f8" }}>
        {" "}
        {/* Updated background color */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              width: "100%",
              height: "60vh", // Adjusted height
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10%",
                right: "10%",
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
                  color: "#333", // Updated color
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={showNextImage}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#333", // Updated color
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#000000b3", // Semi-transparent background
                color: "#fff",
                padding: "10px",
                borderRadius: "8px",
                zIndex: 1,
                width: isMobile ? "90%" : "70%",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "14px" : "20px", // Adjusted font size
                }}
              >
                Gathering the world&apos;s elite masters to play in a group.
              </p>
            </div>

            {images.length > 0 && (
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />
            )}
          </div>

          <div style={{ margin: "20px", width: "100%", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "48px" }, // Adjusted font size
                color: "#333", // Updated color
                marginTop: "20px", // Reduced margin
                marginBottom: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Welcome to Lu Lab
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: 3,
                      borderRadius: "10px", // Reduced border radius
                      backgroundColor: "#ffffff", // Updated background color
                      border: "1px solid #ddd", // Updated border color
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Overview"
                    />
                    <CardContent>
                      <OverviewIcon
                        fontSize="large"
                        style={{ color: "#333", marginBottom: "10px" }} // Updated color
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Overview
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        In 1994, Professor Lu Xiangqian established a laboratory
                        to test his teaching methods, convinced that the
                        Internet would change the world.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: 3,
                      borderRadius: "10px", // Reduced border radius
                      backgroundColor: "#ffffff", // Updated background color
                      border: "1px solid #ddd", // Updated border color
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Educational Concept"
                    />
                    <CardContent>
                      <EduIcon
                        fontSize="large"
                        style={{ color: "#333", marginBottom: "10px" }} // Updated color
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Educational Concept
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        It is better to learn theory than to learn cases; It is
                        better to learn cases than to make cases; It is better
                        to make a case than to play a case; One person is not as
                        good as several; A few people to play is not as good as
                        gathering the world&apos;s elite masters to play in a
                        group.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: 3,
                      borderRadius: "10px", // Reduced border radius
                      backgroundColor: "#ffffff", // Updated background color
                      border: "1px solid #ddd", // Updated border color
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Personalized Learning"
                    />
                    <CardContent>
                      <PersonIcon
                        fontSize="large"
                        style={{ color: "#333", marginBottom: "10px" }} // Updated color
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Personalized Learning
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Students are divided into different clubs according to
                        their age and interests. Respect students&apos; hobbies
                        and provide development space for students&apos; growth.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
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
