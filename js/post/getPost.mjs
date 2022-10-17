import { API_SOCIAL_URL } from "../constants.mjs";

import { autFetch } from "../auth/autFetchToken.mjs";

const action = "/posts";

// get posts function
export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true`;

  const response = await autFetch(updatePostURL);

  return await response.json();
}

// get post function
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post id");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true`;

  const response = await autFetch(getPostURL);

  return await response.json();
}
