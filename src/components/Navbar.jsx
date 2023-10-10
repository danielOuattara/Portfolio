import React from "react";
import fullStackLogo from "./../assets/images/full_stack_web_developer_logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { page_links } from "../constants";
import { Link } from "gatsby";

export default function Navbar(props) {
  //-----
  const displaySubMenu = (event) => {
    // console.log("Open");
    const menuDOMRect = event.target.getBoundingClientRect();
    // console.log(menuDOMRect);

    props.setSubMenuLocation({
      subMenuCenterPosition: (menuDOMRect.left + menuDOMRect.right) / 2,
      subMenuTopPosition: menuDOMRect.bottom,
    });

    const menuPageName = event.target.textContent;
    // console.log(menuPageName);

    const menuPageToShow = page_links.find(
      (item) => item.page === menuPageName,
    );

    // console.log("menuPageToShow = ", menuPageToShow);
    props.setSubMenuPageToShown(menuPageToShow);

    props.setIsSubMenuOpen(true);
  };
  //----
  const hideSubMenu = (event) => {
    console.log(event.target);
    if (!event.target.classList.contains("has-subLinks")) {
      props.setIsSubMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" onMouseOver={(event) => hideSubMenu(event)}>
      <div className="nav-center">
        <div className="nav-header">
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
          {page_links.map((link) => {
            // console.log(link);
            return (
              <Link
                key={link.id}
                // style={{ border: "1px solid green", paddingBottom: "20px" }}
                to={link.url}
                className={link.subLinks ? "link-btn has-subLinks" : "link-btn"}
                onMouseOver={(event) => link.subLinks && displaySubMenu(event)}
              >
                {link.page}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
