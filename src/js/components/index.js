import { cursorIconInit, cursorIconCleanup } from "./Xefco/cursorIcon";
import { splideInit, splideCleanup } from "./Global/splide";
import {
  expandableBlockInit,
  expandableBlockCleanup,
} from "./Ausora/expandableBlock";

import { footerImageLinks, footerYear } from "./Global/footer";
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
import { bannerInit, bannerCleanup } from "./Ausora/banner";
import {
  adaptiveWarmthInit,
  adaptiveWarmthCleanup,
} from "./XReflex/adaptiveWarmth";
import { bottomNavInit, bottomNavCleanup } from "./Global/bottomNav";
import { productCardsInit, productCardsCleanup } from "./XReflex/products";
import {
  xrMillsBrandsCardsInit,
  xrMillsBrandsCardsCleanup,
} from "./XReflex/XrMillsBrandsCards";
import { testimonialInit, testimonialCleanUp } from "./XReflex/testimonial";
import { usecasesInit, usecasesCleanup } from "./XReflex/usecases";
import { howItWorksInit, howItWorksCleanup } from "./XReflex/howItWorks";
import { stackInit, stackCleanup } from "./XReflex/stack";

export const componentsInit = (page = document) => {
  cursorIconInit(page);
  splideInit(page);
  expandableBlockInit(page);
  footerImageLinks(page);
  footerYear(page);
  articleImageScaleInit(page);
  solutionToggleInit(page);
  comparisonToggleInit(page);
  auMillsBrandsCardsInit(page);
  auFaqInit(page);
  processInit(page);
  bannerInit(page);
  adaptiveWarmthInit(page);
  bottomNavInit(page);
  productCardsInit(page);
  xrMillsBrandsCardsInit(page);
  testimonialInit(page);
  usecasesInit(page);
  howItWorksInit(page);
  stackInit(page);
  // console.log("components init");
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
  bannerCleanup(page);
  adaptiveWarmthCleanup(page);
  bottomNavCleanup(page);
  productCardsCleanup(page);
  xrMillsBrandsCardsCleanup(page);
  testimonialCleanUp(page);
  usecasesCleanup(page);
  howItWorksCleanup(page);
  stackCleanup(page);
  // console.log("components cleanup");
};
