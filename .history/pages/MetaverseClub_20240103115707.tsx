import React from "react";
import Image from "next/image";
import { Box, Heading, Container, Divider } from "@nextui-org/react";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";

export default function MetaverseClub() {
  return (
    <Box>
      <App />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Box position="relative" mb="20px">
          <Image src="/metaverse.png" alt="" width={1700} height={1000} />
          <Box
            position="absolute"
            bottom={0}
            width="100%"
            bg="#BBBBBB"
            color="#ffffff"
            p="10px"
            textAlign="left"
            zIndex={1}
          >
            <p
              style={{ fontSize: "36px", marginLeft: "320px", margin: "20px" }}
            >
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </p>
          </Box>
          <Box
            position="absolute"
            fontWeight="800"
            bg="#FFFFFF"
            color="#000000"
            p="10px"
            ml="300px"
            textAlign="left"
            fontSize="36px"
            m="20px"
          >
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
          </Box>
        </Box>{" "}
        <Divider mb="400px" />
        <End />
      </Box>
    </Box>
  );
}
