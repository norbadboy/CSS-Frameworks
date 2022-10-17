import { autFetch } from "../auth/autFetchToken.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const userPost = document.querySelector("#userPost");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("id");
console.log(postId);

const userPostUrl = API_SOCIAL_URL + "/posts/" + postId;

// view user post
async function viewPost() {
  try {
    const response = await autFetch(userPostUrl);
    const postResult = await response.json();
    console.log(postResult);

    const postTitle = document.querySelector("#postTitle");
    postTitle.innerText = postResult.title;
    const postBody = document.querySelector("#postBody");
    postBody.innerText = postResult.body;
    const postPic = document.querySelector("#postPic");
    postPic.src = postResult.media;
    const postAuthor = document.querySelector("#postAuthor");
    postAuthor.innerText = "by " + postResult.author.name;
  } catch (error) {
    console.log(error);
  }
}
viewPost();
