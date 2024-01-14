import React from "react";
import Image from "next/image";
import End from "@/app/title/end";
import App from "next/app";

export default function MetaverseClub() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
  };

  const bottomBarStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#BBBBBB",
    color: "#ffffff",
    padding: "10px",
    textAlign: "left",
    zIndex: 1,
  };

  const mainContentStyle: React.CSSProperties = {
    position: "absolute",
    fontWeight: 800,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "10px",
    marginLeft: "300px",
    textAlign: "left",
  };

  const descriptionStyle: React.CSSProperties = {
    margin: 20,
    fontSize: "36px",
    marginLeft: "320px",
  };

  const professorStyle: React.CSSProperties = {
    color: "black",
    fontSize: "30px",
    fontWeight: 500,
    textAlign: "left",
  };

  return (
    <>
      <App />
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <Image src="/metaverse.png" alt="" width={1700} height={1000} />
          <div style={bottomBarStyle}>
            <p style={descriptionStyle}>
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </p>
          </div>
          <div style={mainContentStyle}>
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                The Metaverse Club is dedicated to creating a virtual language
                <br />
                environment for children to enhance their foreign language
                <br />
                listening and speaking skills. In this unique atmosphere,
                <br />
                children can effortlessly improve their language abilities
                <br /> while enjoying their favorite activities and hobbies.
              </div>
              <div style={professorStyle}>Head of Lab, professor Lu</div>
            </div>
          </div>
        </div>
        <hr style={{ marginBottom: "400px" }} />
        <End />
      </div>
    </>
  );
}
