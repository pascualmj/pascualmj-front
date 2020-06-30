import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Grid from "../../../components/Grid";
import Project from "../../../components/Project";

import { VIEW_SECTIONS } from "../../../config/constants";

const projects = [
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Hotel Booking Website",
    technology: "Vue",
    url: "https://www.gosail.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Listing Web Platform",
    technology: "Node",
    url: "https://www.gosail.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Order Placing Platform",
    technology: "JS",
    url: "https://www.gosail.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Institutional Website",
    technology: "React",
    url: "https://www.gosail.com.ar/",
  },
];

const SectionWork = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionWork}>
      <SectionTitle title="My Work." size="regular" />
      <Text className="mt-2 mb-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Grid
        items={projects}
        keyExtractor={(item) => item.title}
        renderItems={(item) => (
          <Project
            imgUrl={item.imgUrl}
            title={item.title}
            technology={item.technology}
            url={item.url}
            className="mb-3"
          />
        )}
      />
    </ViewSection>
  );
};

export default SectionWork;
