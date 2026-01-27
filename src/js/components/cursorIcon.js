import gsap from "gsap";

const cursorIconInit = (page = document) => {
  const frames = page.querySelectorAll(
    ".xe-brands_brand, [data-cursor-icon-frame]",
  );

  frames.forEach((frame) => {
    gsap.set(frame, { overflow: "hidden" });

    const cursor = frame.querySelector(
      ".xe-brands_cursor, [data-cursor-icon-cursor]",
    );
    const logo = frame.querySelector(
      ".xe-brands_logo-wrapper, [data-cursor-icon-logo]",
    );

    if (!cursor) return;

    // Store cleanup data on the cursor element
    const abortController = new AbortController();
    cursor._cursorIconAbortController = abortController;

    // Initially hide cursor and disable pointer events
    gsap.set(cursor, {
      opacity: 0,
      display: "none",
      left: "0%",
      top: "0%",
      pointerEvents: "none",
    });

    // Mouse enter handler
    const handleMouseEnter = (e) => {
      //   frame.style.cursor = "none"; // Hide system cursor
      const rect = frame.getBoundingClientRect();
      const cursorRect = cursor.getBoundingClientRect();

      // Center cursor on mouse pointer - instant positioning on first entry
      const x = e.clientX - rect.left - cursorRect.width / 2;
      const y = e.clientY - rect.top - cursorRect.height / 2;

      gsap.set(cursor, { display: "block", x: x, y: y });
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      gsap.to(logo, { scale: 1.02, duration: 0.2 });
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = frame.getBoundingClientRect();
      const cursorRect = cursor.getBoundingClientRect();

      // Center cursor on mouse pointer
      const x = e.clientX - rect.left - cursorRect.width / 2;
      const y = e.clientY - rect.top - cursorRect.height / 2;

      // Smooth lag effect using GSAP
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      frame.style.cursor = ""; // Restore system cursor
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to(logo, { scale: 1, duration: 0.2 });
          gsap.set(cursor, { display: "none" });
        },
      });
    };

    // Attach listeners with AbortController for easy cleanup
    const options = { signal: abortController.signal };
    frame.addEventListener("mouseenter", handleMouseEnter, options);
    frame.addEventListener("mousemove", handleMouseMove, options);
    frame.addEventListener("mouseleave", handleMouseLeave, options);
  });
};

const cursorIconCleanup = (page = document) => {
  const frames = page.querySelectorAll(
    ".xe-brands_brand, [data-cursor-icon-frame]",
  );

  frames.forEach((frame) => {
    const cursor = frame.querySelector(
      ".xe-brands_cursor, [data-cursor-icon-cursor]",
    );

    if (!cursor) return;

    // Restore system cursor on frame
    frame.style.cursor = "";

    // Abort all event listeners
    if (cursor._cursorIconAbortController) {
      cursor._cursorIconAbortController.abort();
      delete cursor._cursorIconAbortController;
    }

    // Kill all GSAP animations on this cursor
    gsap.killTweensOf(cursor);

    // Reset cursor state
    gsap.set(cursor, {
      opacity: 0,
      display: "none",
      x: 0,
      y: 0,
    });
  });
};

export { cursorIconInit, cursorIconCleanup };
