export const capitalizarNombres = (array) =>
  array.map((astronauta) => ({ ...astronauta, nombre: astronauta.nombre.toUpperCase() }));

export const formatearAstronauta = ({ nombre, rol, experiencia }) =>
  `${nombre} — ${rol}, ${experiencia} ${experiencia === 1 ? "año" : "años"}`;
