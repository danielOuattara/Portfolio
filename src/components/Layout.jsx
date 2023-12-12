import React, { useState } from "react";
import { Navbar, Sidebar, Footer, Submenu } from "./";
import "../assets/css/main.css";

export default function Layout(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  });
  const [subMenuPageToShown, setSubMenuPageToShown] = useState({
    id: "",
    page: "",
    subLinks: [],
    url: "",
  });
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        setIsSubMenuOpen={setIsSubMenuOpen}
        setSubMenuLocation={setSubMenuLocation}
        setSubMenuPageToShown={setSubMenuPageToShown}
      />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Submenu
        isSubMenuOpen={isSubMenuOpen}
        subMenuLocation={subMenuLocation}
        subMenuPageToShown={subMenuPageToShown}
        setIsSubMenuOpen={setIsSubMenuOpen}
      />
      {props.children}
      <Footer />
    </>
  );
}
