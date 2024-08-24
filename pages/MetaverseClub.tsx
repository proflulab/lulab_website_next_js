/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";
import ClubPageTemplate from "./ClubPageTemplate";
import { MetaverseClubData } from "./clubInfo/MetaverseClubInfo";


export default function MetaverseClub() {
  return (
    <>
      <ClubPageTemplate club={MetaverseClubData} />
    </>
  );
}
