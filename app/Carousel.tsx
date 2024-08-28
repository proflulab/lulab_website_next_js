import React, { useState, useEffect } from 'react';
import styles from '../app/Carousel.module.css';

interface CarouselProps {
  imageUrls: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // 每3秒切换一次

    return () => clearInterval(timer);
  }, [imageUrls.length]);

  const getImageIndex = (index: number) => {
    return (index + imageUrls.length) % imageUrls.length;
  };

  return (
    <div className={styles.carousel}>
      {[-1, 0, 1].map((offset) => {
        const index = getImageIndex(currentIndex + offset);
        return (
          <div
            key={index}
            className={`${styles.carouselItem} ${offset === 0 ? styles.active : ''}`}
          >
            <img src={imageUrls[index]} alt={`Slide ${index + 1}`} />
          </div>
        );
      })}
    </div>
  );
};