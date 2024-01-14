/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

export default function LeadershipClub() {
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
          <img src="/image2.jpg" alt="" width={1700} height={1000} />
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
              <br /> AND LED BY PROFESSOR LU XIANGQIAN, NURTURES INNOVATION{" "}
              <br />
              AND LEADERSHIP.
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
                The Leadership Club is set up by Tsinghua Professor
                <br /> Lu Xiangqian to encourage students to innovate and
                <br /> start businesses, broaden their horizons and improve
                <br />
                their leadership. The club invites outstanding entrepreneurs,
                <br />
                innovators, etc. to the club to talk with the students, and
                <br />
                learns the successful experience of leaders in various
                <br />
                industries in close communication. Strive to achieve the <br />{" "}
                realm of &apos;talking with the king, winning the book for ten
                <br />
                years&apos;. Organize online salons regularly to help
                participants <br /> understand industry information and clear
                career direction.
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
            marginBottom: "650px",
          }}
        />
      </div>
      <End />
    </>
  );
}
