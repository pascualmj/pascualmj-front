const formatItemSpacing = (direction, itemSpacing, wrapItems, unit) => {
  const result = { style: {} };
  if (direction === "row") {
    result.style.marginRight = `${itemSpacing}${unit}`;
    result.style.marginBottom = wrapItems ? `${itemSpacing}${unit}` : "0";
  }
  if (direction === "column") {
    result.style.marginBottom = `${itemSpacing}${unit}`;
    result.style.marginRight = wrapItems ? `${itemSpacing}${unit}` : "0";
  }
  return result;
};

export default formatItemSpacing;
