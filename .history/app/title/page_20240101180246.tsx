// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"; // 导入菜单图标

// const Navbar: React.FC = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [showMenu, setShowMenu] = useState(false);

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
//             {/* 使用媒体查询调整 Logo 的大小 */}
//             <Image
//               src="/logo.png"
//               alt="Lu Lab"
//               className="w-12 h-12 md:w-12 md:h-12" // 在大屏幕上设置较大的尺寸
//               width={100}
//               height={100}
//             />
//             <span className="ml-4 text-2xl lu-lab-text font-semibold md:text-2xl md:text-3xl lg:text-2xl xl:text-2xl">
//               Lu Lab
//             </span>
//           </div>
//         </div>

//         {/* For large screens, show individual buttons */}
//         <div className="hidden md:flex md:justify-center md:flex-grow">
//           <ul className="flex justify-center space-x-4">
//             <li>
//               <Link
//                 href="/"
//                 className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
//               >
//                 <span>Home</span>
//               </Link>
//             </li>
//             <li>
//               <div className="relative" ref={dropdownRef}>
//                 <a
//                   href="#"
//                   className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
//                   onClick={toggleDropdown}
//                 >
//                   <span>Clubs</span>
//                 </a>
//                 {showDropdown && (
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 py-2 rounded w-72 text-center">
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
//                 className="text-white text-xl px-5 py-2 rounded font-semibold hover:text-black"
//               >
//                 <span>About</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* For small screens, show menu button */}
//         <div className="md:hidden  text-center">
//           <div className="flex justify-between items-center">
//             {" "}
//             {/* 新增此 div */}
//             <button
//               onClick={() => setShowMenu(!showMenu)}
//               className="text-white text-2xl px-5 py-2 rounded font-semibold hover:text-black"
//             >
//               <FaBars />
//             </button>
//             <ul className="flex flex-col items-center space-y-4">
//               {showMenu && (
//                 <div className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 text-white py-4">
//                   <div className="max-w-7xl mx-auto relative">
//                     <ul className="flex flex-col items-center space-y-4">
//                       <button
//                         onClick={() => setShowMenu(false)}
//                         className="text-white text-3xl px-5 py-2  hover:text-black absolute top-3 left-3"
//                       >
//                         <FaTimes />
//                       </button>
//                       <li>
//                         <Link
//                           href="/"
//                           className="text-2xl font-semibold hover:text-gray-300"
//                           onClick={() => setShowMenu(false)}
//                         >
//                           Home
//                         </Link>
//                       </li>
//                       <li>
//                         <div className="relative" ref={dropdownRef}>
//                           <a
//                             href="#"
//                             className="text-white text-2xl px-5 py-2 rounded font-semibold hover:text-black"
//                             onClick={toggleDropdown}
//                           >
//                             <span>Clubs</span>
//                           </a>
//                           {showDropdown && (
//                             <div className=" bg-opacity-75 text-white py-4">
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/MetaverseClub")
//                                 }
//                               >
//                                 Metaverse Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/DigitalLiteracyClub")
//                                 }
//                               >
//                                 Digital Literacy Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/DigitalMicroprojectsClub")
//                                 }
//                               >
//                                 Digital Microprojects Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/AdvancedDigitalTechClub")
//                                 }
//                               >
//                                 Advanced Digital Tech Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() => handleClubClick("/AIClub")}
//                               >
//                                 AI Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/DigitalMarketingClub")
//                                 }
//                               >
//                                 Digital Marketing Club
//                               </a>
//                               <a
//                                 className="block px-4 py-2 hover:bg-gray-700 text-xl"
//                                 onClick={() =>
//                                   handleClubClick("/LeadershipClub")
//                                 }
//                               >
//                                 Leadership Club
//                               </a>{" "}
//                               {/* Add other club options */}
//                             </div>
//                           )}
//                         </div>
//                       </li>

//                       <li>
//                         <Link
//                           href="/About"
//                           className="text-2xl font-semibold hover:text-gray-300"
//                           onClick={() => setShowMenu(false)}
//                         >
//                           About
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons";
import { Logo } from "./Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenuButton = windowWidth <= 640; // 设置显示菜单按钮的阈值（这里使用640px）

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  function handleClubClick(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Navbar
      // style={{
      //   backgroundImage: "url('/title.jpg')",
      //   backgroundSize: "cover",
      //   color: "black",
      // }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        {showMenuButton && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        )}
        <NavbarBrand>
          <Logo />
          {!showMenuButton && <p className="font-bold  text-inherit">Lu Lab</p>}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" sm:flex gap-4" justify="center">
        {!showMenuButton && (
          <>
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Clubs
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                  startContent={icons.scale}
                >
                  <a
                    className="block px-4 py-2 hover:bg-gray-700 text-xl"
                    onClick={() => handleClubClick("/MetaverseClub")}
                  >
                    Metaverse Club
                  </a>
                  Metaverse Club
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  startContent={icons.activity}
                >
                  Digital Literacy Club
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="ACME runs on ACME, join us and others serving requests at web scale."
                  startContent={icons.flash}
                >
                  Digital Microproject Club
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="Applications stay on the grid with high availability and high uptime guarantees."
                  startContent={icons.server}
                >
                  Advanced Digital Technology Club
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Overcome any challenge with a supporting team ready to respond."
                  startContent={icons.user}
                >
                  AI Club
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Overcome any challenge with a supporting team ready to respond."
                  startContent={icons.user}
                >
                  Digital Marketing Club
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Overcome any challenge with a supporting team ready to respond."
                  startContent={icons.user}
                >
                  Leadership Club
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavbarItem>
              <Link color="foreground" href="/About">
                About
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {!showMenuButton && (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      {showMenuButton && isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
