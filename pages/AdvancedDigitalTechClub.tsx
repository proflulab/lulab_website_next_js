/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";
import ClubPageTemplate from "./ClubPageTemplate";
import { AdvancedDigitalTechClubData } from "./clubInfo/AdvancedDigitalTechInfo";

const MetaverseClub: React.FC = () => {
  return (
    <>
      <ClubPageTemplate club={AdvancedDigitalTechClubData} />
    </>
  );
};

export default MetaverseClub;
