import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Grid from "../../../components/Grid";
import Package from "../../../components/Package";

import { VIEW_SECTIONS } from "../../../config/constants";

const packages = [
  {
    title: "alfil",
    description: "Data validation JS library.",
    url: "https://www.npmjs.com/package/alfil",
    color: "#00cc99",
  },
  {
    title: "pswmeter",
    description: "Password strength meter.",
    url: "https://github.com/pascualmj/pswmeter",
    color: "#3366ff",
  },
  {
    title: "mpselect",
    description: "Custom dropdown list jQuery plugin.",
    url: "https://github.com/pascualmj/mpselect",
    color: "yellow",
  },
];

const SectionPackages = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionPackages}>
      <SectionTitle title="Open source projects." size="regular" />
      <Text className="mt-2 mb-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Grid
        items={packages}
        keyExtractor={(item) => item.title}
        renderItems={(item) => (
          <Package
            title={item.title}
            description={item.description}
            url={item.url}
            color={item.color}
            className="mb-3"
          />
        )}
        columns={3}
      />
    </ViewSection>
  );
};

export default SectionPackages;
