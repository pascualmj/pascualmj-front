import React from "react";
import imgRightMisc from "../../assets/img/img_00.png";
import imgLeftMisc from "../../assets/img/img_01.png";
import "./navMain.scss";

import NavLink from "./NavLink";

const NavMain = () => {
  const handleClick = () => {
    console.log("Apretaste!");
  };

  return (
    <div id="nav-main">
      <img src={imgRightMisc} alt="" className="square-dots-right" />
      <img src={imgLeftMisc} alt="" className="square-dots-left" />
      <nav>
        <ul>
          <li>
            <NavLink text="about me" handleClick={handleClick} />
          </li>
          <li>
            <NavLink text="my work" handleClick={handleClick} />
          </li>
          <li>
            <NavLink text="articles" handleClick={handleClick} />
          </li>
          <li>
            <NavLink text="contact me" handleClick={handleClick} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMain;
