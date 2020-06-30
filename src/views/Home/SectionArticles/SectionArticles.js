import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import List from "../../../components/List";
import Article from "../../../components/Article";
import Divider from "../../../components/Divider";

import { VIEW_SECTIONS } from "../../../config/constants";

const articles = [
  {
    title: "Understanding Destructuring in Javascript.",
    url:
      "https://dev.to/pascualmj/understanding-destructuring-in-javascript-5elf",
    tags: ["javascript", "es6"],
    emoji: {
      label: "book",
      symbol: "📖",
    },
  },
];

const SectionArticles = () => {
  return (
    <ViewSection id={VIEW_SECTIONS.sectionArticles}>
      <SectionTitle title="Articles." size="regular" />
      <Text className="mt-2 mb-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <List
        items={articles}
        keyExtractor={(item) => item.title}
        renderItems={(item) => (
          <Article
            title={item.title}
            url={item.url}
            linkTitle={item.linkTitle}
            tags={item.tags}
            emoji={item.emoji}
            className="mb-1"
          />
        )}
        itemSpacing={25}
        divider={() => <Divider />}
      />
    </ViewSection>
  );
};

export default SectionArticles;
