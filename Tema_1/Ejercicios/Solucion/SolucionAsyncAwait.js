/**
 * SOLUCIÓN 2: USANDO ASYNC/AWAIT
 *
 * Esta solución utiliza la sintaxis moderna de async/await para manejar
 * operaciones asíncronas de forma más legible y secuencial.
 */

console.log("=== SOLUCIÓN CON ASYNC/AWAIT ===\n");

let saldo = 1000;

/**
 * Función que procesa una transacción de forma asíncrona
 * @param {number} monto - Cantidad a debitar (negativo) o acreditar (positivo)
 * @param {string} descripcion - Descripción de la transacción
 * @returns {Promise<number>} Promesa que se resuelve con el nuevo saldo
 */
function procesarTransaccionAsync(monto, descripcion) {
    return new Promise((resolve) => {
        // Simula tiempo de procesamiento variable
        const tiempoProcesamiento = Math.random() * 3000;

        setTimeout(() => {
            const saldoAnterior = saldo;
            saldo += monto;

            console.log(`${descripcion}: ${monto > 0 ? '+' : ''}${monto} | Saldo: ${saldoAnterior} → ${saldo}`);
            resolve(saldo);
        }, tiempoProcesamiento);
    });
}

/**
 * Función principal que ejecuta todas las transacciones secuencialmente
 * usando async/await
 */
async function ejecutarTransacciones() {
    try {
        console.log(`Saldo inicial: ${saldo}`);

        // SOLUCIÓN: Usamos await para esperar cada transacción
        await procesarTransaccionAsync(-200, "Pago de servicios");
        await procesarTransaccionAsync(150, "Depósito nómina");
        await procesarTransaccionAsync(-100, "Compra supermercado");
        await procesarTransaccionAsync(75, "Transferencia recibida");
        await procesarTransaccionAsync(-50, "Comisión bancaria");

        console.log(`\n✅ RESULTADO CORRECTO:`);
        console.log(`Saldo final: ${saldo}`);
        console.log(`Saldo esperado: 875`);
        console.log(`¿Coinciden? ${saldo === 875 ? '✅ Sí' : '❌ No'}`);

        console.log(`\n🔧 EXPLICACIÓN DE LA SOLUCIÓN:`);
        console.log(`   - async/await hace que el código asíncrono parezca síncrono`);
        console.log(`   - await pausa la ejecución hasta que la Promise se resuelve`);
        console.log(`   - Cada transacción espera a que termine la anterior`);
        console.log(`   - El código es más legible que con .then()`);

        // Ejecutar ejemplo paralelo después de completar las transacciones principales
        await ejemploParaleloControlado();

    } catch (error) {
        console.error("Error en el procesamiento:", error);
    }
}

/**
 * EXTRA: EJEMPLO DE PROCESAMIENTO PARALELO CONTROLADO
 *
 * Si quisiéramos procesar algunas transacciones en paralelo pero
 * manteniendo control sobre el orden, podríamos hacerlo así:
 */
async function ejemploParaleloControlado() {
    console.log(`\n=== EJEMPLO: PROCESAMIENTO PARALELO CONTROLADO ===`);

    // Resetear saldo para este ejemplo
    saldo = 1000;
    console.log(`Saldo inicial para ejemplo paralelo: ${saldo}`);

    try {
        // Procesar dos transacciones en paralelo
        await Promise.all([
            procesarTransaccionAsync(-50, "Comisión A"),
            procesarTransaccionAsync(-30, "Comisión B")
        ]);

        // Luego procesar una transacción final
        await procesarTransaccionAsync(100, "Depósito final");

        console.log(`Saldo después del ejemplo paralelo: ${saldo}`);
        console.log(`Saldo esperado: 1020 (1000 - 50 - 30 + 100)`);
        console.log(`¿Coinciden? ${saldo === 1020 ? '✅ Sí' : '❌ No'}`);

    } catch (error) {
        console.error("Error en procesamiento paralelo:", error);
    }
}

// Ejecutar las transacciones
ejecutarTransacciones();

/**
 * VENTAJAS DE ASYNC/AWAIT:
 *
 * ✅ Legibilidad: Código que se lee como si fuera síncrono
 * ✅ Manejo de errores: try/catch natural
 * ✅ Debugging: Más fácil de depurar que promesas encadenadas
 * ✅ Flexibilidad: Fácil combinar con Promise.all() para paralelismo
 * ✅ Menos anidación: Evita el "callback hell" y "promise hell"
 *
 * CONSIDERACIONES:
 *
 * ⚠️ Compatibilidad: Requiere soporte de ES2017+
 * ⚠️ Función async: Debe estar dentro de una función async
 * ⚠️ Propagación: Los errores se propagan como excepciones
 */
