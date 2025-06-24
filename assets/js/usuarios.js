import { checkAuth, logout } from './api/auth-middleware.js';
import { getUsers } from './api/usuarios-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  if (!checkAuth()) return;
  
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  try {
    const users = await getUsers();
    const tableBody = document.getElementById('usersTableBody');
    
    tableBody.innerHTML = users.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error:', error);
    alert('Error al cargar usuarios');
  }
});