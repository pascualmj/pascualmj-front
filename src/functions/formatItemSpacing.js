const formatItemSpacing = (direction, itemSpacing, unit) => {
  const result = { style: {} };
  if (direction === "row") result.style.marginRight = `${itemSpacing}${unit}`;
  if (direction === "column")
    result.style.marginBottom = `${itemSpacing}${unit}`;
  return result;
};

export default formatItemSpacing;
