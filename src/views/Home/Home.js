import React from "react";
import profileImage from "../../assets/img/img_profile_00.jpg";

import ViewSection from "../../components/ViewSection";
import CircleImage from "../../components/CircleImage";
import SectionTitle from "../../components/SectionTitle";

const Home = () => {
  return (
    <>
      <ViewSection>
        <CircleImage imgUrl={profileImage} alt="Manuel Pascual" />
        <SectionTitle title="Hey y'all!" size="big" />
      </ViewSection>
    </>
  );
};

export default Home;
