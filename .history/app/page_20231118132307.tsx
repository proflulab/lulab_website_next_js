import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Clubs</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
