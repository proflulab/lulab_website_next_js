import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
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

interface IconProps {
  fill: string;
  size: number;
  className: string;
  // Add other necessary properties according to your Icon component
  // height?: number | undefined;
  // width?: number | undefined;
}

interface Icons {
  chevron: React.ReactNode;
  scale: React.ReactNode;
  lock: React.ReactNode;
  activity: React.ReactNode;
  flash: React.ReactNode;
  server: React.ReactNode;
  user: React.ReactNode;
}

export default function App(): JSX.Element {
  const icons: Icons = {
    chevron: <ChevronDown fill="currentColor" size={16} className="" />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return <Navbar>{/* Rest of your JSX content using icons */}</Navbar>;
}
