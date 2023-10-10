import React from "react";
import { page_links, social_links } from "../constants";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";

export default function Sidebar(props) {
  return (
    <aside className={props.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={props.toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={props.isSidebarOpen ? "sidebar-links" : ""}>
          {page_links.map((link) => {
            if (link.subLinks) {
              return (
                <li key={link.id}>
                  <Link to={link.url} onClick={props.toggleSidebar}>
                    {link.page}
                  </Link>
                  <ul className="sidebar-subLinks">
                    {link.subLinks.map((subLink) => {
                      return (
                        <li key={subLink.id}>
                          <Link to={subLink.url} onClick={props.toggleSidebar}>
                            {subLink.page}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={link.id}>
                  <Link to={link.url} onClick={props.toggleSidebar}>
                    {link.page}
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <ul className={props.isSidebarOpen ? "social-links sidebar-icons" : ""}>
          {social_links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
