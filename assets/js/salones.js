import { obtenerSalones, guardarSalones } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.getElementById('tabla-salones');
  const salones = obtenerSalones();

  salones.forEach(salon => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${salon.nombre}</td>
      <td>${salon.capacidad}</td>
      <td>${salon.zona}</td>
      <td>$${salon.precio}</td>
      <td>
        <a href="editar-salon.html?id=${salon.id}" class="btn btn-sm btn-warning">Editar</a>
        <button class="btn btn-sm btn-danger" onclick="eliminarSalon(${salon.id})">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
});
