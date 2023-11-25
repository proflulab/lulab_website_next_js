"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
    setImages(imageUrls);

    // Automatically switch images every two seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clean up the interval when the component unmounts or when images change
    return () => clearInterval(interval);
  }, [images]); // Re-run effect when images change

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
      <div style={{ position: "relative" }}>
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "1720px", height: "750px" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={showPreviousImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "36px" }}
            />
          </button>
          <button
            onClick={showNextImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "36px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
