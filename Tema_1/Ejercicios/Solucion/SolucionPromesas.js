/**
 * SOLUCIÓN 1: USANDO PROMESAS ENCADENADAS
 *
 * Esta solución resuelve el problema de concurrencia asegurando que
 * las transacciones se ejecuten secuencialmente, una después de otra.
 */

console.log("=== SOLUCIÓN CON PROMESAS ENCADENADAS ===\n");

let saldo = 1000;

/**
 * Función que procesa una transacción de forma asíncrona usando Promesas
 * @param {number} monto - Cantidad a debitar (negativo) o acreditar (positivo)
 * @param {string} descripcion - Descripción de la transacción
 * @returns {Promise} Promesa que se resuelve cuando la transacción termina
 */
function procesarTransaccionSegura(monto, descripcion) {
    return new Promise((resolve) => {
        // Simula tiempo de procesamiento variable
        const tiempoProcesamiento = Math.random() * 3000;

        setTimeout(() => {
            const saldoAnterior = saldo;
            saldo += monto;

            console.log(`${descripcion}: ${monto > 0 ? '+' : ''}${monto} | Saldo: ${saldoAnterior} → ${saldo}`);

            // Resolvemos la promesa con el nuevo saldo
            resolve(saldo);
        }, tiempoProcesamiento);
    });
}

// Saldo inicial
console.log(`Saldo inicial: ${saldo}`);

// SOLUCIÓN: Encadenamos las promesas para ejecutar secuencialmente
procesarTransaccionSegura(-200, "Pago de servicios")
    .then(() => procesarTransaccionSegura(150, "Depósito nómina"))
    .then(() => procesarTransaccionSegura(-100, "Compra supermercado"))
    .then(() => procesarTransaccionSegura(75, "Transferencia recibida"))
    .then(() => procesarTransaccionSegura(-50, "Comisión bancaria"))
    .then(() => {
        console.log(`\n✅ RESULTADO CORRECTO:`);
        console.log(`Saldo final: ${saldo}`);
        console.log(`Saldo esperado: 875`);
        console.log(`¿Coinciden? ${saldo === 875 ? '✅ Sí' : '❌ No'}`);

        console.log(`\n🔧 EXPLICACIÓN DE LA SOLUCIÓN:`);
        console.log(`   - Cada transacción devuelve una Promise`);
        console.log(`   - Usamos .then() para encadenar las operaciones`);
        console.log(`   - Cada transacción espera a que termine la anterior`);
        console.log(`   - El orden de ejecución está garantizado`);
    })
    .catch((error) => {
        console.error("Error en el procesamiento:", error);
    });

/**
 * VENTAJAS DE ESTA SOLUCIÓN:
 *
 * ✅ Orden garantizado: Las transacciones se ejecutan una tras otra
 * ✅ Estado consistente: No hay condiciones de carrera
 * ✅ Fácil de entender: El flujo es lineal y predecible
 * ✅ Manejo de errores: Se puede usar .catch() para errores
 *
 * DESVENTAJAS:
 *
 * ⚠️ Secuencial: No aprovecha el paralelismo cuando es posible
 * ⚠️ Anidación: Con muchas operaciones puede volverse verboso
 * ⚠️ Callback hell: Aunque mejor que callbacks, sigue siendo anidado
 */
