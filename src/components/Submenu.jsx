import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
//--------------------------------------------------------------

export default function Submenu(props) {
  // console.log("props = ", props);
  const [columns, setColumns] = useState("");
  const subMenuContainerRef = useRef(null);

  useEffect(() => {
    props.subMenuPageToShown.subLinks.length <= 3
      ? setColumns("col-2")
      : setColumns("col-3");
    subMenuContainerRef.current.style.left = `${props.subMenuLocation.subMenuCenterPosition}px`;
    subMenuContainerRef.current.style.top = `${props.subMenuLocation.subMenuTopPosition}px`;
  }, [props.subMenuLocation, props.subMenuPageToShown.subLinks]);

  const hideSubMenu = () => {
    props.setIsSubMenuOpen(false);
  };
  return (
    <aside
      className={props.isSubMenuOpen ? "submenu show" : "submenu"}
      ref={subMenuContainerRef}
      onMouseLeave={() => hideSubMenu()}
    >
      <div className={` nav-subLinks submenu-center ${columns} `}>
        {props.subMenuPageToShown.subLinks.map((subLink, index) => {
          return (
            <Link
              key={index}
              to={subLink.url}
              className="link-btn"
              onClick={() => props.setIsSubMenuOpen(false)}
            >
              {subLink.page}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
