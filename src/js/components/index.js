import { cursorIconInit, cursorIconCleanup } from "./cursorIcon";
import { splideInit, splideCleanup } from "./splide";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  splideCleanup(page);
  console.log("components cleanup");
};
