import { setRegisterFormListener } from "./registerHandler.mjs";
import { setLoginFormListener } from "./loginHandler.mjs";
import { setUpdateFormListener } from "./updatePostHandler.mjs";
import { setCreateFormListener } from "./createPostHandler.mjs";

import * as templates from "./templates/templatesIndex.mjs";
import * as postMethods from "./post/postIndex.mjs";

const path = window.location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
} else if (path === "/post/create/") {
  setCreateFormListener();
} else if (path === "/post/edit/") {
  setUpdateFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate();
