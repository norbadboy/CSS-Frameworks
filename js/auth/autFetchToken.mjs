import { load } from "../storage/storageIndex.mjs";

export function headers() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function autFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
