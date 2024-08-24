/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClubPageTemplate from "./ClubPageTemplate";
import { LiteracyClubData } from "./clubInfo/LiteracyClubInfo";
import "../app/globals.css";


const LiteracyClub: React.FC = () => {
  return (
    <>
      <ClubPageTemplate club={LiteracyClubData} />
    </>
  );
};

export default LiteracyClub;
