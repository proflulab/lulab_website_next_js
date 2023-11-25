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

      <li>
        {/* Use React Router's Link component for navigation */}
        <Link
          to="/About"
          className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold"
        >
          About
        </Link>
      </li>

      {/* Your other JSX remains the same */}
    </nav>
  );
};

export default Navbar;
