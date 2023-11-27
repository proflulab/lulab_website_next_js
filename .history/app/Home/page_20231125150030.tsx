"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ position: "relative" }}>{/* Your image slider code */}</div>
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
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            <strong>Text 1:</strong>
            <br />
            In 1994, Professor Lu Xiangqian
            <br /> established a laboratory to test
            <br />
            his teaching methods, convinced that
            <br /> the Internet would change the world. <br />
          </p>
        </div>
        {/* Repeat the same structure for the other two blocks */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Home;
