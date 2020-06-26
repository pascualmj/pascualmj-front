import { viewSectionClassName } from "../config/constants";

let sections;

const isInViewport = (currentScrollTop, cb) => {
  if (!sections) sections = document.querySelectorAll(viewSectionClassName);

  sections.forEach((section) => {
    if (!section.id) return;
    const top = section.offsetTop,
      bottom = top + section.clientHeight;

    if (currentScrollTop >= top && currentScrollTop <= bottom) {
      cb(section.id);
    }
  });
};

export default isInViewport;
