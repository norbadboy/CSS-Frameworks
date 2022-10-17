import { getPost, updatePost } from "./post/postIndex.mjs";

// update function
export async function setUpdateFormListener() {
  const form = document.getElementById("updatePostForm");

  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  // get post by id
  if (form) {
    const button = form.querySelector("#editPostButton");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
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
