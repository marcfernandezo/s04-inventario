// Acceso al DOM compartido. Los módulos se ejecutan tras parsear el HTML.
export const salida = document.getElementById("salida");
export const mensaje = document.getElementById("mensaje");

export function mostrarSalida(texto) {
  salida.textContent = texto;
}

export function avisar(texto, esError = false) {
  mensaje.textContent = texto;
  mensaje.classList.toggle("error", esError);
}
