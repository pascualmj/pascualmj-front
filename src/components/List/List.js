import React from "react";
import PropTypes from "prop-types";
import "./list.scss";

import { formatItemSpacing, renderListDivider } from "../../functions";

const List = ({
  items,
  renderItems,
  keyExtractor,
  direction = "column",
  itemSpacing = 22,
  wrapItems = false,
  divider = null,
}) => {
  return (
    <ul className={`list ${direction} ${wrapItems ? "wrap" : "nowrap"}`}>
      {items.map((item, index) => (
        <li
          key={keyExtractor(item)}
          {...formatItemSpacing(direction, itemSpacing, wrapItems, "px")}
        >
          {renderItems(item)}
          {renderListDivider(index, items.length, divider)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  itemSpacing: PropTypes.number,
  wrapItems: PropTypes.bool,
  DividerEl: PropTypes.func,
};

export default List;
