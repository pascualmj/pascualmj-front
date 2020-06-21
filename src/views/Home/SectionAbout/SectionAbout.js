import React from "react";
import profileImage from "../../../assets/img/img_profile_00.jpg";
import "./sectionAbout.scss";

import ViewSection from "../../../components/ViewSection";
import CircleImage from "../../../components/CircleImage";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import List from "../../../components/List";
import Chip from "../../../components/Chip";

const skills = [
  { text: "html" },
  { text: "css" },
  { text: "javascript" },
  { text: "vue" },
  { text: "react" },
  { text: "node" },
];

const SectionAbout = () => {
  return (
    <ViewSection>
      <div class="greeting">
        <CircleImage imgUrl={profileImage} alt="Manuel Pascual" size={150} />
        <SectionTitle title="Hey y'all!" size="big" />
      </div>
      <Text className="mt-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text className="mt-3">
        Since 2012, Vestibulum dictum purus in diam iaculis, at condimentum
        justo pharetra. In purus erat, <strong>facilisis non urna</strong> eu
        viverra fringilla orci. Vestibulum quis sagittis enim. Suspendisse
        potenti. Integer congue est ac enim accumsan elementum. Maecenas quis
        placerat metus.
      </Text>
      <Text className="mt-6 mb-2" font="secondary" color="alternative">
        My Programming Background
      </Text>
      <List
        items={skills}
        keyExtractor={(item) => item.text}
        renderItems={(item) => (
          <Chip text={item.text} variant="alternative" size="big" />
        )}
        direction="row"
        itemSpacing={15}
        wrapItems
      />
    </ViewSection>
  );
};

export default SectionAbout;
