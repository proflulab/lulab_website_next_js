"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // 存储图片的数组
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 当前显示图片的索引

  // 假设有一个图片URL数组
  // 假设所有图片都在加载完成后才知道其尺寸，这里使用useEffect监听图片加载完成后计算尺寸
  useEffect(() => {
    const adjustImageSize = () => {
      const imageElement = document.querySelector("img");

      if (imageElement) {
        const desiredWidth = 500; // 期望的宽度
        const imageRatio = imageElement.width / imageElement.height; // 图片原始宽高比例
        const desiredHeight = Math.round(desiredWidth / imageRatio); // 计算期望的高度

        imageElement.style.width = `${desiredWidth}px`; // 设置图片宽度
        imageElement.style.height = `${desiredHeight}px`; // 设置图片高度
      }
    };

    adjustImageSize();
  }, [images[currentImageIndex]]);

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
