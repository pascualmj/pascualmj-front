const scrollToSection = (containerId, sectionId) => {
  const containerElement = document.getElementById(containerId);
  const targetElement = document.getElementById(sectionId);
  containerElement.scroll({
    top: targetElement.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollToSection;
