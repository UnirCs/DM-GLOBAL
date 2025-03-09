// Estado global: total de asientos disponibles para la función de cine.
let asientosDisponibles = 10;
// Precio unitario de cada entrada.
const PRECIO_ENTRADA = 8;
// Historial de compras realizadas.
let historialCompras = [];

/**
 * Función que procesa la compra de entradas utilizando Promesas.
 * @param {number} cantidad - Número de entradas a comprar.
 * @returns {Promise} - Se resuelve con el objeto de compra si la operación es exitosa, o se rechaza con un mensaje de error.
 */
function comprarEntradas(cantidad) {
    return new Promise((resolve, reject) => {
        if (cantidad <= asientosDisponibles) {
            asientosDisponibles -= cantidad;
            let total = cantidad * PRECIO_ENTRADA;
            let descuento = 0;

            // Aplicar descuento del 10% si se compran más de 3 entradas.
            if (cantidad > 3) {
                descuento = total * 0.1;
                total -= descuento;
            }

            const compra = {
                cantidad: cantidad,
                total: total,
                descuento: descuento,
                asientosRestantes: asientosDisponibles,
                mensaje: `Compra exitosa: ${cantidad} entradas adquiridas. Asientos restantes: ${asientosDisponibles}`
            };

            // Registrar la compra en el historial.
            historialCompras.push(compra);
            resolve(compra);
        } else {
            reject("Error: No hay suficientes asientos disponibles para completar la compra.");
        }
    });
}

/**
 * Función que simula el envío de un correo de confirmación utilizando Promesas.
 * @param {object} compra - Objeto con el resumen de la compra.
 * @returns {Promise} - Se resuelve cuando el correo ha sido enviado.
 */
function enviarEmailConfirmacion(compra) {
    return new Promise((resolve, reject) => {
        console.log(`Enviando correo de confirmación por la compra de ${compra.cantidad} entradas...`);
        // Simulación de operación asíncrona para enviar el email.
        setTimeout(() => {
            console.log("Correo de confirmación enviado exitosamente.");
            resolve("Email enviado");
        }, 1000);
    });
}

/**
 * Función que procesa la confirmación de la compra.
 * Muestra el detalle de la compra y encadena el envío del correo.
 * @param {object} compra - Objeto con el resumen de la compra.
 * @returns {Promise} - Retorna la promesa del envío de correo.
 */
function procesarConfirmacion(compra) {
    console.log(compra.mensaje);
    console.log(`Total a pagar: $${compra.total}`);
    if (compra.descuento > 0) {
        console.log(`Descuento aplicado: $${compra.descuento}`);
    }
    return enviarEmailConfirmacion(compra);
}

// Ejemplos de uso de las Promesas:

// Caso 1: Comprar 2 entradas.
comprarEntradas(2)
    .then(compra => procesarConfirmacion(compra))
    .then(mensaje => console.log(mensaje)) //Revisa el final del video para entender este then
    .catch(error => console.log(error));

// Caso 2: Comprar 4 entradas.
comprarEntradas(4)
    .then(compra => procesarConfirmacion(compra))
    .catch(error => console.log(error));

// Caso 3: Intentar comprar 5 entradas (debería fallar por falta de asientos).
comprarEntradas(5)
    .then(compra => procesarConfirmacion(compra))
    .catch(error => console.log(error));
