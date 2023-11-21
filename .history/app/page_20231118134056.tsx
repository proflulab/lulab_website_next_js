// Navbar.tsx

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo部分 */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-lg font-bold text-white">Lu Lab</a>
            </Link>
          </div>
        </div>

        {/* 导航链接部分 */}
        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/clubs">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Clubs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
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
