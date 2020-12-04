const BASE_URL = 'https://5f95a0992de5f50016ca20f5.mockapi.io/api';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const { items } = await response.json();
  return items;
}

export function getPosts(page) {
  return get(`/posts/?p=${page}&l=10`);
}

export async function getPost(id = 0) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  return response.json();
}
