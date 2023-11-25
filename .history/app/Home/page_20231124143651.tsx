"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // 存储图片的数组
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 当前显示图片的索引

  // 假设有一个图片URL数组
  useEffect(() => {
    // 假设这是你的图片数组
    const imageUrls = [
      "/image1.jpg",
      "/image2.jpg",
      "/image3.jpg",
      // ... 添加更多图片的 URL
    ];
    setImages(imageUrls);
  }, []);

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
            style={{ maxWidth: "1700", height: "auto", width: "300px" }}
          />
        )}
      </div>
      <button onClick={showNextImage}>Next</button>
    </div>
  );
};

export default Home;
