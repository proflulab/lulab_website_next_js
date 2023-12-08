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
            <button onClick={showPreviousImage} className="carousel-button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={showNextImage} className="carousel-button">
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

        {/* ... 其他内容 ... */}

        <style jsx>{`
          @media screen and (max-width: 600px) {
            .carousel-button {
              font-size: 3vw;
            }

            img {
              width: 90%;
              height: 80%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
