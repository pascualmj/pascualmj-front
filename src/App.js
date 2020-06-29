import React, { useState, useEffect } from "react";

import ViewContainer from "./components/ViewContainer";
import PreloaderMain from "./components/PreloaderMain";
import Logo from "./components/Logo";
import NavMain from "./components/NavMain";
import Home from "./views/Home";

import { MAIN_VIEW_CONTAINER_ID } from "./config/constants";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewScrollTop, setViewScrollTop] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleViewScroll = (e) => {
    setViewScrollTop(e.target.scrollTop);
  };

  return (
    <>
      <PreloaderMain isLoading={isLoading} delay={1000} />
      <Logo />
      <NavMain viewScrollTop={viewScrollTop} />
      <ViewContainer
        id={MAIN_VIEW_CONTAINER_ID}
        onViewScroll={handleViewScroll}
      >
        <Home />
      </ViewContainer>
    </>
  );
};

export default App;
