import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import List from "../../../components/List";
import Article from "../../../components/Article";
import Divider from "../../../components/Divider";

const articles = [
  {
    title: "Understanding destructuring in Javascript.",
    url: "https://www.google.com/",
    tags: ["javascript", "html", "consectetur"],
    emoji: {
      label: "controls",
      symbol: "🎛",
    },
  },
  {
    title: "5 Javascript tips you must know to improve your workflow.",
    url: "https://www.google.com/",
    tags: ["javascript", "lorem"],
    emoji: {
      label: "book",
      symbol: "📖",
    },
  },
  {
    title: "How to upload images to Firebase Storage from NodeJS API.",
    url: "https://www.google.com/",
    tags: ["javascript", "node", "firebase", "api"],
    emoji: {
      label: "satelite",
      symbol: "📡",
    },
  },
];

const SectionArticles = () => {
  return (
    <ViewSection>
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
