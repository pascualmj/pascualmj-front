import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import FormContact from "../../../components/FormContact";

import { viewSections } from "../../../config/constants";

const SectionContact = () => {
  return (
    <ViewSection id={viewSections.sectionContact}>
      <SectionTitle title="Contact Me." size="regular" />
      <Text className="mt-2 mb-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <FormContact />
    </ViewSection>
  );
};

export default SectionContact;
