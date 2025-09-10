/**
 * EJERCICIO 5: DEMOSTRACIÓN DEL PROBLEMA DE CONCURRENCIA
 *
 * Este archivo demuestra cómo las variables compartidas pueden causar
 * problemas cuando son accedidas por múltiples callbacks asíncronos.
 */

console.log("=== DEMOSTRACIÓN DEL PROBLEMA DE CONCURRENCIA ===\n");

// Variable global compartida - AQUÍ ESTÁ EL PROBLEMA
let saldo = 1000;

/**
 * Función que simula una transacción bancaria asíncrona
 * @param {number} monto - Cantidad a debitar (negativo) o acreditar (positivo)
 * @param {string} descripcion - Descripción de la transacción
 */
function procesarTransaccion(monto, descripcion) {
    // Simula tiempo de procesamiento variable (entre 0-3000ms)
    const tiempoProcesamiento = Math.random() * 3000;

    setTimeout(() => {
        // Lee el saldo actual
        const saldoAnterior = saldo;

        // Simula procesamiento adicional
        const nuevoSaldo = saldoAnterior + monto;

        // Actualiza el saldo global
        saldo = nuevoSaldo;

        console.log(`${descripcion}: ${monto > 0 ? '+' : ''}${monto} | Saldo: ${saldoAnterior} → ${saldo}`);
    }, tiempoProcesamiento);
}

// Saldo inicial
console.log(`Saldo inicial: ${saldo}`);

// Simulamos múltiples transacciones que se ejecutan "al mismo tiempo"
procesarTransaccion(-200, "Pago de servicios");
procesarTransaccion(150, "Depósito nómina");
procesarTransaccion(-100, "Compra supermercado");
procesarTransaccion(75, "Transferencia recibida");
procesarTransaccion(-50, "Comisión bancaria");

// El saldo esperado debería ser: 1000 - 200 + 150 - 100 + 75 - 50 = 875

setTimeout(() => {
    console.log(`\n💥 RESULTADO PROBLEMÁTICO:`);
    console.log(`Saldo final: ${saldo}`);
    console.log(`Saldo esperado: 875`);
    console.log(`¿Coinciden? ${saldo === 875 ? '✅ Sí (por casualidad)' : '❌ No'}`);
    console.log(`\n🔍 PROBLEMA: Las operaciones asíncronas pueden ejecutarse en cualquier orden,`);
    console.log(`   causando que las lecturas y escrituras del saldo se mezclen incorrectamente.`);
}, 1500);

/**
 * EXPLICACIÓN DEL PROBLEMA:
 *
 * 1. Todas las transacciones leen el saldo inicial (1000) casi al mismo tiempo
 * 2. Cada setTimeout se ejecuta en momentos diferentes debido a Math.random()
 * 3. Algunas transacciones pueden sobrescribir cambios de otras
 * 4. El resultado final es impredecible
 *
 * Ejemplo de ejecución problemática:
 * - T1: Lee saldo=1000, calcula 1000-200=800
 * - T2: Lee saldo=1000, calcula 1000+150=1150
 * - T3: Lee saldo=1000, calcula 1000-100=900
 * - T2 termina primero: saldo = 1150
 * - T1 termina después: saldo = 800 (¡sobrescribe T2!)
 * - T3 termina último: saldo = 900 (¡sobrescribe T1!)
 */
