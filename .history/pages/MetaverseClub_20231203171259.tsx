import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", width: "1700px" }}>
        <div style={{ position: "relative" }}>
          <Image src="/metaverse.png" alt="" width={1700} height={1000} />
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
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",
              width: "100%",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "60px",
              marginLeft: "270px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px 0", fontSize: "36px" }}>
              <div>
                The Metaverse Club is dedicated to creating a virtual language
                <br />
                environment for children to enhance their foreign language
                <br />
                listening and speaking skills. In this unique atmosphere,
                <br />
                children can effortlessly improve their language abilities{" "}
                <br /> while enjoying their favorite activities and hobbies.
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
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "1700px", // 与图片宽度相同
          backgroundColor: "gray", // 灰色矩形
          color: "#ffffff",
          padding: "10px",
          zIndex: 1,
        }}
      >
        {/* 添加您希望显示的内容 */}
        Your content goes here
      </div>
    </>
  );
};

export default MetaverseClub;
