import barba from "@barba/core";
import gsap from "gsap";
import { homeInit, homeCleanup } from "../pages/home.js";
import { lenisMain } from "./globalInit.js";
import { navbar } from "./navigation.js";

export function initBarba() {
  barba.init({
    // debug: true, // Remove in production
    transitions: [
      {
        name: "default-transition",
        async leave(data) {
          // Close menu first, wait for animation to complete
          await navbar.closeMenu();

          // Then animate out the page
          const tl = gsap.timeline();
          tl.to(data.current.container, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });

          return tl;
        },
        afterLeave() {
          console.log("after leave");
          lenisMain.scrollTo(0, { immediate: true });
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
