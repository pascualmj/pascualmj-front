import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import FormContact from "../../../components/FormContact";

import { VIEW_SECTIONS } from "../../../config/constants";

const SectionContact = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionContact}>
      <SectionTitle title="Contact Me." size="regular" />
      <Text className="mt-2 mb-7">
        Want to hire me or work with me? Send your message using this form or by
        sending an email directly to <strong>hello@pascualmj.dev</strong>.
      </Text>
      <FormContact />
    </ViewSection>
  );
};

export default SectionContact;
