import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const ClubLink = ({
    clubPath,
    clubName,
  }: {
    clubPath: string;
    clubName: string;
  }) => (
    <Link
      to={clubPath}
      onClick={closeDropdown}
      className="block px-4 py-2 hover:bg-gray-700"
    >
      {clubName}
    </Link>
  );

  return (
    <nav className="p-4 fixed top-0 w-full z-10">
      {/* Your existing code */}
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-opacity-90">
        {/* Your existing code */}
        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            <li>
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
                    <ClubLink clubPath="/Clubs/Club1" clubName="Club 1" />
                    <ClubLink clubPath="/Clubs/Club2" clubName="Club 2" />
                    {/* Add more club links as needed */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/About"
                className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
