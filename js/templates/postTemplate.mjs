import { load } from "../storage/storageIndex.mjs";
import { removePost } from "../post/deletePost.mjs";
import { updatePost } from "../post/updatePost.mjs";

export function postTemplateB(postData) {
  const profile = load("profile");
  const userName = profile.name;

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

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    img.classList.add("postPic");
    post.append(img);
  }

  if (postData.author && postData.author.name) {
    const author = document.createElement("p");
    author.classList.add("postAuthor");
    author.innerText = "by " + postData.author.name;
    post.append(author);

    // TODO: Lag en edit button som åpner en modal med en form
    // bruk updatePost funksjonen for å oppdatere posten
    // sjekk om det fungerer på network tab i devtools
    // hvis det fungerer, så kan vi legge til en reload av siden

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
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

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
