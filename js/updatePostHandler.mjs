import { getPost, updatePost } from "./post/postIndex.mjs";

// update post form listener
export async function setUpdateFormListener() {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      //send it to the API
      const updatedPost = await updatePost(post);
      console.log(updatedPost);
    });
  }
}
