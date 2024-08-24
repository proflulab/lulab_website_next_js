/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClubPageTemplate from "./ClubPageTemplate";
import { DigitalMarketingClubData } from "./clubInfo/DigitalMarketingInfo";


const LiteracyClub: React.FC = () => {
  return (
    <>
      <ClubPageTemplate club={DigitalMarketingClubData} />
    </>
  );
};

export default LiteracyClub;
