import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bottomNavInit = (page = document) => {
  const bottomNav = page.querySelector(".bottom-navigation_wrapper");
  if (!bottomNav) return;

  const btnGroups = bottomNav.querySelectorAll(
    ".bottom-navigation_link-group-wrapper",
  );

  // clean up webflow's bug with empty link groups causing extra space
  btnGroups.forEach((group) => {
    if (group.children.length === 0) {
      group.remove();
    }
  });

  const btns = bottomNav.querySelectorAll(".bottom-navigation_link");
  let isHovered = false;

  btns.forEach((btn) => {
    const icon = btn.querySelector(".bottom-navigation_icon-wrapper");
    const btnColor = getComputedStyle(btn).backgroundColor;

    btn.addEventListener("mouseenter", () => {
      isHovered = true;
      gsap.to(icon, {
        y: "-0.1rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(btn, {
        backgroundColor: "black",
        duration: 0.3,
        ease: "power2.inOut",
      });
    });

    btn.addEventListener("mouseleave", () => {
      isHovered = false;
      gsap.to(icon, {
        y: "0",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(btn, {
        backgroundColor: btnColor,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  let lastFired = Date.now() - 200;

  const trigger = ScrollTrigger.create({
    start: "top top",
    onUpdate(self) {
      const now = Date.now();
      if (now - lastFired < 300 || isHovered) return;
      lastFired = now;

      if (self.direction === 1) {
        gsap.to(bottomNav, {
          opacity: 0,
          y: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(bottomNav, {
          opacity: 1,
          y: "-100%",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    },
  });

  bottomNav._scrollTrigger = trigger;
};

const bottomNavCleanup = (page = document) => {
  const bottomNav = page.querySelector(".bottom-navigation");
  if (!bottomNav) return;
  bottomNav._scrollTrigger?.kill();
  delete bottomNav._scrollTrigger;
};

export { bottomNavInit, bottomNavCleanup };
