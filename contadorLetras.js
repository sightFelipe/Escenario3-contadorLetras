/**
 * Cuenta el número de apariciones de cada carácter en una frase o palabra.
 * @param {string} frase - La frase o palabra a analizar.
 * @returns {object} Un objeto donde las llaves son los caracteres y los valores son el número de veces que aparece el carácter en la frase o palabra.
 */
function contador_letras(frase)  {
    const contadorLetras = {} //contador para almacenar el número de apariciones de cada carácter.;
    for (let i = 0; i < frase.length; i++) // Se recorre cada letra de la cadena "frase"
    {
      const letra = frase[i]; // toma la posicion de la letra actual
      if (contadorLetras[letra]) // si la letra se repite en el objeto contadorLetras el mismo se incrementa en 1
      {
        contadorLetras[letra]++;
      } else { // si la letra no está en el objeto contadorLetras, agrega una nueva propiedad con un conteo de 1
        contadorLetras[letra] = 1;
      }
    }
    return contadorLetras; // Devuelve el objeto con el conteo de cada letra
}
  
// Ejemplos de uso
console.log(contador_letras("Mississippi")); 
console.log(contador_letras("Python! is better")); 