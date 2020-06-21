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
  wrapItems = false,
}) => {
  return (
    <ul className={`list ${direction} ${wrapItems ? "wrap" : "nowrap"}`}>
      {items.map((item) => (
        <li
          key={keyExtractor(item)}
          {...formatItemSpacing(direction, itemSpacing, wrapItems, "px")}
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
  wrapItems: PropTypes.bool,
};

export default List;
