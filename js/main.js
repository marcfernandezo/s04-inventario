import { tripulacion } from "./datos.js";
import {
  agregarAstronauta,
  agregarMultiples,
  calcularExperienciaMedia,
  filtrarPorRol,
  mostrarTripulacion
} from "./tripulacion.js";

// Formulario
document.getElementById("formAstronauta").addEventListener("submit", (e) => {
  e.preventDefault();
  agregarAstronauta();
});

// Panel de control (onclick asignado desde el módulo)
document.getElementById("btnListar").onclick = () => mostrarTripulacion();
document.getElementById("btnFiltrar").onclick = () => filtrarPorRol("Piloto");
document.getElementById("btnMedia").onclick = () => calcularExperienciaMedia();

Object.assign(window, { tripulacion, agregarMultiples });
