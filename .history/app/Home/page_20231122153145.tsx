// ./pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import { useClient } from "next/server";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const client = useClient();
  const [currentSlide, setCurrentSlide] = client.useState(0);
  const totalSlides = 3; // 假设有三张图片

  client.useEffect(() => {
    const interval = client.setInterval(() => {
      setCurrentSlide(
        (prevSlide: number): any => (prevSlide + 1) % totalSlides
      );
    }, 3000); // 3 秒切换一张图片

    return () => client.clearInterval(interval);
  }, [client, totalSlides]);

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
