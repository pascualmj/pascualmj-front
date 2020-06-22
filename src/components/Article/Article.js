import React from "react";
import PropTypes from "prop-types";
import "./article.scss";

import Emoji from "../Emoji";
import Text from "../Text";
import List from "../List";
import Tag from "../Tag";
import Link from "../Link";

const Article = ({
  title,
  url,
  linkTitle = "Read now",
  tags,
  emoji,
  className = "",
}) => {
  return (
    <article className={`article ${className}`}>
      <Emoji label={emoji.label} symbol={emoji.symbol} size="big" />
      <div className="article-body">
        <Text font="secondary" color="absence" size="small">
          {title}
        </Text>
        <List
          items={tags}
          keyExtractor={(item) => item}
          renderItems={(item) => <Tag title={item} />}
          direction="row"
          itemSpacing={20}
          wrapItems
        />
      </div>
      <Link
        colorVariant="absence"
        url={url}
        text={linkTitle}
        icon={() => <i className="fas fa-long-arrow-alt-right"></i>}
      />
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  linkTitle: PropTypes.string,
  tags: PropTypes.array.isRequired,
  emoji: PropTypes.shape({
    label: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default Article;
