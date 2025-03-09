// Estado global: total de asientos disponibles para la función de cine.
let asientosDisponibles = 10;
// Precio de cada entrada
const PRECIO_ENTRADA = 8;
// Historial de compras realizado
let historialCompras = [];

/**
 * Función que procesa la compra de entradas.
 * @param {number} cantidad - Número de entradas a comprar.
 * @param {function} callback - Función que se ejecuta si la compra es exitosa.
 */
function comprarEntradas(cantidad, callback) {
    // Verificar si hay suficientes asientos disponibles
    if (cantidad <= asientosDisponibles) {
        asientosDisponibles -= cantidad; // Actualizar el número de asientos restantes
        let total = cantidad * PRECIO_ENTRADA;
        let descuento = 0;

        // Aplicar descuento del 10% si se compran más de 3 entradas
        if (cantidad > 3) {
            descuento = total * 0.1;
            total -= descuento;
        }

        // Crear un objeto que resume la compra
        const compra = {
            cantidad: cantidad,
            total: total,
            descuento: descuento,
            asientosRestantes: asientosDisponibles,
            mensaje: `Compra exitosa: ${cantidad} entradas adquiridas. Asientos restantes: ${asientosDisponibles}`
        };

        // Registrar la compra en el historial global
        historialCompras.push(compra);

        // Ejecutar el callback pasando el objeto de compra
        callback(compra);
    } else {
        // Mensaje de error si no hay suficientes asientos
        console.log("Error: No hay suficientes asientos disponibles para completar la compra.");
    }
}

/**
 * Callback que procesa la confirmación de la compra.
 * @param {object} compra - Objeto con el resumen de la compra.
 */
function procesarConfirmacion(compra) {
    // Mostrar mensaje de éxito y detalle de la compra
    console.log(compra.mensaje);
    console.log(`Total a pagar: $${compra.total}`);
    if (compra.descuento > 0) {
        console.log(`Descuento aplicado: $${compra.descuento}`);
    }

    // Simular el envío de un correo de confirmación
    enviarEmailConfirmacion(compra);
}

/**
 * Función que simula el envío de un email de confirmación.
 * @param {object} compra - Objeto con el resumen de la compra.
 */
function enviarEmailConfirmacion(compra) {
    console.log(`Enviando correo de confirmación por la compra de ${compra.cantidad} entradas...`);
    // Simulación de proceso asíncrono (enviar email)
    setTimeout(() => {
        console.log("Correo de confirmación enviado exitosamente.");
    }, 1000); // Retardo simulado de 1 segundo
}

// Pruebas de la función:
comprarEntradas(2, procesarConfirmacion);
// Salida esperada:
// Compra exitosa: 2 entradas adquiridas. Asientos restantes: 8
// Total a pagar: $16

comprarEntradas(4, procesarConfirmacion);
// Salida esperada:
// Compra exitosa: 4 entradas adquiridas. Asientos restantes: 4
// Total a pagar: $28.8 (32 - 10% de descuento)
// Descuento aplicado: $3.2

comprarEntradas(5, procesarConfirmacion);
// Salida esperada:
// Error: No hay suficientes asientos disponibles para completar la compra.
