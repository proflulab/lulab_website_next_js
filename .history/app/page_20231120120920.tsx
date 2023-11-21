"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showClubsMenu, setShowClubsMenu] = useState(false);

  const toggleClubsMenu = () => {
    setShowClubsMenu(!showClubsMenu);
  };

  const closeClubsMenu = () => {
    setShowClubsMenu(false);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Lu Lab" width={50} height={50} />
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
                <Link href="/Clubs/Club1">
                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                    Clubs
                  </a>
                </Link>
                {showClubsMenu && (
                  <div className="absolute bg-white p-4 mt-2 rounded shadow-md">
                    {/* Clubs Menu Items */}
                    <ul>
                      <li>
                        <Link href="/Clubs/Club1">
                          <a className="block py-2">Club 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Clubs/Club2">
                          <a className="block py-2">Club 2</a>
                        </Link>
                      </li>
                      {/* Add more club links as needed */}
                    </ul>
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
  );
}
