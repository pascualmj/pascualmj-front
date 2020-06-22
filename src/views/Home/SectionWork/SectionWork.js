import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Grid from "../../../components/Grid";
import Project from "../../../components/Project";

const projects = [
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Hotel Booking Website",
    technology: "Vue",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Listing Web Platform",
    technology: "Node",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Order Placing Platform",
    technology: "Javascript",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Institutional Website",
    technology: "React",
  },
];

const SectionWork = () => {
  return (
    <ViewSection>
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
            className="mb-3"
          />
        )}
      />
    </ViewSection>
  );
};

export default SectionWork;
