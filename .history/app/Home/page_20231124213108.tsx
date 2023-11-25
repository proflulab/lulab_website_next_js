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
  }, []);

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
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={showPreviousImage}
        style={{
          color: "green",
          fontWeight: "bold",
          background: "none",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start",
          marginRight: "auto",
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {images.length > 0 && (
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: "1700px", height: "700px" }}
        />
      )}
      <button
        onClick={showNextImage}
        style={{
          color: "green",
          fontWeight: "bold",
          background: "none",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-end",
          marginLeft: "auto",
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Home;
