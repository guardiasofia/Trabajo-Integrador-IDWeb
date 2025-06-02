import { salonesIniciales } from './data.js';

if (!localStorage.getItem('salones')) {
  localStorage.setItem('salones', JSON.stringify(salonesIniciales));
}

export function obtenerSalones() {
  return JSON.parse(localStorage.getItem('salones')) || [];
}

export function guardarSalones(salones) {
  localStorage.setItem('salones', JSON.stringify(salones));
}

export function obtenerSalonPorId(id) {
  const salones = obtenerSalones();
  return salones.find(salon => salon.id === id);
}

export function eliminarSalon(id) {
  const salones = obtenerSalones().filter(salon => salon.id !== id);
  guardarSalones(salones);
}