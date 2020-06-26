import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import imgRightMisc from "../../assets/img/img_00.png";
import imgLeftMisc from "../../assets/img/img_01.png";
import "./navMain.scss";

import NavLink from "./NavLink";
import List from "../List";
import Link from "../Link";
import SocialIcons from "../SocialIcons";

import { scrollToSection, isInViewport } from "../../functions";
import { viewSections, mainViewContainerId } from "../../config/constants";

const NavMain = ({ viewScrollTop = 0 }) => {
  const [navLinks, setNavLinks] = useState([
    { text: "aboute me", scrollTo: viewSections.sectionAbout, isActive: false },
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

  useEffect(() => {
    isInViewport(viewScrollTop, changeActiveLink);
  }, [viewScrollTop]);

  const changeActiveLink = (sectionId) => {
    setNavLinks((currentState) => {
      return currentState
        .map((link) => (link.isActive ? { ...link, isActive: false } : link))
        .map((link) =>
          link.scrollTo === sectionId ? { ...link, isActive: true } : link
        );
    });
  };

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

NavMain.propTypes = {
  viewScrollTop: PropTypes.number,
};

export default NavMain;
