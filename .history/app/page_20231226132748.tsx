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
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              style={{
                width: "100px",
                height: "95%",
                objectFit: "cover", // 保持图像比例填充容器
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
            top: "620px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333333",
            color: "#fff",
            padding: "25px",
            zIndex: 1,
          }}
        >
          <p style={{ fontSize: "24px" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <Image
              src="/Overview.png"
              alt=""
              width={25}
              height={35}
              style={{ marginRight: "500px" }}
            />
            <p
              style={{
                color: "black",
                fontSize: "28px",
                fontWeight: "600",
                marginTop: "-50px",
                marginLeft: "50px",
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
                marginLeft: "50px",

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
          <div style={{ marginRight: "20px" }}>
            <Image
              src="/Edu.png"
              alt=""
              width={40}
              height={40}
              style={{ marginRight: "500px" }}
            />
            <p
              style={{
                color: "black",
                fontSize: "28px",
                fontWeight: "600",
                marginTop: "-50px",
                marginLeft: "60px",
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
                marginLeft: "60px",
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
          <div style={{ marginRight: "20px" }}>
            <Image
              src="/Person.png"
              alt=""
              width={35}
              height={35}
              style={{ marginRight: "400px" }}
            />
            <p
              style={{
                color: "black",
                fontSize: "28px",
                fontWeight: "600",
                marginTop: "-45px",
                marginLeft: "60px",
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
                marginLeft: "60px",
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
