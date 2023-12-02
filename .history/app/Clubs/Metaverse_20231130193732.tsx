"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import router from "next/router";
export default function About() {
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
      router.push(clubPath);
    };

    return (
      <nav
        className="p-4 fixed top-0 w-full z-10"
        style={{
          backgroundImage: `url('/title.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-opacity-90">
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <div
              className="flex items-center"
              onClick={() => setShowDropdown(false)}
            >
              <Image src="/logo.png" alt="Lu Lab" width="50" height="50" />
              <span className="ml-8 text-xl lu-lab-text font-semibold">
                Lu Lab
              </span>
            </div>
          </div>

          <div className="flex-grow text-center">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link
                  className="text-white text-xl px-5 py-2 rounded font-semibold"
                  href="/"
                >
                  <span className="hover:text-black">Home</span>
                </Link>
              </li>

              <li>
                <div className="relative" ref={dropdownRef}>
                  <a
                    href="#"
                    className="text-white text-xl px-5 py-2 rounded font-semibold"
                    onClick={toggleDropdown}
                  >
                    <span className="hover:text-black">Clubs</span>
                  </a>
                  {showDropdown && (
                    <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-72">
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => handleClubClick("./Clubs/Metaverse")}
                      >
                        Metaverse Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() =>
                          handleClubClick("/Digital-Literacy-Club")
                        }
                      >
                        Digital Literacy Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() =>
                          handleClubClick("/Digital-Microprojects-Club")
                        }
                      >
                        Digital Microprojects Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() =>
                          handleClubClick("/Advanced-Digital-Tech-Club")
                        }
                      >
                        Advanced Digital Tech Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => handleClubClick("/AI-Club")}
                      >
                        AI Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() =>
                          handleClubClick("/Digital-Marketing-Club")
                        }
                      >
                        Digital Marketing Club
                      </a>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => handleClubClick("/Leadership-Club")}
                      >
                        Leadership Club
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-white text-xl px-5 py-2 rounded font-semibold"
                >
                  <span className="hover:text-black">About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  return (
    <>
      <Navbar />
      <div style={{ height: "1000px", width: "1700px", position: "relative" }}>
        <Image src="/image2.jpg" alt="" width="1700" height="1000" />

        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "70px",
            fontWeight: "bold",
          }}
        >
          The New Education
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "50px",
            fontWeight: "normal",
          }}
        >
          in AI age
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "40px",
            fontWeight: "normal",
          }}
        >
          All work and no play makes Jack a dull boy
        </div>

        <div
          style={{
            height: "800px",
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
            position: "absolute",
            top: "82%",
            paddingBottom: "50px", // Add padding here to create space
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome From the Head of Lab
          </h1>

          <div style={{ marginTop: "20px" }}>
            <Image src="/title.jpg" alt="" height="230" width="1700" />
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "2%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src="/logo.png" alt="" height="50" width="50" />
              <p
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontWeight: "600",
                  marginLeft: "20px",
                }}
              >
                Lu Lab
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "90px",
                left: "2.5%",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "grey",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                CONTACT INFO
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginLeft: "2px",
                  textAlign: "left",
                }}
              >
                <br />
                admin@lulabs.org
                <br />
                <br />
                East Brokaw Road 310-F San Jose, CA 95112 USA <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
