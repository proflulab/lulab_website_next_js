/* eslint-disable @next/next/no-img-element */

"use client";
import { Image } from "@nextui-org/react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import App from "../title/page";

import End from "../title/end";

const Course: React.FC = () => {
  return (
    <>
      <App />
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
        publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
      ></stripe-buy-button>
      <div>
        <End />
      </div>
    </>
  );
};

export default Course;