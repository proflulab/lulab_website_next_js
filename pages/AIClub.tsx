/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";
import ClubPageTemplate from "./ClubPageTemplate";
import { AIClubData } from "./clubInfo/AIClubInfo";


const MetaverseClub: React.FC = () => {
  return (
    <>
      <ClubPageTemplate club={AIClubData} />
    </>
  );
};

export default MetaverseClub;
