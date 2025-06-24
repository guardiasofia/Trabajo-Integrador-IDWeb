const API_URL = 'https://dummyjson.com';

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('No se pudieron obtener los usuarios');
  }
  const data = await response.json();
  return data.users;
}