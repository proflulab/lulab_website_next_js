/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";
import ClubPageTemplate from "./ClubPageTemplate";
import { DigitalMicroprojectsClubData } from "./clubInfo/DigitalMicroprojectsClubInfo";

const MicroprojectsClub: React.FC = () => {
  return (
    <>
          <ClubPageTemplate club={DigitalMicroprojectsClubData} />
    </>
  );
};

export default MicroprojectsClub;
