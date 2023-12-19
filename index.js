const frase = "TENGO LA MEJOR NOVIA DEL MUNDO";
let salida = '';

// Obtener la longitud máxima para la pirámide
const longitudMaxima = Math.ceil(frase.length / 2);

// Construir la salida del árbol
for (let i = 0; i <= longitudMaxima; i++) {
    const espacios = ' '.repeat(longitudMaxima - i);
    const subcadena = frase.substring(0, 2 * i + 1);
    salida += espacios + subcadena + '\n';
}

// Construir las patas del árbol
salida += '|||'.padStart(15).padEnd(30) + '\n';
salida += '\\_____/'.padStart(17).padEnd(30) + '\n';
salida += ' '.repeat(30) + '\n';

const espaciosFelizNavidad = ' '.repeat(Math.floor((30 - '¡Feliz Navidad!'.length) / 2));
salida += espaciosFelizNavidad + '¡Feliz Navidad!';

// Mostrar la salida en el elemento <pre>
document.getElementById('arbolOutput').textContent = salida;
