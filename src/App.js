import React, { useState, useEffect } from "react";

import ViewContainer from "./components/ViewContainer";
import PreloaderMain from "./components/PreloaderMain";
import HeaderMain from "./components/HeaderMain";
import NavMain from "./components/NavMain";
import Home from "./views/Home";

import { MAIN_VIEW_CONTAINER_ID } from "./config/constants";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewScrollTop, setViewScrollTop] = useState(0);
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleViewScroll = (e) => {
    setViewScrollTop(e.target.scrollTop);
  };

  const handleOpenNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <>
      <PreloaderMain isLoading={isLoading} delay={1000} />
      <HeaderMain handleOpenNav={handleOpenNav} navIsOpen={navIsOpen} />
      <NavMain viewScrollTop={viewScrollTop} isOpen={navIsOpen} />
      <ViewContainer
        id={MAIN_VIEW_CONTAINER_ID}
        onViewScroll={handleViewScroll}
        handleOpenNav={handleOpenNav}
        navIsOpen={navIsOpen}
      >
        <Home />
      </ViewContainer>
    </>
  );
};

export default App;
