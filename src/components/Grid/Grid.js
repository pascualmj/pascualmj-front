import React from "react";
import PropTypes from "prop-types";
import "./grid.scss";

const Grid = ({
  items,
  renderItems,
  keyExtractor,
  columns = 2,
  className = "",
}) => {
  return (
    <ul className={`grid columns-${columns} ${className}`}>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItems(item)}</li>
      ))}
    </ul>
  );
};

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  renderItems: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  columns: PropTypes.oneOf([2, 3]),
  className: PropTypes.string,
};

export default Grid;
