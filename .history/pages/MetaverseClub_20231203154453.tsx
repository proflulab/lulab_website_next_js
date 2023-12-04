"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import Link from "next/link";
import Navbar from "@/app/title/page";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "50px",
          fontWeight: "normal",
        }}
      >
        in AI age
      </div>
    </>
  );
};

export default MetaverseClub;
