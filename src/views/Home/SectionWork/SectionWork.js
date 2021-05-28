import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Grid from "../../../components/Grid";
import Project from "../../../components/Project";

import { VIEW_SECTIONS } from "../../../config/constants";

const projects = [
  {
    imgUrl: require("../../../assets/img/projects/project_08.jpg"),
    title: "Flowers Company from USA",
    technology: "JS",
    url: "https://hlandflowers.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_11.jpg"),
    title: "React Native with Typescript",
    technology: "RN",
    url: "https://github.com/pascualmj/ts-rn-boilerplate",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_12.jpg"),
    title: "Express Scaffolding with TS",
    technology: "Node",
    url: "https://github.com/pascualmj/ts-node-boilerplate",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_10.jpg"),
    title: "Insurance Brokers Website",
    technology: "JS",
    url: "https://iblbroker.com.ar/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_09.jpg"),
    title: "Travel Agency",
    technology: "JS",
    url: "https://fpincarg.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_05.jpg"),
    title: "Hotel Website",
    technology: "JS",
    url: "https://clairdelunevgb.com.ar/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_03.jpg"),
    title: "Institutional Website",
    technology: "Vue",
    url: "https://www.estudioveliz.com/",
  },
  {
    imgUrl: require("../../../assets/img/projects/project_01.jpg"),
    title: "Construction Materiales Company",
    technology: "JS",
    url: "https://messineomateriales.com/pedidos/",
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
        Feel free to take a look at some of my <strong>latest projects</strong>.
        I love to be faced with new projects, striving to offer the best user
        experience.
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
