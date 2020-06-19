import React from "react";

import ViewContainer from "./components/ViewContainer";
import Logo from "./components/Logo";
import NavMain from "./components/NavMain";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Logo />
      <NavMain />
      <ViewContainer>
        <Home />
      </ViewContainer>
    </>
  );
}

export default App;
