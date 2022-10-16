import { renderPostTemplates } from "../templates/postTemplate.mjs";
import { getPosts } from "./getPost.mjs";
import { load } from "../storage/storageIndex.mjs";

export async function renderPosts(onlyUserPosts = false, titleSearch = "") {
  const posts = await getPosts();

  // Show only 10 posts to not overload the page
  // TODO: Change to 50 or 100 before submission
  let postsToShow = posts.slice(0, 10);
  const profile = load("profile");
  const userName = profile.name;

  if (onlyUserPosts) {
    postsToShow = posts.filter((post) => post.author.name === userName);
  }

  if (titleSearch) {
    postsToShow = postsToShow.filter((post) =>
      post.title.toLowerCase().includes(titleSearch.toLowerCase())
    );
  }

  const container = document.querySelector("#feeds");
  renderPostTemplates(postsToShow, container);
}
