import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
      {/* Your other JSX remains the same */}
      <ul className="flex justify-center space-x-4">
        <li>
          {/* Use React Router's Link component for navigation */}
          <Link
            to="/Home"
            className="text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="relative">
            <a
              href="#"
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
          {/* Use React Router's Link component for navigation */}
          <Link
            to="/About"
            className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold"
          >
            About
          </Link>
        </li>
      </ul>
      {/* Your other JSX remains the same */}
    </nav>
  );
};

export default Navbar;
