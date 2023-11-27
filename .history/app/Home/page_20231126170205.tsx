"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ position: "relative" }}>
        {images.length > 0 && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "1720px", height: "750px" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={showPreviousImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "36px" }}
            />
          </button>
          <button
            onClick={showNextImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "36px" }}
            />
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "620px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "black",
          color: "#fff",
          padding: "40px",
          zIndex: 2,
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
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Overview.png"
            alt=""
            width={25}
            height={35}
            style={{ marginRight: "500px" }}
          />
          <p
            style={{
              color: "black",
              fontSize: "28px",
              fontWeight: "600",
              marginTop: "-50px",
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            Overview
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "50px",

              textAlign: "left",
            }}
          >
            In 1994, Professor Lu Xiangqian
            <br /> established a laboratory to test
            <br />
            his teaching methods, convinced that
            <br /> the Internet would change the world. <br />
          </p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Edu.png"
            alt=""
            width={40}
            height={40}
            style={{ marginRight: "500px" }}
          />
          <p
            style={{
              color: "black",
              fontSize: "28px",
              fontWeight: "600",
              marginTop: "-50px",
              marginLeft: "60px",
              textAlign: "left",
            }}
          >
            Educational concept
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "60px",
              textAlign: "left",
            }}
          >
            It is better to learn theory than to learn cases;
            <br /> It is better to learn cases than to make cases;
            <br /> It is better to make a case than to play a case;
            <br /> One person is not as good as several;
            <br /> A few people to play is not as good as gathering
            <br /> the world&apos;s elite masters to play in a group.
          </p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Person.png"
            alt=""
            width={35}
            height={35}
            style={{ marginRight: "400px" }}
          />
          <p
            style={{
              color: "black",
              fontSize: "28px",
              fontWeight: "600",
              marginTop: "-45px",
              marginLeft: "60px",
              textAlign: "left",
            }}
          >
            Personalized learning
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "60px",
              textAlign: "left",
            }}
          >
            Students are divided into different clubs
            <br /> according to their age and interests.
            <br /> Respect students&apos; hobbiesand provide
            <br /> development spacefor students&apos; growth.
          </p>
        </div>
      </div>
      <hr
        style={{
          marginBottom: "50px",
        }}
      />
      <div style={{ position: "relative" }}>
        <Image src="/title.jpg" alt="" height="230" width="1700" />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "2%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src="/logo.png" alt="" height="50" width="50" />
          <p
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginLeft: "20px",
            }}
          >
            Lu Lab
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "90px",
            left: "2.5%",
            textAlign: "left",
          }}
        >
          <div
            style={{
              color: "grey",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            CONTACT INFO
          </div>
          <div
            style={{
              color: "grey",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "2px",
              textAlign: "left",
            }}
          >
            <br />
            admin@lulabs.org
            <br />
            <br />
            East Brokaw Road 310-F San Jose, CA 95112 USA <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
