export default class API {
  page = 1;

  async getData(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    return await res.json();
  }
}
export const n = 5;
