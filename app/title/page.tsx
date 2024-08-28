"use client";
import React, { useState, useEffect } from "react";
import { Avatar, NextUIProvider } from "@nextui-org/react";
import FirstModal from "../../pages/components/page"; // 导入你的模态框组件
import supabase from "../../pages/lib/supabaseClient";
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
import { Box, Typography } from "@mui/material";
import { useUser } from "../../pages/context/UserContext"; // 导入 UserContext 的钩子

const App: React.FC = () => {
  const { user, loading, setUser } = useUser(); // 从 UserContext 获取用户信息
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
  const toggleClubsDropdown = () => {
    if (showMenuButton) {
      setIsClubsOpen(!isClubsOpen);
    }
  };

  const formatPhoneNumber = (phoneNumber: string | any[]) => {
    if (!phoneNumber || phoneNumber.length < 7) return phoneNumber;
    const start = phoneNumber.slice(0, 3);
    const end = phoneNumber.slice(-4);
    return `${start}****${end}`;
  };

  const formatEmail = (email: string) => {
    const [localPart, domain] = email.split("@");

    // 如果本地部分小于等于3个字符，就保留全部字符，否则保留前3个字符
    const start = localPart.length <= 3 ? localPart : localPart.slice(0, 3);

    return `${start}****@${domain}`;
  };

  const getAvatarInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "N";
  };

  const handleLogOut = async () => {
    try {
      // 先在客户端执行 signOut，清除本地会话信息
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error("Logout failed: " + error.message);
      }

      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // 重定向到登录页面或其他页面
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
      // 处理错误情况，例如显示错误提示
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // 条件渲染页面内容
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // 使容器的高度充满视口高度
        }}
      >
        <Typography variant="h6" sx={{ color: "black" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <React.StrictMode>
      <NextUIProvider>
        <main className="dark text-foreground bg-background w-full">
          <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="dark text-foreground bg-background"
          >
            <NavbarContent>
              {showMenuButton && (
                <NavbarMenuToggle aria-label="Navigation menu" />
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
                  <Dropdown className="dark text-foreground bg-background">
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
                    <DropdownMenu className="dark text-foreground bg-background">
                      <DropdownItem
                        as={Link}
                        href="/MetaverseClub"
                        description="Dedicated to creating a virtual language environment..."
                        startContent={icons.scale}
                      >
                        <a style={{ color: "white" }}>Metaverse Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalLiteracyClub"
                        description="Strives to enhance children's computer skills..."
                        startContent={icons.activity}
                      >
                        <a style={{ color: "white" }}>Digital Literacy Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalMicroprojectsClub"
                        description="This is a cradle for a group of..."
                        startContent={icons.flash}
                      >
                        <a style={{ color: "white" }}>
                          Digital Microprojects Club
                        </a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/AdvancedDigitalTechClub"
                        description="Mastering advanced digital technology..."
                        startContent={icons.server}
                      >
                        <a style={{ color: "white" }}>
                          Advanced Digital Technology Club
                        </a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/AIClub"
                        description="Using the most advanced artificial intelligence..."
                        startContent={icons.user}
                      >
                        <a style={{ color: "white" }}>AI Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/DigitalMarketingClub"
                        description="Take you to master cutting-edge..."
                        startContent={icons.marketing}
                      >
                        <a style={{ color: "white" }}>Digital Marketing Club</a>
                      </DropdownItem>
                      <DropdownItem
                        as={Link}
                        href="/LeadershipClub"
                        description="The leadership club, originating from Tsinghua University..."
                        startContent={icons.leadership}
                      >
                        <a style={{ color: "white" }}>Leadership Club</a>
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
            <NavbarContent className=" sm:flex gap-4" justify="end">
              {!loading && user ? (
                <Dropdown className="dark text-foreground bg-background">
                  <NavbarItem>
                    <DropdownTrigger>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar>
                          {user?.user_metadata?.avatar ? (
                            <img
                              src={user.user_metadata.avatar}
                              alt="User Avatar"
                            />
                          ) : (
                            getAvatarInitial(user?.user_metadata?.first_name)
                          )}
                        </Avatar>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginLeft: 1,
                          }}
                        >
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            sx={{ textAlign: "center", marginBottom: 0 }}
                          >
                            {user?.phone
                              ? formatPhoneNumber(user.phone)
                              : formatEmail(user?.email)}
                          </Typography>
                        </Box>
                      </Box>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu>
                    <DropdownItem
                      as={Link}
                      href="/UserProfile"
                      startContent={icons.leadership}
                    >
                      <a style={{ color: "white" }}>Profile</a>
                    </DropdownItem>
                    <DropdownItem
                      as={Link}
                      onClick={handleLogOut} // Add onClick handler for logout
                      startContent={icons.scale}
                    >
                      <a style={{ color: "white" }}>logout</a>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <FirstModal />
              )}
            </NavbarContent>
            {showMenuButton && isMenuOpen && (
              <NavbarMenu
                className="dark text-foreground "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              >
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    {item === "Clubs" ? (
                      <>
                        <div className="flex items-center justify-between w-full ">
                          <Link className="w-full" color="foreground" size="lg">
                            {item}
                          </Link>

                          <Dropdown className="dark text-foreground bg-background">
                            <DropdownTrigger>
                              <Button
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={
                                  <ChevronDown fill="currentColor" size={16} />
                                }
                                radius="sm"
                                variant="light"
                                onMouseDown={() => {
                                  // 添加兼容移动端的点击逻辑
                                  if ("ontouchstart" in window) {
                                    setIsClubsOpen(!isClubsOpen);
                                  }
                                }}
                                onClick={e => {
                                  if (showMenuButton) {
                                    e.preventDefault();
                                    setIsClubsOpen(!isClubsOpen);
                                  }
                                }}
                              ></Button>
                            </DropdownTrigger>
                            <DropdownMenu>
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
  );
};
export default App;
