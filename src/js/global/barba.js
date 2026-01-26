import barba from "@barba/core";
import gsap from "gsap";
import { homeInit, homeCleanup } from "../pages/home.js";
import { lenisMain } from "./globalInit.js";

export function initBarba() {
  barba.init({
    // debug: true, // Remove in production
    transitions: [
      {
        name: "default-transition",
        leave(data) {
          // Animate out
          return new Promise((resolve) => {
            gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            resolve();
          });
        },
        enter(data) {
          // Animate in
          return new Promise((resolve) => {
            gsap.from(data.next.container, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            resolve();
          });
        },
        afterEnter() {
          lenisMain.resize();
        },
      },
    ],
    views: [
      {
        namespace: "home",
        beforeEnter() {
          homeInit();
        },
        beforeLeave() {
          homeCleanup();
        },
      },
      // Add more views for other pages here
    ],
  });
}

// home
// our-company
// careers
// news
// investor
// contact
// ausora
// au-for-mills
// au-for-brands
// xreflex
// xr-for-mills
// xr-for-brands
