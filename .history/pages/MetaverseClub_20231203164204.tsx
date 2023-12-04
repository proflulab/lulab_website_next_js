import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";

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
              padding: "60px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 20, fontSize: "36px" }}>
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT FOR CHILDREN
              <br />
              TO ENHANCE THEIR FOREIGN LANGUAGE LISTENING AND SPEAKING SKILLS.
            </p>
          </div>
          <div
            style={{
              position: "absolute",

              width: "100%",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "60px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 20, fontSize: "36px" }}>
              The Metaverse Club is dedicated to creating a virtual language
              environment for children to enhance their foreign language
              listening and speaking skills. In this unique atmosphere, children
              can effortlessly improve their language abilities while enjoying
              their favorite activities and hobbies.
            </p>
            <div
              style={{
                color: "black",
                fontSize: "18px",
                fontWeight: "800",
                marginLeft: "0px",
                textAlign: "left",
              }}
            >
              Head of
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaverseClub;
