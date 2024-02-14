/* eslint-disable @next/next/no-img-element */

"use client";
import { Image } from "@nextui-org/react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import App from "../title/page";

import PreviewPage from "../../pages/pay";
import End from "../title/end";

const Course: React.FC = () => {
  return (
    <>
      <Course />

      <div>
        <PreviewPage />

        <End />
      </div>
    </>
  );
};

export default Course;
