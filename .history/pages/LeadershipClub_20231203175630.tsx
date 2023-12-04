import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const LeadershipClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image src="/image2.jpg" alt="" width={1700} height={1000} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#BBBBBB",
              color: "#ffffff",
              padding: "10px",
              textAlign: "left",
              zIndex: 1,
            }}
          >
            <p style={{ margin: 20, fontSize: "36px", marginLeft: "320px" }}>
              THE LEADERSHIP CLUB, ORIGINATING FROM TSINGHUA UNIVERSITY
              <br /> AND LED BY PROFESSOR LU XIANGQIAN,
              <br /> NURTURES INNOVATION AND LEADERSHIP.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",

              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px",
              marginLeft: "300px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                In Digital Marketing Club, you can understand the
                <br /> latest TikTok, Wechat Video Account, Red Booklet and
                <br />
                other mainstream short video and live platform play,
                <br /> participate in Tsinghua Professor Lu Xiangqian IP
                <br /> account operation, we will also invite the
                <br />
                industry&apos;s front-line operators and digital marketing{" "}
                <br /> experts from time to time to share and exchange, to
                <br />
                help you master the most needed marketing skills in this era.
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Head of Lab, professor Lu
              </div>
            </div>
          </div>
        </div>{" "}
        <hr
          style={{
            marginBottom: "540px",
          }}
        />
        <End />
      </div>
    </>
  );
};

export default LeadershipClub;
