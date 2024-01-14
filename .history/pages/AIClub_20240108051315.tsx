/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const AIClub: React.FC = () => {
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
          <img src="/AI.png" alt="" width={1700} height={1000} />
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
              USING THE MOST ADVANCED ARTIFICIAL INTELLIGENCE
              <br />
              TECHNOLOGY TO CREATE &quot;EXCLUSIVE CHATGPT OF LULAB&quot;.
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
                AI Club focuses on the use of the most advanced artificial
                <br />
                intelligence technology, together with the industry&apos;s
                <br />
                leading artificial intelligence companies to create
                <br />
                &quot;Exclusive ChatGPT of Lulab&quot;, the goal is to train
                <br />
                excellent artificial intelligence talents who can be
                <br />
                independent in the era of artificial intelligence.
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
            marginBottom: "450px",
          }}
        />
      </div>
      <End />
    </>
  );
};

export default AIClub;
