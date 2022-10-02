// import { validateEmail, validationForm, log_console } from "./validation.mjs";
// const apiUrl = "https://nf-api.onrender.com/api/v1";

// async function login() {
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password").value;
//   const response = await fetch(`${apiUrl}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   if (data.status === "success") {
//     localStorage.setItem("token", data.token);
//     window.location.href = "/profile.html";
//   } else {
//     alert(data.message);
//   }
// }

import { login } from "./auth/loginProfile.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      //send it to the API
      login(profile);
    });
  }
}
