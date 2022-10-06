import { API_SOCIAL_URL } from "../constants.mjs";

import { autFetch } from "../auth/autFetchToken.mjs";

const action = "/posts";
const method = "PUT";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Post id is required");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await autFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
