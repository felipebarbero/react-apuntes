// Atajo para no repetir { language, value } y para escribir el código como líneas sueltas.
// La sangría con la que el ejemplo se alinea en el archivo no se muestra:
// la página la quita y deja solo la sangría de dentro del ejemplo.
export function code(language, lines) {
  return { language, value: lines.join('\n') };
}
