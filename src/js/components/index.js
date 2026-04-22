import { cursorIconInit, cursorIconCleanup } from "./cursorIcon";
import { splideInit, splideCleanup } from "./splide";
import { expandableBlockInit, expandableBlockCleanup } from "./expandableBlock";
import { contentOnScrollInit, contentOnScrollCleanup } from "./contentOnScroll";
import { footerImageLinks } from "./footer";
import { articleImageScaleInit, articleImageScaleCleanup } from "./articles";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  expandableBlockInit(page);
  contentOnScrollInit(page);
  footerImageLinks(page);
  articleImageScaleInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  expandableBlockCleanup(page);
  splideCleanup(page);
  contentOnScrollCleanup(page);
  articleImageScaleCleanup(page);
  console.log("components cleanup");
};
