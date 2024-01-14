import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";
import React, { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
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

export default function MetaverseClub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

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
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const showMenuButton = windowWidth <= 640;

  const menuItems = ["Home", "Clubs", "About"];
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
  return (
    <>
      <React.StrictMode>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
              <NavbarContent>
                {showMenuButton && (
                  <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  />
                )}
                <NavbarBrand>
                  <Logo />
                  <p className="font-bold text-inherit">Lu Lab</p>
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
                            className="p-0 bg-background data-[hover=true]:bg-transparent"
                            endContent={icons.chevron}
                            radius="sm"
                          >
                            Clubs
                          </Button>
                        </DropdownTrigger>
                      </NavbarItem>
                      <DropdownMenu>
                        <DropdownItem
                          description="Dedicated to creating a virtual language environment..."
                          startContent={icons.scale}
                        >
                          <Link href="/MetaverseClub">
                            <a style={{ color: "white" }}>Metaverse Club</a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="Strives to enhance children's computer skills..."
                          startContent={icons.activity}
                        >
                          <Link href="/DigitalLiteracyClub">
                            <a style={{ color: "white" }}>
                              Digital Literacy Club
                            </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="This is a cradle for a group of..."
                          startContent={icons.flash}
                        >
                          <Link href="/DigitalMicroprojectsClub">
                            <a style={{ color: "white" }}>
                              Digital Microprojects Club
                            </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="Mastering advanced digital technology..."
                          startContent={icons.server}
                        >
                          <Link href="/AdvancedDigitalTechClub">
                            <a style={{ color: "white" }}>
                              {" "}
                              Advanced Digital Technology Club
                            </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="Using the most advanced artificial intelligence..."
                          startContent={icons.user}
                        >
                          <Link href="/AIClub">
                            <a style={{ color: "white" }}>AI Club</a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="Take you to master cutting-edge..."
                          startContent={icons.marketing}
                        >
                          <Link href="/DigitalMarketingClub">
                            <a style={{ color: "white" }}>
                              Digital Marketing Club
                            </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          description="The leadership club, originating from Tsinghua University..."
                          startContent={icons.leadership}
                        >
                          <Link href="/LeadershipClub">
                            <a style={{ color: "white" }}>Leadership Club</a>
                          </Link>
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
                {/* {!showMenuButton && (
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
        )} */}
              </NavbarContent>
              {showMenuButton && isMenuOpen && (
                <NavbarMenu>
                  {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                      {item === "Clubs" ? (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <Link
                              className="w-full"
                              color="foreground"
                              size="lg"
                            >
                              {item}
                            </Link>

                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                  endContent={
                                    <ChevronDown
                                      fill="currentColor"
                                      size={16}
                                    />
                                  }
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
                              <DropdownMenu
                                style={{
                                  display: isClubsOpen ? "block" : "none",
                                }}
                              >
                                <DropdownItem
                                  key="autoscaling"
                                  description="Dedicated to creating a virtual language environment..."
                                  startContent={icons.scale}
                                >
                                  <Link href="/MetaverseClub">
                                    <a style={{ color: "white" }}>
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
                                    <a style={{ color: "white" }}>
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
                                    <a style={{ color: "white" }}>
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
                                    <a style={{ color: "white" }}>
                                      {" "}
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
                                    <a style={{ color: "white" }}>AI Club</a>
                                  </Link>
                                </DropdownItem>
                                <DropdownItem
                                  key="supreme_support"
                                  description="Take you to master cutting-edge..."
                                  startContent={icons.marketing}
                                >
                                  <Link href="/DigitalMarketingClub">
                                    <a style={{ color: "white" }}>
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
                                    <a style={{ color: "white" }}>
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
                          className="w-full"
                          color={
                            index === menuItems.length - 0
                              ? "danger"
                              : "foreground"
                          }
                          href={item === "Home" ? "/" : "/About"}
                          size="lg"
                        >
                          {item}
                        </Link>
                      )}
                    </NavbarMenuItem>
                  ))}
                </NavbarMenu>
              )}
            </Navbar>
          </main>
        </NextUIProvider>
      </React.StrictMode>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image src="/metaverse.png" alt="" width={1700} height={1000} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#BBBBBB",
              color: "#ffffff",
              padding: "10px",
              textAlign: "left",
              zIndex: 1,
            }}
          >
            <p
              style={{
                margin: 20,
                fontSize: "36px",
                marginLeft: "320px",
              }}
            >
              DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
              FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE
              <br />
              LISTENING AND SPEAKING SKILLS.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",

              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px",
              marginLeft: "300px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                The Metaverse Club is dedicated to creating a virtual language
                <br />
                environment for children to enhance their foreign language
                <br />
                listening and speaking skills. In this unique atmosphere,
                <br />
                children can effortlessly improve their language abilities
                <br /> while enjoying their favorite activities and hobbies.
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Head of Lab, professor Lu
              </div>
            </div>
          </div>
        </div>{" "}
        <hr
          style={{
            marginBottom: "400px",
          }}
        />
        <End />
      </div>
    </>
  );
}
