import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../storage/storageIndex.mjs";
import { load } from "../storage/storageIndex.mjs";

const action = "/auth/login";
const method = "POST";
const token = load("token");

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...userProfile } = await response.json();

  if (accessToken === "undefined" || accessToken === null) {
    alert("wrong email or password");
  } else {
    storage.save("token", accessToken);
    storage.save("profile", userProfile);
    window.location.href = "/post/feeds/";
  }
  // login(profile);
}
