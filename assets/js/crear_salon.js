import { obtenerSalones, guardarSalones } from './storage.js';
import { checkAuth } from './api/auth-middleware.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!checkAuth()) return;

  document.getElementById('form-crear').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const capacidad = parseInt(document.getElementById('capacidad').value);
    const zona = document.getElementById('zona').value;
    const precio = parseInt(document.getElementById('precio').value);
    const serviciosTexto = document.getElementById('servicios').value;
    const servicios = serviciosTexto.split(',').map(s => s.trim()).filter(s => s);

    const salones = obtenerSalones();
    const nuevoSalon = {
      id: Date.now(),
      nombre,
      capacidad,
      zona,
      servicios,
      precio
    };

    salones.push(nuevoSalon);
    guardarSalones(salones);

    alert('Salón creado correctamente');
    window.location.href = 'salones.html';
  });
});