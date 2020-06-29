import { VIEW_SECTION_CLASSNAME } from "../config/constants";

let sections;

const isInViewport = (currentScrollTop, cb) => {
  if (!sections) sections = document.querySelectorAll(VIEW_SECTION_CLASSNAME);

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
