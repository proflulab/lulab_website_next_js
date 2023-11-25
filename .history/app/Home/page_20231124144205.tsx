"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // 存储图片的数组
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 当前显示图片的索引

  // 假设有一个图片URL数组
  // 在图片加载后获取图片尺寸并调整样式
  useEffect(() => {
    const adjustImageSizes = () => {
      const imageElements = document.querySelectorAll("img");

      if (imageElements) {
        const desiredWidth = 500; // 期望的宽度

        imageElements.forEach((img) => {
          img.style.width = `${desiredWidth}px`;
          img.style.height = "auto";
        });
      }
    };

    adjustImageSizes();
  }, [currentImageIndex, images]);

  // 切换至下一张图片
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 切换至上一张图片
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={showPreviousImage}>Previous</button>
      <div>
        {/* 显示当前图片 */}
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "500px", height: "auto" }}
          />
        )}
      </div>
      <button onClick={showNextImage}>Next</button>
    </div>
  );
};

export default Home;
