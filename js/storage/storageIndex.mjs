// save item in local storage
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// get item from local storage
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}
// remove item from local storage
export function remove(key) {
  localStorage.removeItem(key);
}
