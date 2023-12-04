"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Link from "next/link";
import Navbar from "@/app/title/page";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "1000px", width: "1700px", position: "relative" }}>
        <Image src="/image2.jpg" alt="" width="1700" height="1000" />
      </div>
    </>
  );
};

export default MetaverseClub;
