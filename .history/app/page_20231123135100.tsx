import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigation = (route: string) => {
    setShowDropdown(false);
    router.push(route); // 使用客户端路由进行页面导航
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
              <button
                onClick={() => handleNavigation("/Home")}
                className="text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold"
              >
                Home
              </button>
            </li>
            <li>
              <div className="relative">
                <button
                  className="text-white text-xl hover:bg-gray-700 px-5 py-2 rounded font-semibold"
                  onClick={toggleDropdown}
                >
                  Clubs
                </button>
                {showDropdown && (
                  <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-36">
                    <button
                      onClick={() => handleNavigation("/Clubs/Club1")}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Club 1
                    </button>
                    <button
                      onClick={() => handleNavigation("/Clubs/Club2")}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Club 2
                    </button>
                    {/* Add more club links as needed */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/About")}
                className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded font-semibold"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
