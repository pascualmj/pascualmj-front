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
import { VIEW_SECTIONS, MAIN_VIEW_CONTAINER_ID } from "../../config/constants";

const NavMain = ({ viewScrollTop = 0, isOpen = false }) => {
  const [navLinks, setNavLinks] = useState([
    {
      text: "about me",
      scrollTo: VIEW_SECTIONS.sectionAbout,
      isActive: false,
    },
    { text: "my work", scrollTo: VIEW_SECTIONS.sectionWork, isActive: false },
    {
      text: "articles",
      scrollTo: VIEW_SECTIONS.sectionArticles,
      isActive: false,
    },
    {
      text: "OS projects",
      scrollTo: VIEW_SECTIONS.sectionPackages,
      isActive: false,
    },
    {
      text: "contact me",
      scrollTo: VIEW_SECTIONS.sectionContact,
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
    scrollToSection(MAIN_VIEW_CONTAINER_ID, scrollTo);
  };

  return (
    <div id="nav-main" className={`${isOpen ? "open" : ""}`}>
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
        <Link
          text="Explore this site's repo"
          url="https://github.com/pascualmj/pascualmj-front"
        />
      </div>
    </div>
  );
};

NavMain.propTypes = {
  viewScrollTop: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default NavMain;
