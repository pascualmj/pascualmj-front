import React from "react";
import profileImage from "../../../assets/img/img_profile_00.jpg";
import "./sectionAbout.scss";

import ViewSection from "../../../components/ViewSection";
import CircleImage from "../../../components/CircleImage";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import List from "../../../components/List";
import Chip from "../../../components/Chip";

import { VIEW_SECTIONS } from "../../../config/constants";

const skills = [
  { text: "html" },
  { text: "css" },
  { text: "javascript" },
  { text: "typescript" },
  { text: "react native" },
  { text: "react" },
  { text: "vue" },
  { text: "node" },
];

const SectionAbout = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionAbout}>
      <div className="greeting">
        <CircleImage imgUrl={profileImage} alt="Manuel Pascual" size={150} />
        <SectionTitle title="Hey y'all!" size="big" />
      </div>
      <Text className="mt-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. I am
        passionate about building amazing apps in order to make the web a
        beautiful place. I've been working as a freelance developer{" "}
        <strong>since 2012</strong> with a strong background in Front End
        development and always focused on writing clean, elegant, and efficient
        code.{" "}
        <strong>
          Currently working as a Senior Frontend Developer at Telecom Argentina.
        </strong>
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
