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
import { AcmeLogo } from "./AcmeLogo";

interface IconComponents {
  [key: string]: React.ReactNode;
}

const App: React.FC = () => {
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

  return (
    <Navbar>
      {/* ... */}
      <Button
        disableRipple
        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
        radius="sm"
        variant="light"
      >
        {/* Using an inline SVG */}
        <svg
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {/* SVG content */}
        </svg>
        Features
      </Button>
      {/* ... */}
      <DropdownItem>
        {/* Using an <img> tag */}
        <img
          src="icon-path.svg"
          alt="icon"
          className="text-warning"
          style={{ width: "30px", height: "30px" }}
        />
        Autoscaling
      </DropdownItem>
      {/* ... */}
    </Navbar>
  );
};

export default App;
