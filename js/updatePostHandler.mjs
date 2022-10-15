import { getPost, updatePost } from "./post/postIndex.mjs";

export async function setUpdateFormListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("editButton");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      //send it to the API
      updatePost(post);
    });
  }
}
