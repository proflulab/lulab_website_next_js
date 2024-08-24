/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";
import ClubPageTemplate from "./ClubPageTemplate";
import { LeadershipClubData } from "./clubInfo/LeadershipClubInfo";


export default function LeadershipClub() {
  return (
    <>
      <ClubPageTemplate club={LeadershipClubData} />
    </>
  );
}
