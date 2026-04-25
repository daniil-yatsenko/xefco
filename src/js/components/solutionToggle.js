import { gsap } from "gsap";

const solutionToggleInit = (page = document) => {
  const toggleEmbed = page.querySelector("#au-solution-toggle");
  const videoEmbed = page.querySelector(".au-solution_video");

  if (!toggleEmbed || !videoEmbed) return;

  const toggle = toggleEmbed.querySelector("input");
  const video = videoEmbed.querySelector("video");

  if (!toggle || !video) return;

  toggle._solutionToggleState = {
    abortController: new AbortController(),
    videoEmbed,
  };

  setTimeout(() => {
    video.pause();
  }, 10);

  gsap.set(videoEmbed, { filter: "saturate(0%) brightness(60%)" });

  const playTl = gsap.timeline({
    paused: true,
    onComplete: () => video.play(),
  });

  playTl.to(videoEmbed, {
    filter: "saturate(100%) brightness(100%)",
    ease: "power2.inOut",
  });

  const pauseTl = gsap.timeline({
    paused: true,
    onComplete: () => video.pause(),
  });

  pauseTl.to(videoEmbed, {
    filter: "saturate(0%) brightness(60%)",
    ease: "power2.inOut",
  });

  toggle.addEventListener(
    "change",
    () => {
      if (toggle.checked) {
        pauseTl.pause();
        playTl.restart();
      } else {
        playTl.pause();
        pauseTl.restart();
      }
    },
    { signal: toggle._solutionToggleState.abortController.signal },
  );
};

const solutionToggleCleanup = (page = document) => {
  const toggleEmbed = page.querySelector("#au-solution-toggle");

  if (!toggleEmbed) return;

  const toggle = toggleEmbed.querySelector("input");

  if (!toggle || !toggle._solutionToggleState) return;

  const { abortController, videoEmbed } = toggle._solutionToggleState;

  abortController.abort();
  gsap.killTweensOf(videoEmbed);
  gsap.set(videoEmbed, { clearProps: "filter" });

  delete toggle._solutionToggleState;
};

export { solutionToggleInit, solutionToggleCleanup };
