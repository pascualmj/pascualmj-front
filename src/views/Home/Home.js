import React from "react";
import profileImage from "../../assets/img/img_profile_00.jpg";

import ViewSection from "../../components/ViewSection";
import CircleImage from "../../components/CircleImage";

const Home = () => {
  return (
    <>
      <ViewSection>
        <CircleImage imgUrl={profileImage} alt="Manuel Pascual" />
      </ViewSection>
    </>
  );
};

export default Home;
