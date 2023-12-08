"use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// const Navbar: React.FC = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setShowDropdown(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleClubClick = (clubPath: string) => {
//     setShowDropdown(false);
//     window.location.href = clubPath;
//   };

//   return (
//     <nav
//       className="p-4 fixed top-0 w-full z-10"
//       style={{
//         backgroundImage: `url('/title.jpg')`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between bg-opacity-90">
//         <div className="flex items-center flex-shrink-0 text-black mr-6">
//           <div
//             className="flex items-center"
//             onClick={() => setShowDropdown(false)}
//           >
//             <Image src="/logo.png" alt="Lu Lab" width="50" height="50" />
//             <span className="ml-8 text-xl lu-lab-text font-semibold">
//               Lu Lab
//             </span>
//           </div>
//         </div>

//         <div className="flex-grow text-center">
//           <ul className="flex justify-center space-x-4">
//             <li>
//               <Link
//                 className="text-white text-xl px-5 py-2 rounded font-semibold"
//                 href="/"
//               >
//                 <span className="hover:text-black">Home</span>
//               </Link>
//             </li>

//             <li>
//               <div className="relative" ref={dropdownRef}>
//                 <a
//                   href="#"
//                   className="text-white text-xl px-5 py-2 rounded font-semibold"
//                   onClick={toggleDropdown}
//                 >
//                   <span className="hover:text-black">Clubs</span>
//                 </a>
//                 {showDropdown && (
//                   <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-72">
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() => handleClubClick("/MetaverseClub")}
//                     >
//                       Metaverse Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() => handleClubClick("/DigitalLiteracyClub")}
//                     >
//                       Digital Literacy Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() =>
//                         handleClubClick("/DigitalMicroprojectsClub")
//                       }
//                     >
//                       Digital Microprojects Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() =>
//                         handleClubClick("/AdvancedDigitalTechClub")
//                       }
//                     >
//                       Advanced Digital Tech Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() => handleClubClick("/AIClub")}
//                     >
//                       AI Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() => handleClubClick("/DigitalMarketingClub")}
//                     >
//                       Digital Marketing Club
//                     </a>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-700"
//                       onClick={() => handleClubClick("/LeadershipClub")}
//                     >
//                       Leadership Club
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </li>
//             <li>
//               <Link
//                 href="/About"
//                 className="text-white text-xl px-5 py-2 rounded font-semibold"
//               >
//                 <span className="hover:text-black">About</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showClubs, setShowClubs] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setShowClubs(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleClubs = () => {
    setShowClubs(!showClubs);
  };

  const handleClubClick = (clubPath: string) => {
    setShowMenu(false);
    setShowClubs(false);
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
            onClick={() => {
              setShowMenu(false);
              setShowClubs(false);
            }}
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
              <div className="relative" ref={menuRef}>
                <a
                  href="#"
                  className="text-white text-xl px-5 py-2 rounded font-semibold"
                  onClick={toggleMenu}
                >
                  <span className="hover:text-black">Menu</span>
                </a>
                {(showMenu || window.innerWidth > 600) && (
                  <div
                    className={`absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-${
                      window.innerWidth > 600 ? "72" : "full"
                    }`}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={toggleClubs}
                    >
                      Clubs
                    </a>
                    <Link href="/" passHref>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                      >
                        Home
                      </a>
                    </Link>
                    <Link href="/About" passHref>
                      <a
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                      >
                        About
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              {showDropdown && (
                <div className="absolute top-full left-0 bg-gray-800 text-gray-300 py-2 rounded w-72">
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
                    onClick={() => handleClubClick("/DigitalMicroprojectsClub")}
                  >
                    Digital Microprojects Club
                  </a>
                  <a
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => handleClubClick("/AdvancedDigitalTechClub")}
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
