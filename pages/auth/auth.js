import { loginUser } from '../../assets/js/api/auth-api.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const userData = await loginUser(username, password);
    
    sessionStorage.setItem('authToken', userData.token);
    sessionStorage.setItem('currentUser', JSON.stringify({
      id: userData.id,
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role
    }));
    
    window.location.href = '../admin/dashboard.html';
    
  } catch (error) {
    const errorElement = document.getElementById('loginError');
    errorElement.textContent = error.message;
    errorElement.style.display = 'block';
    
    console.error('Error en login:', error);
  }
});