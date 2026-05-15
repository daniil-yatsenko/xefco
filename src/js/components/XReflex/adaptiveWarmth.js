import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const adaptiveWarmthInit = (page = document) => {
  const section = page.querySelector("[data-animation-adaptive-warmth]");
  if (!section) return;

  const textCopy = {
    caption1: "XReflex Standard",
    caption2: "XReflex Perform",
    caption3: "XReflex Extreme",
    num1: "001",
    num2: "002",
    num3: "003",
  };

  const track = section.querySelector("[data-animation-track]");
  const visual = section.querySelector("[data-animation-visual]");
  const indicator = section.querySelector("[data-animation-indicator]");
  const gradient1 = section.querySelector("[data-animation-gradient-1]");
  const gradient1state2 = section.querySelector(
    "[data-animation-gradient-1-2]",
  );
  const gradient1state3 = section.querySelector(
    "[data-animation-gradient-1-3]",
  );
  const gradient2 = section.querySelector("[data-animation-gradient-2]");
  // no state 2, only state 3 in design
  const gradient2state3 = section.querySelector(
    "[data-animation-gradient-2-3]",
  );
  const caption = section.querySelector("[data-animation-caption]");
  const num = section.querySelector("[data-animation-num]");
  const image1 = section.querySelector("[data-animation-image-1]");
  const image2 = section.querySelector("[data-animation-image-2]");
  const image3 = section.querySelector("[data-animation-image-3]");
  const percentageValue = section.querySelector(
    "[data-animation-percentage-value]",
  );

  if (!track) return;
  if (!visual) return;
  if (!indicator) return;
  if (!gradient1) return;
  if (!gradient2) return;
  if (!gradient1state2) return;
  if (!gradient1state3) return;
  if (!gradient2state3) return;

  // getting gradients from hidden elements on the page
  const gradient1state2bg = getComputedStyle(gradient1state2).backgroundImage;
  const gradient1state3bg = getComputedStyle(gradient1state3).backgroundImage;
  const gradient2state3bg = getComputedStyle(gradient2state3).backgroundImage;

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  const scrubTl = gsap.timeline({
    scrollTrigger: {
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    duration: 100, // used as scrub percentage
  });

  scrubTl.to(
    gradient1,
    {
      backgroundImage: gradient1state2bg,
      duration: 50,
    },
    0,
  );

  scrubTl.to(
    gradient1,
    {
      backgroundImage: gradient1state3bg,
      duration: 50,
    },
    50,
  );

  scrubTl.to(
    gradient2,
    {
      left: "50%",
      backgroundImage: gradient2state3bg,
      duration: 50,
    },
    50,
  );

  scrubTl.to(
    indicator,
    {
      top: "25%",
      ease: "linear",
      duration: 90,
    },
    5,
  );

  const update1Tl = gsap.timeline({ paused: true });
  const update2Tl = gsap.timeline({ paused: true });
  gsap.set(caption, { text: textCopy.caption1 });

  update1Tl.to(caption, {
    duration: caption.textContent.length * 0.02,
    text: {
      value: textCopy.caption2,
      rtl: true,
      type: "diff",
      ease: "linear",
    },
  });
  update1Tl.to(
    num,
    {
      duration: caption.textContent.length * 0.02,
      text: {
        value: textCopy.num2,
        rtl: true,
        type: "diff",
        ease: "linear",
      },
    },
    "<",
  );
  update1Tl.to(
    image1,
    {
      duration: 0.2,
      opacity: 0,
      ease: "power2.inOut",
    },
    "<",
  );

  update2Tl.to(caption, {
    duration: caption.textContent.length * 0.02,
    text: {
      value: textCopy.caption3,
      rtl: true,
      type: "diff",
      ease: "linear",
    },
  });
  update2Tl.to(
    num,
    {
      duration: caption.textContent.length * 0.02,
      text: {
        value: textCopy.num3,
        rtl: true,
        type: "diff",
        ease: "linear",
      },
    },
    "<",
  );
  update2Tl.to(
    image2,
    {
      duration: 0.2,
      opacity: 0,
      ease: "power2.inOut",
    },
    "<",
  );

  const updateTrigger1 = ScrollTrigger.create({
    trigger: track,
    start: "50% center",
    onEnter: () => {
      update1Tl.restart();
    },
    onLeaveBack: () => {
      update1Tl.reverse();
    },
  });

  const updateTrigger2 = ScrollTrigger.create({
    trigger: track,
    start: "75% center",
    onEnter: () => {
      update2Tl.restart();
    },
    onLeaveBack: () => {
      update2Tl.reverse();
    },
  });

  const valueObj = { value: 15 };

  gsap.to(valueObj, {
    value: 50,
    ease: "linear",
    scrollTrigger: {
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    onUpdate: () => {
      percentageValue.textContent = Math.round(valueObj.value);
    },
  });
};

const adaptiveWarmthCleanup = (page = document) => {};

export { adaptiveWarmthInit, adaptiveWarmthCleanup };
