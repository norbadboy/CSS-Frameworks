import { API_SOCIAL_URL } from "../constants.mjs";

import { autFetch } from "../auth/autFetchToken.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires post id");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await autFetch(updatePostURL, {
    method,
  });

  return await response.json();
}
