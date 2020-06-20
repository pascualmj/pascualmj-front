import React from "react";
import PropTypes from "prop-types";
import "./list.scss";

import { formatItemSpacing } from "../../functions";

const List = ({
  items,
  renderItems,
  keyExtractor,
  direction = "column",
  itemSpacing = 22,
}) => {
  return (
    <ul className={`list ${direction}`}>
      {items.map((item) => (
        <li
          key={keyExtractor(item)}
          {...formatItemSpacing(direction, itemSpacing, "px")}
        >
          {renderItems(item)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.object.isRequired,
  renderItems: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  itemSpacing: PropTypes.number,
};

export default List;
