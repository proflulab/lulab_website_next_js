"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ClubData = [
  { path: "/Metaverse-Club", name: "Metaverse Club" },
  { path: "/Digital-Literacy-Club", name: "Digital Literacy Club" },
  { path: "/Digital-Microprojects-Club", name: "Digital Microprojects Club" },
  { path: "/Advanced-Digital-Tech-Club", name: "Advanced Digital Tech Club" },
  { path: "/AI-Club", name: "AI Club" },
  { path: "/Digital-Marketing-Club", name: "Digital Marketing Club" },
  { path: "/Leadership-Club", name: "Leadership Club" },
];

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClubClick = (clubPath: string) => {
    setShowDropdown(false);
    window.location.href = clubPath;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-content" onClick={() => setShowDropdown(false)}>
            <Image src="/logo.png" alt="Lu Lab" width="50" height="50" />
            <span className="lab-text font-semibold">Lu Lab</span>
          </div>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link className="menu-link" href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <div className="relative" ref={dropdownRef}>
                <a className="menu-link" onClick={toggleDropdown}>
                  <span>Clubs</span>
                </a>
                {showDropdown && (
                  <div className="dropdown">
                    {ClubData.map((club) => (
                      <a
                        key={club.path}
                        className="dropdown-link"
                        onClick={() => handleClubClick(club.path)}
                      >
                        {club.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/About" className="menu-link">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default function About() {
  return (
    <>
      <Navbar />
      {/* Include the rest of the content here */}
    </>
  );
}
