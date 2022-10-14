import { setRegisterFormListener } from "./registerHandler.mjs";
import { setLoginFormListener } from "./loginHandler.mjs";
import { setUpdateFormListener } from "./updatePostHandler.mjs";
import { setCreateFormListener } from "./createPostHandler.mjs";

import * as templates from "./templates/templatesIndex.mjs";
import * as postMethods from "./post/postIndex.mjs";

const path = window.location.pathname;

if (path === "/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
} else if (path === "/profile/myPage/") {
  setCreateFormListener();
} else if (path === "/post/edit/") {
  setUpdateFormListener();
}
