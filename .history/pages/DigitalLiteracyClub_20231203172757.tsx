import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const LiteracyClub: React.FC = () => {
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
        <div style={{ position: "relative", width: "1700px" }}>
          <Image src="/literacy.png" alt="" width={1700} height={1000} />
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
              STRIVES TO ENHANCE CHILDREN&apos;S COMPUTER SKILLS AND
              <br />
              DIGITAL LITERACY THROUGH GAMES AND PRACTICAL EXPERIENCE.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",
              width: "100%",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px",
              marginLeft: "300px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                The &quot;Digital Literacy Club&quot; strives to enhance
                children&apos;s
                <br />
                computer skills and digital literacy through games and
                <br /> practical experience. Children will gain a deeper
                <br />
                understanding of digital products and grasp
                <br /> fundamental programming concepts,
                <br /> seamlessly integrating computer technology into their
                <br />
                daily lives. This sets a solid foundation for them to
                <br /> become adept talents in the era of artificial
                intelligence.
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
            marginBottom: "600px",
          }}
        />
        <End />
      </div>
    </>
  );
};

export default LiteracyClub;
