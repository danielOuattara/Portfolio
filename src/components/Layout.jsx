import React, { useState } from "react";
import { Navbar, Sidebar, Footer } from "./";
import "../assets/css/main.css";

export default function Layout(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {props.children}
      <Footer />
    </>
  );
}
