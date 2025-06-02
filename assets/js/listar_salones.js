import { obtenerSalones, eliminarSalon } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  mostrarSalones();
});

function mostrarSalones() {
  const salones = obtenerSalones();
  const tablaBody = document.getElementById('tabla-salones-body');
  
  tablaBody.innerHTML = '';

  if (!salones || salones.length === 0) {
    tablaBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center">No hay salones registrados</td>
      </tr>
    `;
    return;
  }

  tablaBody.innerHTML = salones.map(salon => `
    <tr>
      <td>${salon.nombre}</td>
      <td>${salon.capacidad}</td>
      <td>${salon.zona}</td>
      <td>$${salon.precio.toLocaleString()}</td>
      <td>${Array.isArray(salon.servicios) ? salon.servicios.join(', ') : salon.servicios}</td>
      <td>
        <a href="editar-salon.html?id=${salon.id}" class="btn btn-sm btn-warning">Editar</a>
        <button class="btn btn-sm btn-danger" data-id="${salon.id}">Eliminar</button>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.btn-danger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      if (confirm('¿Está seguro que desea eliminar este salón?')) {
        eliminarSalon(id);
        mostrarSalones(); 
      }
    });
  });
}