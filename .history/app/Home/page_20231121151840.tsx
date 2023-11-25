import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 假设有三张图片

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // 每 3 秒切换一张图片

    return () => clearInterval(interval);
  }, [totalSlides]);

  const renderCarouselItems = () => {
    const items = [];

    for (let i = 0; i < totalSlides; i++) {
      items.push(
        <div key={i}>
          <img src={`/image${i + 1}.jpg`} alt={`Image ${i + 1}`} />
          <p className="legend">{`Image ${i + 1}`}</p>
        </div>
      );
    }

    return items;
  };

  return (
    <Carousel showArrows autoPlay infiniteLoop selectedItem={currentSlide}>
      {renderCarouselItems()}
    </Carousel>
  );
};

export default HomeCarousel;
