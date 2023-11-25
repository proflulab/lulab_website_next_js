"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // 存储图片的数组
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 当前显示图片的索引

  useEffect(() => {
    const imageUrls = [
      "image3.jpg",
      "xueyuan.jpg",
      "image1.jpg",
      // 添加更多图片的 URL
    ];
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={showPreviousImage}>Previous</button>
      <div>
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "1700px", height: "700px" }}
          />
        )}
      </div>
      <button onClick={showNextImage}>Next</button>
    </div>
  );
};

export default Home;
