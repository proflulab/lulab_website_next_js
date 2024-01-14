import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-center">
          <div style={{ position: "relative" }}>
            <Image src="/metaverse.png" alt="" width={1700} height={1000} />
            <div
              className="absolute bottom-0 w-full bg-gray-300 text-white p-4"
              style={{ zIndex: 1 }}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
                FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE LISTENING AND
                SPEAKING SKILLS.
                <br />
                LISTENING AND SPEAKING SKILLS.
              </p>
            </div>
            <div
              className="absolute font-bold bg-white text-black p-4 ml-24 md:ml-32 lg:ml-48 xl:ml-64"
              style={{ zIndex: 1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                The Metaverse Club is dedicated to creating a virtual language
                <br />
                environment for children to enhance their foreign language
                <br />
                listening and speaking skills. In this unique atmosphere,
                <br />
                children can effortlessly improve their language abilities
                <br /> while enjoying their favorite activities and hobbies.
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Head of Lab, professor Lu
              </div>
            </div>
          </div>{" "}
          <hr className="my-16 md:my-24 lg:my-32 xl:my-40" />
          <End />
        </div>
      </div>
    </>
  );
};

export default MetaverseClub;
