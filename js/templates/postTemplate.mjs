import { load } from "../storage/storageIndex.mjs";
import { removePost } from "../post/deletePost.mjs";
import { updatePost } from "../post/updatePost.mjs";
import { getPost } from "../post/getPost.mjs";
import { autFetch } from "../auth/autFetchToken.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

export function postTemplateB(postData) {
  const profile = load("profile");
  const userName = profile.name;

  // Create the post container
  const post = document.createElement("div");
  post.classList.add("post", "card", "mb-3");
  const postTitle = document.createElement("h4");
  postTitle.classList.add("card-header");
  postTitle.innerText = postData.title;
  post.appendChild(postTitle);
  const postBody = document.createElement("div");
  postBody.classList.add("card-body");
  postBody.innerText = postData.body;
  post.appendChild(postBody);

  // media container
  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    img.classList.add("postPic");
    post.append(img);
  }

  // view post button
  const userPostUrl = "/post/feeds/userPost.html?id=" + postData.id + "?_author=true";

  const viewPostButton = document.createElement("button");
  viewPostButton.classList.add("btn", "btn-primary", "btn-sm", "mr-2");
  viewPostButton.innerText = "View Post";
  viewPostButton.addEventListener("click", () => {
    window.location.href = userPostUrl;
  });
  postBody.appendChild(viewPostButton);

  // user info
  if (postData.author && postData.author.name) {
    const author = document.createElement("p");
    author.classList.add("postAuthor");
    author.innerText = "by " + postData.author.name;
    post.append(author);

    // TODO:
    // bruk updatePost funksjonen for å oppdatere posten
    // sjekk om det fungerer på network tab i devtools
    // hvis det fungerer, så kan vi legge til en reload av siden

    //If the user is the author of the post, show edit and delete buttons
    //Edit button
    if (postData.author.name === userName) {
      const editButton = document.createElement("editButton");
      editButton.classList.add(
        "editButton",
        "rounded",
        "btn",
        "text-light",
        "bg-dark",
        "m-1",
        "py-1",
        "px-2"
      );
      editButton.setAttribute("id", "editButton");
      editButton.innerText = "Edit";
      post.append(editButton);

      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];

      editButton.onclick = function () {
        modal.style.display = "block";
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        const form = document.getElementById("updatePostForm");
        if (form) {
          const button = form.querySelector("#editPostButton");
          button.disabled = true;
          const post = getPost(id);
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
            updatePost(post);
          });
        }
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      // const editPostButton = document.getElementById("editPostButton");
      // editPostButton.addEventListener("click", async () => {
      //   const title = document.getElementById("editTitle").value;
      //   const body = document.getElementById("editBody").value;
      //   const media = document.getElementById("editMedia").value;
      //   const post = {
      //     title: title,
      //     body: body,
      //     media: media,
      //   };
      //   const response = await updatePost(postData.id, post);
      //   console.log(response);
      // });

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton", "rounded", "btn", "btn-danger");
      deleteButton.innerText = "Delete";
      post.append(deleteButton);

      deleteButton.onclick = async () => {
        await removePost(postData.id);
        window.location.reload();
      };
    }
  }

  return post;
}

export function renderPostTemplates(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(postTemplateB));
}
