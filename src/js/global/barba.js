import barba from "@barba/core";
import gsap from "gsap";
import { homeInit, homeCleanup } from "../pages/home.js";
import { lenisMain } from "./globalInit.js";
import { navbar } from "./navigation.js";
import { componentsInit, componentsCleanup } from "../components/index.js";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        afterLeave(data) {
          // console.log("after leave");
          componentsCleanup(data.current.container);
          lenisMain.scrollTo(0, { immediate: true });
        },
        enter(data) {
          componentsInit(data.next.container);

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
          ScrollTrigger.refresh();
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

// barba x finsweet attributes
// push all filter instances to FA after page transition, and resize Lenis on filter
let listRO = null;
barba.hooks.afterEnter(() => {
  if (!window.FinsweetAttributes) return;

  window.FinsweetAttributes.push([
    "list",
    async () => {
      await window.FinsweetAttributes.modules.list.restart();

      // Hook Lenis resize to layout changes
      const listWrapper = document.querySelector('[fs-list-element="list"]');
      if (listWrapper) {
        listRO = new ResizeObserver(() => {
          requestAnimationFrame(() => {
            lenisMain.resize();
          });
        });
        listRO.observe(listWrapper);
      }
    },
  ]);
});

barba.hooks.beforeLeave(() => {
  listRO?.disconnect();
  listRO = null;
});

// auto-play all videos and lotties
barba.hooks.afterEnter((data) => {
  const videos = data.next.container.querySelectorAll("video");
  videos.forEach((video) => {
    video.play();
  });
});

// Re-init Webflow interactions, including Lottie animations
barba.hooks.afterEnter((data) => {
  // Sync Webflow's page ID to the newly-entered page
  const parser = new DOMParser();
  const nextDoc = parser.parseFromString(data.next.html, "text/html");
  const nextWfPage = nextDoc.documentElement.getAttribute("data-wf-page");
  if (nextWfPage) {
    document.documentElement.setAttribute("data-wf-page", nextWfPage);
  }

  if (window.Webflow) {
    window.Webflow.destroy();
    window.Webflow.ready();
    window.Webflow.require("ix2")?.init();
    document.dispatchEvent(new Event("readystatechange"));
  }
});

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
