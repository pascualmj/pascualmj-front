import React from "react";

import SectionAbout from "./SectionAbout";
import SectionWork from "./SectionWork";
import SectionArticles from "./SectionArticles";
import SectionPackages from "./SectionPackages";
import SectionContact from "./SectionContact";

const Home = () => {
  return (
    <>
      <SectionAbout />
      <SectionWork />
      <SectionArticles />
      <SectionPackages />
      <SectionContact />
    </>
  );
};

export default Home;
