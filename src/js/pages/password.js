import { lenisMain } from "../global/globalInit";

const passwordInit = (page = document) => {
  const newFormWrapper = page.querySelector(".xe-password_form-wrapper");
  const component = document.querySelector(".utility-page_component");
  const form = component.querySelector(".xe-password_form");

  newFormWrapper.appendChild(form);
  component.remove();

  lenisMain.scrollTo(0, { immediate: true });
};

export { passwordInit };
