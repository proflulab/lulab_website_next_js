"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Divider,
  Container,
  Grid,
  Avatar,
  Spacer,
} from "@nextui-org/react";
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
            <Text fontSize="36px" ml="320px" m="20px">
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </Text>
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
            <Text>
              The Metaverse Club is dedicated to creating a virtual language
              <br />
              environment for children to enhance their foreign language
              <br />
              listening and speaking skills. In this unique atmosphere,
              <br />
              children can effortlessly improve their language abilities
              <br /> while enjoying their favorite activities and hobbies.
            </Text>
            <Text
              color="black"
              fontSize="30px"
              fontWeight="500"
              textAlign="left"
            >
              Head of Lab, professor Lu
            </Text>
          </Box>
        </Box>{" "}
        <Divider m="400px" />
        <End />
      </Box>
    </Box>
  );
}
