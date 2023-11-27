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
      <div style={{ position: "relative", width: "1720px", height: "750px" }}>
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "100%", height: "100%" }}
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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            zIndex: 1,
            maxWidth: "80%",
          }}
        >
          <p style={{ fontSize: "24px", margin: "0" }}>Your Text Here</p>
        </div>
      </div>
      {/* Rest of your code */}
    </div>
  );
};

export default Home;
