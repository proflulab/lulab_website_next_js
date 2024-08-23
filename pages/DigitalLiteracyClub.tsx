/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { Grid, Typography } from "@mui/material";
import ClubPageTemplate from "./ClubPageTemplate";
import { LiteracyClubData } from "./clubInfo/LiteracyClubInfo";
import "../app/globals.css";
// import App from "../app/title/page";
// import End from "../app/title/end";

const LiteracyClub: React.FC = () => {
  return (
    <>
      <ClubPageTemplate club={LiteracyClubData} />
    </>
  );
};

export default LiteracyClub;
