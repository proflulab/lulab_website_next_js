"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
            maxWidth: "100%", // 控制整体内容的最大宽度
          }}
        >
          {/* 图片轮播 */}
          <div
            style={{
              position: "relative",
              width: "100%", // 图片容器宽度
              height: "auto", // 根据图片宽高比调整高度
              maxHeight: "70vh", // 控制图片最大高度，根据需求调整
              overflow: "hidden", // 超出部分隐藏
            }}
          >
            {/* 使用 next/image 进行图片渲染 */}
            {images.length > 0 && (
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          {/* 其他内容 */}
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
            {/* 示例文本内容 */}
            {/* 这里放置其他内容的代码 */}
          </div>
        </div>

        <hr style={{ marginBottom: "50px" }} />
        <End />
      </div>
    </>
  );
};

export default Home;
