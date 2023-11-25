import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 假设有三张图片

  useEffect(() => {
    const interval = setInterval(() => {
      // 切换到下一张图片
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // 3 秒切换一张图片

    // 清除定时器，避免内存泄漏
    return () => clearInterval(interval);
  }, [totalSlides]);

  // 图片资源数组
  const imageSources = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  return (
    <div>
      <h1>Welcome to the Home page!</h1>

      {/* 显示当前轮播的图片 */}
      <img src={imageSources[currentSlide]} alt={`Image ${currentSlide + 1}`} />

      {/* 可以根据需要添加其他轮播图的元素 */}
    </div>
  );
};

export default Home;
