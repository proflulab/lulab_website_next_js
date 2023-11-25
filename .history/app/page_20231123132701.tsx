"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter from Next.js

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); // Get the router object

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
              <a
                href="/Home"
                className={`text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold ${
                  router.pathname === "/Home" ? "bg-gray-700" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <div className="relative">
                <a
                  href="#"
                  className={`text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold ${
                    router.pathname === "/club" ? "bg-gray-700" : ""
                  }`}
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
              <a
                href="/About"
                className={`text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold ${
                  router.pathname === "/About" ? "bg-gray-700" : ""
                }`}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
