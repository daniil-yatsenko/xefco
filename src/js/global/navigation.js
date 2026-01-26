import { gsap } from "gsap";
// import { animateButton } from "../components/buttons";

const navbar = {
  navbarEl: document.querySelector(".navbar"),
  menuBtn: document.querySelector('[aria-controls="navbar"]'),
  menuBtnIcons: document.querySelectorAll(".navbar_header_button-icon"),
  menuIcon: document.querySelector(".navbar_header_icon"),
  menuBody: document.querySelector(".navbar_body-wrapper"),
  menuLinks: document.querySelectorAll(".navbar_body_link"),
  menuCards: document.querySelectorAll(".navbar_body_brand-card-wrapper"),
  isMenuOpen: false,

  async openMenu(immediate = false) {
    const tl = gsap.timeline();
    tl.set(this.menuBody, { height: "0rem", overflow: "hidden", opacity: 0 });
    tl.set(this.menuBody, { display: "block" });
    tl.set(this.menuLinks, { opacity: 0, y: "-0.4rem" });
    tl.set(this.menuCards, { opacity: 0, scale: 0.95 });
    tl.to(this.menuBtnIcons, { y: "-1.125rem", duration: 0.3 });
    tl.to(this.menuIcon, { rotate: 180, ease: "linear", duration: 0.4 }, "<");
    tl.to(
      this.menuBody,
      {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "<",
    );
    tl.to(this.menuLinks, {
      opacity: 1,
      y: "",
      stagger: 0.05,
      duration: 0.2,
      delay: -0.15,
    });
    tl.to(
      this.menuCards,
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      },
      "<",
    );

    this.isMenuOpen = true;
    this.menuBtn.setAttribute("aria-expanded", true);
    this.menuBtn.setAttribute("aria-label", "Close menu");
    return tl;
  },
  async closeMenu(immediate = false) {
    const tl = gsap.timeline();
    tl.to(this.menuBody, {
      height: "0rem",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    tl.to(this.menuIcon, { rotate: 0, ease: "linear", duration: 0.4 }, "<");
    tl.to(this.menuBtnIcons, { y: "", duration: 0.3 }, "<");
    tl.set(this.menuBody, { height: "auto" });
    tl.set(this.menuBody, { display: "none" });

    this.isMenuOpen = false;
    this.menuBtn.setAttribute("aria-expanded", false);
    this.menuBtn.setAttribute("aria-label", "Open menu");
    return tl;
  },
  async handleMenuClick() {
    this.menuBtn.addEventListener("click", async () => {
      if (this.isMenuOpen) {
        await this.closeMenu();
      } else {
        await this.openMenu();
      }
    });
  },
  cardsOnHover() {
    this.menuCards.forEach((card) => {
      const image = card.querySelector("img");
      const scale = gsap.getProperty(image, "scale");
      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: scale + 0.05, duration: 0.25 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: scale, duration: 0.2 });
      });
    });
  },
  init() {
    let isInitiated = this.navbarEl.getAttribute("data-navbar-is-initiated");

    if (isInitiated == "false") {
      this.handleMenuClick();
      this.cardsOnHover();
      this.navbarEl.setAttribute("data-navbar-is-initiated", true);
      isInitiated = "true";
    }
  },
};

export { navbar };
