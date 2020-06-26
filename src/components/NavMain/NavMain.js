import React, { useState } from "react";
import imgRightMisc from "../../assets/img/img_00.png";
import imgLeftMisc from "../../assets/img/img_01.png";
import "./navMain.scss";

import NavLink from "./NavLink";
import List from "../List";
import Link from "../Link";
import SocialIcons from "../SocialIcons";

import { scrollToSection } from "../../functions";
import { viewSections, mainViewContainerId } from "../../config/constants";

const NavMain = () => {
  const [navLinks] = useState([
    { text: "aboute me", scrollTo: viewSections.sectionAbout, isActive: true },
    { text: "my work", scrollTo: viewSections.sectionWork, isActive: false },
    {
      text: "articles",
      scrollTo: viewSections.sectionArticles,
      isActive: false,
    },
    {
      text: "OS projects",
      scrollTo: viewSections.sectionPackages,
      isActive: false,
    },
    {
      text: "contact me",
      scrollTo: viewSections.sectionContact,
      isActive: false,
    },
  ]);

  const handleClick = (scrollTo) => {
    scrollToSection(mainViewContainerId, scrollTo);
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
              scrollTo={item.scrollTo}
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
