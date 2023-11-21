// components/Layout.js

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";

const Layout = ({ children }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <div
              className="flex items-center"
              onClick={() => setShowDropdown(false)}
            >
              <Image src={logo} alt="Lu Lab" width={50} height={50} />
              <span className="ml-2 text-lg">Lu Lab</span>
            </div>
          </div>

          <div className="flex-grow text-center">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="relative">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                    onClick={toggleDropdown}
                  >
                    Clubs
                  </a>
                  {showDropdown && (
                    <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-36">
                      <a
                        href="Clubs/Club1"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Club 1
                      </a>

                      <a
                        href="Clubs/Club2"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Club 2
                      </a>
                      {/* Add more club links as needed */}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-16">
        {" "}
        {/* Add margin top to accommodate the fixed navbar */}
        {children}
      </div>
    </>
  );
};

export default Layout;
