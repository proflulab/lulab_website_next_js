"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router"; // Import useRouter from Next.js

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [router, setRouter] = useState<any>(null); // Initialize router as null initially

  useEffect(() => {
    // Ensure router is only initialized on the client-side
    setRouter(require("next/router").default);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClubClick = (clubPath: string) => {
    setShowDropdown(false);
    router.push(clubPath); // Use router.push for client-side navigation
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
        <div
          className="flex items-center flex-shrink-0 text-black mr-6"
          onClick={() => setShowDropdown(false)}
        >
          <div className="flex items-center">
            <Image src="/logo.png" alt="Lu Lab" width="50" height="50" />
            <span className="ml-8 text-xl lu-lab-text font-semibold">
              Lu Lab
            </span>
          </div>
        </div>

        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <div className="relative">
                <a
                  href="/club"
                  className="text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold"
                  onClick={toggleDropdown}
                >
                  Clubs
                </a>
                {showDropdown && (
                  <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-36">
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/Clubs/Club1")}
                    >
                      Club 1
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/Clubs/Club2")}
                    >
                      Club 2
                    </a>
                    {/* Add more club links as needed */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/About">
                <a className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
