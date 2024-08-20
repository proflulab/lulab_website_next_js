"use client";
import React, { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import modal from "../../pages/components/page";
import Signin from "../../pages/Signin";
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
  useDisclosure,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
  Leadership,
  Marketing,
} from "./Icons";
import { Logo } from "./Logo";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClubsOpen, setIsClubsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenuButton = windowWidth <= 640;
  const menuItems = ["Home", "Clubs", "Course", "About"];
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
    leadership: (
      <Leadership className="text-leadership" fill="currentColor" size={30} />
    ),
    marketing: (
      <Marketing className="text-marketing" fill="currentColor" size={30} />
    ),
  };

  const toggleClubsDropdown = () => {
    if (showMenuButton) {
      setIsClubsOpen(!isClubsOpen);
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <React.StrictMode>
      <NextUIProvider>
        <main className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800 min-h-screen">
          <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800 shadow-md"
          >
            <NavbarContent>
              {showMenuButton && (
                <NavbarMenuToggle aria-label="Navigation menu" />
              )}
              <NavbarBrand>
                <Logo />
                <p className="font-bold text-gray-900">Lu Lab</p>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="center">
              {!showMenuButton && (
                <>
                  <NavbarItem>
                    <Link color="foreground" href="/">
                      Home
                    </Link>
                  </NavbarItem>
                  <Dropdown className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800">
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                          endContent={icons.chevron}
                          radius="sm"
                        >
                          Clubs
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800">
                      <DropdownItem
                        as={Link}
                        href="/MetaverseClub"
                        description="Dedicated to creating a virtual language environment..."
                        startContent={icons.scale}
                      >
                        <a className="text-gray-900">Metaverse Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalLiteracyClub"
                        description="Strives to enhance children's computer skills..."
                        startContent={icons.activity}
                      >
                        <a className="text-gray-900">Digital Literacy Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalMicroprojectsClub"
                        description="This is a cradle for a group of..."
                        startContent={icons.flash}
                      >
                        <a className="text-gray-900">
                          Digital Microprojects Club
                        </a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/AdvancedDigitalTechClub"
                        description="Mastering advanced digital technology..."
                        startContent={icons.server}
                      >
                        <a className="text-gray-900">
                          Advanced Digital Technology Club
                        </a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/AIClub"
                        description="Using the most advanced artificial intelligence..."
                        startContent={icons.user}
                      >
                        <a className="text-gray-900">AI Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalMarketingClub"
                        description="Take you to master cutting-edge..."
                        startContent={icons.marketing}
                      >
                        <a className="text-gray-900">Digital Marketing Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/LeadershipClub"
                        description="The leadership club, originating from Tsinghua University..."
                        startContent={icons.leadership}
                      >
                        <a className="text-gray-900">Leadership Club</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <NavbarItem>
                    <Link color="foreground" href="/Course">
                      Course
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link color="foreground" href="/About">
                      About
                    </Link>
                  </NavbarItem>
                </>
              )}
            </NavbarContent>

            {showMenuButton && isMenuOpen && (
              <NavbarMenu className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800 shadow-md">
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    {item === "Clubs" ? (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <Link className="w-full text-gray-900" size="lg">
                            {item}
                          </Link>
                          <Dropdown className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800">
                            <DropdownTrigger>
                              <Button
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                                onMouseDown={() => {
                                  if ("ontouchstart" in window) {
                                    setIsClubsOpen(!isClubsOpen);
                                  }
                                }}
                                onClick={(e) => {
                                  if (showMenuButton) {
                                    e.preventDefault();
                                    setIsClubsOpen(!isClubsOpen);
                                  }
                                }}
                              ></Button>
                            </DropdownTrigger>
                            <DropdownMenu className="bg-gradient-to-r from-green-300 to-green-100 text-gray-800">
                              <DropdownItem
                                key="autoscaling"
                                description="Dedicated to creating a virtual language environment..."
                                startContent={icons.scale}
                              >
                                <Link href="/MetaverseClub">
                                  <a className="text-gray-900">
                                    Metaverse Club
                                  </a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="usage_metrics"
                                description="Strives to enhance children's computer skills..."
                                startContent={icons.activity}
                              >
                                <Link href="/DigitalLiteracyClub">
                                  <a className="text-gray-900">
                                    Digital Literacy Club
                                  </a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="production_ready"
                                description="This is a cradle for a group of..."
                                startContent={icons.flash}
                              >
                                <Link href="/DigitalMicroprojectsClub">
                                  <a className="text-gray-900">
                                    Digital Microprojects Club
                                  </a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="99_uptime"
                                description="Mastering advanced digital technology..."
                                startContent={icons.server}
                              >
                                <Link href="/AdvancedDigitalTechClub">
                                  <a className="text-gray-900">
                                    Advanced Digital Technology Club
                                  </a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="supreme_support"
                                description="Using the most advanced artificial intelligence..."
                                startContent={icons.user}
                              >
                                <Link href="/AIClub">
                                  <a className="text-gray-900">AI Club</a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="supreme_support"
                                description="Take you to master cutting-edge..."
                                startContent={icons.marketing}
                              >
                                <Link href="/DigitalMarketingClub">
                                  <a className="text-gray-900">
                                    Digital Marketing Club
                                  </a>
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="supreme_support"
                                description="The leadership club, originating from Tsinghua University..."
                                startContent={icons.leadership}
                              >
                                <Link href="/LeadershipClub">
                                  <a className="text-gray-900">
                                    Leadership Club
                                  </a>
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </>
                    ) : (
                      <Link
                        className="w-full text-gray-900"
                        href={
                          item === "Home"
                            ? "/"
                            : item === "Course"
                            ? "/Course"
                            : "/About"
                        }
                        size="lg"
                        key={item}
                      >
                        {item}
                      </Link>
                    )}
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            )}

            {Signin()}
            {modal()}
          </Navbar>
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
};

export default App;
