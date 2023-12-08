"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // 导入菜单图标

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

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

        {/* For large screens, show individual buttons */}
        <div className="hidden md:flex md:justify-center md:flex-grow">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="/"
                className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <div className="relative" ref={dropdownRef}>
                <a
                  href="#"
                  className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
                  onClick={toggleDropdown}
                >
                  <span>Clubs</span>
                </a>
                {showDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 py-2 rounded w-72 text-center">
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/MetaverseClub")}
                    >
                      Metaverse Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/DigitalLiteracyClub")}
                    >
                      Digital Literacy Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() =>
                        handleClubClick("/DigitalMicroprojectsClub")
                      }
                    >
                      Digital Microprojects Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() =>
                        handleClubClick("/AdvancedDigitalTechClub")
                      }
                    >
                      Advanced Digital Tech Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/AIClub")}
                    >
                      AI Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/DigitalMarketingClub")}
                    >
                      Digital Marketing Club
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => handleClubClick("/LeadershipClub")}
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
                className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
              >
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* For small screens, show menu button */}
        <div className="md:hidden flex-grow text-center">
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
            >
              <FaBars />
            </button>
            {showMenu && (
              <div className="fixed top-0 left-0 h-full w-full bg-gray-800 text-white py-4">
                <div className="max-w-7xl mx-auto relative">
                  {/* Cancel button */}
                  <button
                    onClick={() => setShowMenu(false)}
                    className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black absolute top-4 left-4"
                  >
                    <FaTimes />
                  </button>
                  {/* Menu items */}
                  <ul className="flex flex-col items-center space-y-4">
                    <li>
                      <Link
                        href="/"
                        className="text-xl font-semibold hover:text-gray-300"
                        onClick={() => setShowMenu(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Clubs"
                        className="text-xl font-semibold hover:text-gray-300"
                        onClick={() => setShowMenu(false)}
                      >
                        Clubs
                      </Link>
                    </li>
                    {/* Add other menu items */}
                    <li>
                      <Link
                        href="/About"
                        className="text-xl font-semibold hover:text-gray-300"
                        onClick={() => setShowMenu(false)}
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
