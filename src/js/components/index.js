import { cursorIconInit, cursorIconCleanup } from "./Xefco/cursorIcon";
import { splideInit, splideCleanup } from "./Global/splide";
import {
  expandableBlockInit,
  expandableBlockCleanup,
} from "./Ausora/expandableBlock";
import {
  contentOnScrollInit,
  contentOnScrollCleanup,
} from "./Global/contentOnScroll";
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

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  expandableBlockInit(page);
  contentOnScrollInit(page);
  footerImageLinks(page);
  articleImageScaleInit(page);
  solutionToggleInit(page);
  comparisonToggleInit(page);
  auMillsBrandsCardsInit(page);
  auFaqInit(page);
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  cursorIconCleanup(page);
  expandableBlockCleanup(page);
  splideCleanup(page);
  contentOnScrollCleanup(page);
  articleImageScaleCleanup(page);
  solutionToggleCleanup(page);
  comparisonToggleCleanup(page);
  auMillsBrandsCardsCleanup(page);
  auFaqCleanup(page);
  console.log("components cleanup");
};
