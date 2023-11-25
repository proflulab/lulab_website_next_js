// pages/index.tsx
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
("use client");
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 假设有三张图片

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // 3 秒切换一张图片

    return () => clearInterval(interval);
  }, [totalSlides]);

  const renderCarouselItems = () => {
    const items = [];

    for (let i = 1; i <= totalSlides; i++) {
      items.push(
        <div key={i}>
          <img src={`/image${i}.jpg`} alt={`Image ${i}`} />
          <p className="legend">Image {i}</p>
        </div>
      );
    }

    return items;
  };

  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Carousel showArrows autoPlay infiniteLoop selectedItem={currentSlide}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

export default Home;
