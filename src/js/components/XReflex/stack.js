import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// only caption and paragraph values are pulled from Webflow, rest is kinda hardcoded.

const updateCaption = (caption, value) => {
  gsap.to(caption, {
    duration: 0.3,
    text: {
      value: value,
      rtl: true,
      type: "diff",
      ease: "linear",
    },
  });
};

const updateParagraph = (paragraph, value) => {
  const tl = gsap.timeline();

  tl.to(paragraph, { opacity: 0, duration: 0.15, ease: "power2.inOut" });
  tl.to(paragraph, { duration: 0, text: { value: value } });
  tl.to(paragraph, { opacity: 1, duration: 0.15, ease: "power2.inOut" });
};

const stackInit = (page = document) => {
  const stacks = page.querySelectorAll(".section_xr-stack-v2");

  stacks.forEach((stack) => {
    const triggers = stack.querySelectorAll(".xr-stack_trigger");
    const videos = stack.querySelectorAll(".xr-stack_slide-v2");

    if (!videos || !triggers) return;

    gsap.set([videos], { clipPath: "inset(100% 0% 0%)" });
    gsap.set(videos[0], { clipPath: "inset(0% 0% 0%)" });

    // text block that always stays, and its values get updated
    const textBlock = stack.querySelector(
      ".xr-stack_slide-content_text-wrapper",
    );
    const caption = textBlock.querySelector(".xr_caption");
    const heading = textBlock.querySelector(".xr_h2");
    const headingSpans = heading.querySelectorAll("span");
    const paragraph = textBlock.querySelector("p");
    gsap.set(headingSpans, { opacity: 0.3 });
    gsap.set(headingSpans[0], { opacity: 1 });

    // text values to update the text block above – pulled from WF
    const textContentWrapper = stack.querySelector(
      ".xr-stack_slide-content_updated-text-wrapper",
    );
    const captions = textContentWrapper.querySelectorAll(".xr_caption");
    console.log(captions);
    const paragraphs = textContentWrapper.querySelectorAll("p");
    const textContent = {
      captions: {
        0: caption.textContent,
        1: captions[0].textContent,
        2: captions[1].textContent,
      },
      paragraphs: {
        0: paragraph.textContent,
        1: paragraphs[0].textContent,
        2: paragraphs[1].textContent,
      },
    };

    triggers.forEach((trigger, index) => {
      // scrub animation for video change
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      scrubTl.fromTo(
        videos[index + 1],
        { clipPath: "inset(100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0%)", duration: 1, ease: "linear" },
      );

      // animation for caption & paragraph updates
      const st = ScrollTrigger.create({
        trigger: trigger,
        start: "top center",
        onEnter: () => {
          gsap.to(headingSpans[index], { opacity: 0.3 });
          gsap.to(headingSpans[index + 1], { opacity: 1 });
          updateCaption(caption, textContent.captions[index + 1]);
          updateParagraph(paragraph, textContent.paragraphs[index + 1]);
        },
        onLeaveBack: () => {
          gsap.to(headingSpans[index], { opacity: 1 });
          gsap.to(headingSpans[index + 1], { opacity: 0.3 });
          updateCaption(caption, textContent.captions[index]);
          updateParagraph(paragraph, textContent.paragraphs[index]);
        },
      });
    });
  });
};

const stackCleanup = (page = document) => {};

export { stackInit, stackCleanup };
