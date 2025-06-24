import { logout } from './auth-middleware.js';

document.addEventListener('DOMContentLoaded', async () => {
  const token = sessionStorage.getItem('authToken');
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  if (!token || !currentUser) {
    window.location.href = '../../pages/auth/login.html'; 
    return;
  }
  if (window.location.pathname.includes('/admin/') && !validUser) {
      history.replaceState(null, '', '/index.html');
  }
  try {
    document.getElementById('userName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
  } catch (error) {
    console.error('Error al cargar datos:', error);

  }

  document.getElementById('logoutBtn')?.addEventListener('click', logout);
});