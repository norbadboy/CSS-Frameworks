import { load } from "../storage/storageIndex.mjs";
import { removePost } from "../post/deletePost.mjs";

export function postTemplateB(postData) {
  const profile = load("profile");
  const userName = profile.name;

  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;

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

    if (postData.author.name === userName) {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerText = "Delete";
      post.append(deleteButton);

      deleteButton.onclick = async () => {
        await removePost(postData.id);
        window.location.reload();
      };

      // TODO: Lag en edit button som åpner en modal med en form
      // bruk updatePost funksjonen for å oppdatere posten
      // sjekk om det fungerer på network tab i devtools
      // hvis det fungerer, så kan vi legge til en reload av siden
    }
  }

  return post;
}

export function renderPostTemplates(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(postTemplateB));
}
