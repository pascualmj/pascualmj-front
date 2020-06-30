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
        In my spare time, I like to write articles about development to help and
        support the community. Check out the latest articles I wrote.
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
