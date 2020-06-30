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
    title: "Boat Selling Platform",
    technology: "Vue",
    url: "https://www.gosail.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Construction Materiales Company",
    technology: "JS",
    url: "https://messineomateriales.com/pedidos/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Wedding Landing Page",
    technology: "React",
    url: "https://www.dayjorge.com/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Insurance Brokers Website",
    technology: "Vue",
    url: "https://www.estudioveliz.com/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Street Ads Business Landing Page",
    technology: "JS",
    url: "https://superestructurasmetalicas.com/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Hotel Website",
    technology: "JS",
    url: "https://clairdelunevgb.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
    title: "Construction Company Website",
    technology: "JS",
    url: "http://www.luiniyluini.com.ar/",
  },
  {
    imgUrl:
      "https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg",
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
