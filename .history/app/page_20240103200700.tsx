/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Navbar from "./title/page";
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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    handleResize(); // 初始化时调用一次，设置初始的 isMobile 值

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
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
            // eslint-disable-next-line @next/next/no-img-element
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
            width: isMobile ? "80%" : "auto",
          }}
        >
          <p style={{ fontSize: isMobile ? "20px" : "24px" }}>
            Gathering the world&apos;s elite masters to play in a group.
          </p>
        </div>

        <div
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
        </div>
        {isMobile && (
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
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "600",
                    marginBottom: "5px",
                    marginTop: "-5px",
                  }}
                >
                  Overview
                </p>
                <p
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
                </p>
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
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "600",
                    marginBottom: "5px",
                    marginTop: "-5px",
                  }}
                >
                  Educational concept
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
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
                </p>
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
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "600",
                    marginBottom: "5px",
                    marginTop: "-5px",
                  }}
                >
                  Personalized learning
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Students are divided into different clubs
                  <br />
                  according to their age and interests.
                  <br />
                  Respect students&apos; hobbies and provide
                  <br />
                  development space for students&apos; growth.
                </p>
              </div>
            </div>
          </>
        )}

        {!isMobile && (
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginTop: "20px",
            }}
          >
            <div style={{ flex: "1", marginRight: "160px" }}>
              <img
                src="/Overview.png"
                alt=""
                width={25}
                height={35}
                style={{ marginLeft: "-30px" }}
              />

              <div style={{ marginLeft: "40px" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "28px",
                    fontWeight: "600",
                    marginTop: "-50px",
                    textAlign: "left",
                  }}
                >
                  Overview
                </p>
                <p
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
                </p>
              </div>
            </div>
            <div style={{ flex: "1.3", marginRight: "160px" }}>
              {" "}
              <img src="/Edu.png" alt="" width={35} height={35} />
              <div style={{ marginLeft: "60px" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "28px",
                    fontWeight: "600",
                    marginTop: "-50px",
                    textAlign: "left",
                  }}
                >
                  Educational concept
                </p>
                <p
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
                </p>
              </div>
            </div>
            <div style={{ flex: "1.11" }}>
              <img src="/Person.png" alt="" width={35} height={35} />
              <div style={{ marginLeft: "60px" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "28px",
                    fontWeight: "600",
                    marginTop: "-50px",
                    textAlign: "left",
                  }}
                >
                  Personalized learning
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "left",
                  }}
                >
                  Students are divided into different clubs
                  <br /> according to their age and interests.
                  <br /> Respect students&apos; hobbiesand provide
                  <br /> development spacefor students&apos; growth.
                </p>
              </div>
            </div>
          </div>
        )}

        <hr
          style={{
            marginBottom: "50px",
          }}
        />
        <End />
      </div>
    </>
  );
};

export default Home;
