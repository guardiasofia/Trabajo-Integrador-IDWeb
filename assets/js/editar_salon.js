import { obtenerSalonPorId, obtenerSalones, guardarSalones } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const salon = obtenerSalonPorId(id);

  if (salon) {
    document.getElementById('nombre').value = salon.nombre;
    document.getElementById('capacidad').value = salon.capacidad;
    document.getElementById('zona').value = salon.zona;
    document.getElementById('precio').value = salon.precio;
    document.getElementById('servicios').value = salon.servicios.join(', ');
  } else {
    alert('Salón no encontrado');
    window.location.href = 'salones.html';
  }

  document.getElementById('form-editar').addEventListener('submit', function(e) {
    e.preventDefault();

    const salones = obtenerSalones();
    const index = salones.findIndex(s => s.id === id);

    if (index !== -1) {
      salones[index] = {
        id,
        nombre: document.getElementById('nombre').value,
        capacidad: parseInt(document.getElementById('capacidad').value),
        zona: document.getElementById('zona').value,
        precio: parseInt(document.getElementById('precio').value),
        servicios: document.getElementById('servicios').value.split(',').map(s => s.trim()).filter(s => s)
      };

      guardarSalones(salones);
      alert('Salón actualizado correctamente');
      window.location.href = 'salones.html';
    }
  });
});