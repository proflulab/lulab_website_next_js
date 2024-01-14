"use client";
import "./globals.css"; // 引入全局 CSS 文件

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Navbar from "./title/page";
import End from "./title/end";

// export default Navbar;

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                height: "95%",
                objectFit: "cover",
                ...(isMobile
                  ? {
                      height: "75vh",
                      width: "100%",
                      objectFit: "cover",
                    }
                  : {}),
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
            top: isMobile ? "400px" : "620px",
            justifyContent: "space-between",

            backgroundColor: "#333333",
            color: "#fff",
            padding: "25px",
            zIndex: 1,
            width: isMobile ? "80%" : "auto", // 根据屏幕大小更新宽度
          }}
        >
          <p style={{ fontSize: isMobile ? "20px" : "24px" }}>
            Gathering the world&apos;s elite masters to play in a group.
          </p>
        </div>

        <div
          style={{
            fontWeight: "bold",
            fontSize: isMobile ? "32px" : "45px",
            color: "#000000",
            textAlign: "center",
            marginTop: isMobile ? "20px" : "40px",
            marginBottom: isMobile ? "20px" : "40px",
          }}
        >
          Welcome to Lu Lab
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Image src="/Overview.png" alt="" width={25} height={35} />
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Overview
            </p>
            <p style={{ fontSize: "16px", textAlign: "left" }}>
              In 1994, Professor Lu Xiangqian established a laboratory to test
              his teaching methods, convinced that the Internet would change the
              world.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Image src="/Edu.png" alt="" width={40} height={40} />
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Educational concept
            </p>
            <p style={{ fontSize: "16px", textAlign: "left" }}>
              It is better to learn theory than to learn cases;
              <br />
              It is better to learn cases than to make cases;
              <br />
              It is better to make a case than to play a case;
              <br />
              One person is not as good as several;
              <br />A few people to play is not as good as gathering the
              world`&apos;`s elite masters to play in a group.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Image src="/Person.png" alt="" width={35} height={35} />
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Personalized learning
            </p>
            <p style={{ fontSize: "16px", textAlign: "left" }}>
              Students are divided into different clubs according to their age
              and interests.
              <br />
              Respect students`&apos;` hobbies and provide development space for
              students`&apos;` growth.
            </p>
          </div>
          <hr style={{ marginBottom: "20px" }} />
          <End />
        </div>
      </div>
    </>
  );
};

export default Home;
