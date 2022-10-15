const redirectPage = document.querySelector("#newUser");

export function handleSubmission() {
  redirectPage.innerHTML = "";

  redirectPage.innerHTML = `<h1 class="text-center m-5">Welcome to Contactbook</h1>
    <p class="text-center">You'll be now redirected to the login page</p>
    <p class="text-center">
    Please <a href="/">click here</a> if you're not redirected within 5 seconds
    </p>`;

  setTimeout(() => {
    window.location.assign("/");
  }, 5000);
}
