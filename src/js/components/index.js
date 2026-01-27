import { cursorIconInit, cursorIconCleanup } from "./cursorIcon";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  console.log("components cleanup");
};
