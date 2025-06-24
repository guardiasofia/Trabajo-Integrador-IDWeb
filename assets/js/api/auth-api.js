const API_URL = 'https://dummyjson.com';

export async function loginUser(username, password) {
  if (!username || !password) {
    throw new Error('Usuario y contraseña son requeridos');
  }

  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      username: username.trim(),
      password: password.trim()
    })
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.message === 'Invalid credentials') {
      throw new Error('Usuario o contraseña incorrectos');
    }
    throw new Error(data.message || 'Error al iniciar sesión');
  }

  if (!data.accessToken) {
    console.warn('Respuesta del servidor sin token:', data);
    throw new Error('El servidor no devolvió un token válido');
  }

  const userResponse = await fetch(`${API_URL}/users/${data.id}`);
  const userInfo = await userResponse.json();

  if (userInfo.role !== 'admin') {
    throw new Error('Acceso restringido solo para administradores');
  }

  return {
    id: data.id,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    token: data.accessToken,
    role: userInfo.role
  };
}
