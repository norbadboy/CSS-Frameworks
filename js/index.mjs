import { setRegisterFormListener } from "./registerHandler.mjs";
import { setLoginFormListener } from "./loginHandler.mjs";
import { setCreateFormListener } from "./createPostHandler.mjs";

const path = window.location.pathname;

if (path === "/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
} else if (path === "/profile/myPage/") {
  setCreateFormListener();
}
