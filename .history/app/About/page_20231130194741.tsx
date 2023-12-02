"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
    const router = useRouter();
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
                        onClick={() => handleClubClick("/Metaverse-Club")}
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

          {/* Adding a gray rectangle */}
          <div
            style={{
              height: "300px",
              width: "55%",
              margin: "0 auto",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <Image
              src="/LuXiangqian.png"
              alt=""
              width="260"
              height="280" // Set dimensions of the image
            />

            <div
              style={{
                color: "black",
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginLeft: "0px",
                  textAlign: "left",
                }}
              >
                Thank you for your interest in Lu Lab!
              </div>
              <br />
              So much has been accomplished since Lu Lab was founded in 1994.
              Our lab has grown in such tremendous ways, but I am so proud that
              our mission and our unique character have remained firmly in
              place.
              <br />
              <br />I invite you to explore our website, discover more about our
              worldwide learning community, and see what makes the Lu Lab
              experience so extraordinary. <br />
              <br />
              -Lewis X. Lu, Ph.D.
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#40A850",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Lu Lab Tuition Standard
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "40px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-55px",
              }}
            >
              TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
              MEMBER(ADULT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
              MEMBER(MINOR)
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-200px",
              }}
            >
              INDUSTRIAL
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥76,000
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "20px",
                textAlign: "center",
                textIndent: "-195px", // 根据需要调整缩进值
              }}
            >
              METAVERSE
              GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥19,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ¥38,000
            </div>
            <hr
              style={{
                border: "none",
                borderBottom: "1px solid black",

                width: "70%",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            />
            <div style={{ position: "relative" }}>
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
      </div>
    </>
  );
}
