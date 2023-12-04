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
              padding: "10px",

              textAlign: "left",
            }}
          >
            <p style={{ margin: 20, fontSize: "36px", marginLeft: "300px" }}>
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </p>
          </div>
          <div
            style={{
              position: "absolute",

              width: "100%",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "60px",
              marginLeft: "250px",
              textAlign: "left",
            }}
          >
            <p style={{ margin: 20, fontSize: "36px" }}>
              The Metaverse Club is dedicated to creating a virtual language
              <br />
              environment for children to enhance their foreign language
              <br />
              listening and speaking skills. In this unique atmosphere,
              <br />
              children can effortlessly improve their language abilities <br />{" "}
              while enjoying their favorite activities and hobbies.
            </p>
            <div
              style={{
                color: "black",
                fontSize: "30px",
                fontWeight: "800",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              Head of Lab, professor Lu
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaverseClub;
