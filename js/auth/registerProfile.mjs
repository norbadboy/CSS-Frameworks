import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

export async function register(profile) {
  const regigsterURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(regigsterURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You are registered!");
  return result;
}
