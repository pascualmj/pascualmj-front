import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Grid from "../../../components/Grid";
import Project from "../../../components/Project";

import { VIEW_SECTIONS } from "../../../config/constants";

const projects = [
  {
    imgUrl: require("../../../assets/img/projects/project_00.jpg"),
    title: "Boat Selling Platform",
    technology: "Vue",
    url: "https://www.gosail.com.ar/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_01.jpg"),
    title: "Construction Materiales Company",
    technology: "JS",
    url: "https://messineomateriales.com/pedidos/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_02.jpg"),
    title: "Wedding Landing Page",
    technology: "React",
    url: "https://www.dayjorge.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_03.jpg"),
    title: "Insurance Brokers Website",
    technology: "Vue",
    url: "https://www.estudioveliz.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_04.jpg"),
    title: "Advertising Agency Landing Page",
    technology: "JS",
    url: "https://superestructurasmetalicas.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_05.jpg"),
    title: "Hotel Website",
    technology: "JS",
    url: "https://clairdelunevgb.com.ar/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_06.jpg"),
    title: "Construction Company Website",
    technology: "JS",
    url: "http://www.luiniyluini.com.ar/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_07.jpg"),
    title: "Agency Portfolio Website",
    technology: "JS",
    url: "https://www.estudiobl.com/en/home/",
  },
];

const SectionWork = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionWork}>
      <SectionTitle title="My Work." size="regular" />
      <Text className="mt-2 mb-7">
        Feel free to take a look at some of my <strong>latest projects</strong>{" "}
        I worked in. I love to be faced with new projects, striving to offer the
        best user experience.
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
