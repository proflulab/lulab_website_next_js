"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import Link from "next/link";
import Navbar from "@/app/title/page";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* 页面内容 */}
        <h1>Welcome to the Metaverse Page</h1>
        {/* 其他页面内容 */}
      </div>
    </>
  );
};

export default MetaverseClub;
