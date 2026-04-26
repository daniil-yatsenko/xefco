import { cursorIconInit, cursorIconCleanup } from "./Xefco/cursorIcon";
import { splideInit, splideCleanup } from "./Global/splide";
import {
  expandableBlockInit,
  expandableBlockCleanup,
} from "./Ausora/expandableBlock";

import { footerImageLinks } from "./Global/footer";
import {
  articleImageScaleInit,
  articleImageScaleCleanup,
} from "./Global/articles";
import {
  solutionToggleInit,
  solutionToggleCleanup,
} from "./Ausora/solutionToggle";
import {
  comparisonToggleInit,
  comparisonToggleCleanup,
} from "./Ausora/comparisonToggle";
import {
  auMillsBrandsCardsInit,
  auMillsBrandsCardsCleanup,
} from "./Ausora/auMillsBrandsCards";
import { auFaqInit, auFaqCleanup } from "./Ausora/ausoraFAQ";
import { processInit, processCleanup } from "./Ausora/process";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  expandableBlockInit(page);
  footerImageLinks(page);
  articleImageScaleInit(page);
  solutionToggleInit(page);
  comparisonToggleInit(page);
  auMillsBrandsCardsInit(page);
  auFaqInit(page);
  processInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  expandableBlockCleanup(page);
  splideCleanup(page);
  articleImageScaleCleanup(page);
  solutionToggleCleanup(page);
  comparisonToggleCleanup(page);
  auMillsBrandsCardsCleanup(page);
  auFaqCleanup(page);
  processCleanup(page);
  console.log("components cleanup");
};
