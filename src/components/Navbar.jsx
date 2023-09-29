import React from "react";
import logo from "../assets/images/logo.svg";
import fullStackLogo from "./../assets/images/full_stack_web_developer_logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { page_links } from "../constants";
import { Link } from "gatsby";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt=" fullStack Web Developer" /> */}
          <img
            src={fullStackLogo}
            alt=" fullStack Web Developer"
            className="logo"
          />
          <button className="toggle-btn" onClick={props.toggleSidebar}>
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
