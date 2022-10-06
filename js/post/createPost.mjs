import { API_SOCIAL_URL } from "../constants.mjs";

import { autFetch } from "../auth/autFetchToken.mjs";

const action = "/posts";
const method = "POST";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await autFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
