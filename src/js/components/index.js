import { cursorIconInit, cursorIconCleanup } from "./cursorIcon";
import { splideInit, splideCleanup } from "./splide";
import { expandableBlockInit, expandableBlockCleanup } from "./expandableBlock";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  expandableBlockInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  expandableBlockCleanup(page);
  splideCleanup(page);
  console.log("components cleanup");
};
