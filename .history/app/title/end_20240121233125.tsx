/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const End: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/logo.png" alt="" height="50" width="50" />
        <p
          style={{
            marginTop: "5px",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            marginLeft: "15px",
          }}
        >
          Lu Lab
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "left",
          color: "grey",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        CONTACT INFO
      </div>
      <div
        style={{
          color: "grey",
          fontSize: "14px",
          fontWeight: "400",
          marginTop: "10px",
          textAlign: "left",
        }}
      >
        admin@lulabs.org
        <br />
        <br />
        East Brokaw Road 310-F
        <br />
        San Jose, CA 95112
        <br />
        USA
      </div>
    </div>
  );
};

export default End;
