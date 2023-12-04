import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", width: "1700px", height: "1000px" }}>
        <Image src="/metaverse.png" alt="" width={1700} height={1000} />
        <div
          style={{
            width: "100%",
            height: "98%",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333333",
            color: "#ffffff",
            padding: "10px",
            textAlign: "center",
            borderRadius: "5px",
            objectFit: "cover",
          }}
        >
          <p style={{ margin: 0, fontSize: "18px" }}>Your text goes here</p>
        </div>
      </div>
    </>
  );
};

export default MetaverseClub;
