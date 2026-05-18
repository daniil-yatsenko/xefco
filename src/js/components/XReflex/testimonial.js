import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonialInit = (page = document) => {
  const testimonials = page.querySelectorAll(".xr-testimonial_sticky-parent");
  testimonials.forEach((testimonial) => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const bodyText = testimonial.querySelector(".au_text-large");
    if (!bodyText) return;

    const testimonialBody = testimonial.querySelector(
      ".xr-testimonial_testimonial-body",
    );
    const height = testimonialBody.offsetHeight;
    const offset = (window.innerHeight - height) / 2;
    gsap.set(testimonialBody, { top: offset });

    const split = new SplitText(bodyText, { type: "words, chars" });

    const st = ScrollTrigger.create({
      trigger: testimonial,
      start: "top 10%",
      end: "bottom 90%",
      scrub: true,
      animation: gsap.to(split.chars, {
        color: "#000",
        stagger: { each: 1 / split.chars.length },
        ease: "none",
      }),
    });

    testimonial._testimonialSplit = split;
    testimonial._testimonialST = st;
  });
};

const testimonialCleanUp = (page = document) => {
  const testimonials = page.querySelectorAll(".xr-testimonial_sticky-parent");
  testimonials.forEach((testimonial) => {
    if (testimonial._testimonialST) {
      testimonial._testimonialST.kill();
      delete testimonial._testimonialST;
    }
    if (testimonial._testimonialSplit) {
      testimonial._testimonialSplit.revert();
      delete testimonial._testimonialSplit;
    }
  });
};

export { testimonialInit, testimonialCleanUp };
