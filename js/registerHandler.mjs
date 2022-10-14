import { register } from "./auth/registerProfile.mjs";
import { handleSubmission } from "./redirectRegister.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      //send it to the API
      try {
        register(profile);
        handleSubmission();
      } catch (error) {
        console.log(error);
      }
    });
  }
}
