"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
    setImages(imageUrls);

    // 设置定时器，在每2秒切换下一张图片
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // 清除定时器以防止内存泄漏
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images]); // 添加 images 依赖以便更新定时器

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // 重置定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // 重置定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
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
