import React, { useState } from "react";
import imgRightMisc from "../../assets/img/img_00.png";
import imgLeftMisc from "../../assets/img/img_01.png";
import "./navMain.scss";

import NavLink from "./NavLink";
import List from "../List";
import Link from "../Link";
import SocialIcons from "../SocialIcons";

const NavMain = () => {
  const [navLinks] = useState([
    { text: "aboute me", isActive: true },
    { text: "my work", isActive: false },
    { text: "articles", isActive: false },
    { text: "contact me", isActive: false },
  ]);

  const handleClick = () => {
    console.log("Apretaste!");
  };

  return (
    <div id="nav-main">
      <img src={imgRightMisc} alt="" className="square-dots-right" />
      <img src={imgLeftMisc} alt="" className="square-dots-left" />
      <nav>
        <List
          items={navLinks}
          keyExtractor={(item) => item.text}
          renderItems={(item) => (
            <NavLink
              text={item.text}
              isActive={item.isActive}
              handleClick={handleClick}
            />
          )}
        />
      </nav>
      <div>
        <SocialIcons />
        <Link text="Download my resume" url="https://www.google.com/" />
      </div>
    </div>
  );
};

export default NavMain;
