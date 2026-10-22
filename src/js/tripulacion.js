import { tripulacion } from "./datos.js";
import { capitalizarNombres, formatearAstronauta } from "./helpers.js";
import { mostrarSalida, avisar } from "./dom.js";

// 2. Alta de un astronauta desde el formulario
export function agregarAstronauta() {
  const nombre = document.getElementById("nombre").value.trim();
  const rol = document.getElementById("rol").value.trim();
  const textoExperiencia = document.getElementById("experiencia").value;
  const experiencia = Number(textoExperiencia);

  if (!nombre || !rol || textoExperiencia === "" || !Number.isFinite(experiencia) || experiencia < 0) {
    avisar("Revisa los datos e inténtalo de nuevo.", true);
    return;
  }

  tripulacion.push({ nombre, rol, experiencia });
  avisar(`${nombre} añadido.`);

  document.getElementById("formAstronauta").reset();
  document.getElementById("nombre").focus();
}

// 3. Listado: helper (map) + forEach con destructuring
export function mostrarTripulacion() {
  if (tripulacion.length === 0) {
    mostrarSalida("No hay registros.");
    return;
  }

  const lineas = [];
  capitalizarNombres(tripulacion).forEach(({ nombre, rol, experiencia }, i) => {
    lineas.push(`${i + 1}. ${formatearAstronauta({ nombre, rol, experiencia })}`);
  });

  mostrarSalida(lineas.join("\n"));
}

// 4. Filtrar por rol (filter)
export function filtrarPorRol(rol) {
  const buscado = rol.trim().toLowerCase();
  const coincidencias = tripulacion.filter((a) => a.rol.toLowerCase() === buscado);

  mostrarSalida(
    coincidencias.length
      ? coincidencias.map(formatearAstronauta).join("\n")
      : `Sin resultados para «${rol}».`
  );
}

// 5. Experiencia media (reduce)
export function calcularExperienciaMedia() {
  if (tripulacion.length === 0) {
    mostrarSalida("No hay datos para calcular la media.");
    return;
  }

  const total = tripulacion.reduce((acumulado, { experiencia }) => acumulado + experiencia, 0);
  const media = total / tripulacion.length;

  mostrarSalida(
    `Media: ${media.toLocaleString("es-ES", { maximumFractionDigits: 2 })} años ` +
    `(${tripulacion.length} personas, ${total} años en total).`
  );
}

// 6. Alta múltiple (rest params, un solo push)
export function agregarMultiples(...astronautas) {
  if (astronautas.length === 0) {
    avisar("No se ha recibido ningún astronauta.", true);
    return tripulacion.length;
  }

  tripulacion.push(...astronautas);
  avisar(`${astronautas.length} astronautas añadidos. Tripulación: ${tripulacion.length}.`);
  return tripulacion.length;
}
