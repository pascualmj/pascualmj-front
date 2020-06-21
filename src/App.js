import React, { useState, useEffect } from "react";

import ViewContainer from "./components/ViewContainer";
import PreloaderMain from "./components/PreloaderMain";
import Logo from "./components/Logo";
import NavMain from "./components/NavMain";
import Home from "./views/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <PreloaderMain isLoading={isLoading} delay={1000} />
      <Logo />
      <NavMain />
      <ViewContainer>
        <Home />
      </ViewContainer>
    </>
  );
}

export default App;
