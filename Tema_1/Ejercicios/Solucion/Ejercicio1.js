// Función que recibe un número y dos callbacks (uno para procesar y otro para formatear)
function transformarNumero(numero, operacion, formatear) {
    // Se aplica el primer callback para procesar el número
    const resultado = operacion(numero);
    // Se aplica el segundo callback para formatear el resultado
    const mensaje = formatear(resultado);
    console.log(mensaje);
}

// Callback para duplicar el número
const duplicar = (num) => num * 2;

// Callback para formatear el mensaje
const formatearMensaje = (resultado) => `El resultado es: ${resultado}`;

// Ejecutar la función con un número de ejemplo
transformarNumero(5, duplicar, formatearMensaje);
// Resultado esperado en consola: "El resultado es: 10"
