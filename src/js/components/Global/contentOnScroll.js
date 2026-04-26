import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

// ————————————————————————————————————————————————————————
// Animation registry — add new animation types here
// ————————————————————————————————————————————————————————
//
function scrambleDisplay(text) {
  gsap.registerPlugin(ScrambleTextPlugin);
  const originalText = text.textContent;
  let tl = gsap.timeline();

  // text.textContent = "•".repeat(originalText.length);
  text.textContent = "•";

  tl.to(text, {
    duration: 0.7,
    scrambleText: {
      text: originalText,
      chars: "•",
      ease: "power2.inOut",
    },
  });

  return tl;
}

// ————————————————————————————————————————————————————————
// Module state
// ————————————————————————————————————————————————————————
let animatedElements = [];

// ————————————————————————————————————————————————————————
// Init & Cleanup
// ————————————————————————————————————————————————————————

const contentOnScrollInit = (page = document) => {
  const displayText = page.querySelectorAll(
    ".au_display:not([data-disable-animation]), [data-display-animation], .xe_display:not([data-disable-animation])",
  );

  // ausora display texts scroll animation
  displayText.forEach((el) => {
    return;
    animatedElements.push(el);
    const tl = gsap.timeline({ paused: true });

    tl.add(scrambleDisplay(el));
    ScrollTrigger.create({
      trigger: el,
      start: "bottom 95%",
      end: "top 10%",
      onEnter: () => {
        tl.play();
      },
      onLeaveBack: () => {
        tl.reverse();
      },
    });
  });
};

const contentOnScrollCleanup = (page = document) => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  animatedElements.forEach((el) => {
    gsap.killTweensOf(el);
    gsap.set(el, { clearProps: "all" });
  });
  animatedElements = [];
};

export { contentOnScrollInit, contentOnScrollCleanup };
