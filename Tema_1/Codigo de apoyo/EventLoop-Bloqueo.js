console.log("=== EJEMPLO: BLOQUEO DEL EVENT LOOP ===");
// Este ejemplo demuestra cómo una operación síncrona intensiva puede bloquear el Event Loop

console.log("Inicio del programa");

// Programamos algunos callbacks asíncronos
setTimeout(() => {
    console.log("Callback de setTimeout (0ms) - Debería ejecutarse inmediatamente");
}, 0);

setTimeout(() => {
    console.log("Callback de setTimeout (100ms)");
}, 100);

// Simulamos una operación síncrona que bloquea el hilo principal
console.log("Iniciando operación síncrona bloqueante...");

function operacionBloqueante() {
    const inicio = Date.now();
    const duracion = 3000; // 3 segundos de bloqueo

    // Bucle intensivo que mantiene ocupado el hilo principal
    while (Date.now() - inicio < duracion) {
        // Simulamos trabajo intensivo (cálculos matemáticos)
        Math.sqrt(Math.random() * 1000000);
    }

    console.log("Operación bloqueante finalizada (3 segundos después)");
}

// Esta función bloqueará el Event Loop durante 3 segundos
operacionBloqueante();

console.log("Código síncrono después del bloqueo");

// Más callbacks para mostrar que ahora sí pueden ejecutarse
setTimeout(() => {
    console.log("Nuevo callback después del desbloqueo");
}, 0);

/*
RESULTADO ESPERADO:
1. Se ejecuta todo el código síncrono primero
2. Durante los 3 segundos de bloqueo, NINGÚN callback asíncrono puede ejecutarse
3. Solo después del desbloqueo, el Event Loop puede procesar la cola de callbacks
4. Los callbacks que estaban esperando se ejecutan en orden

LECCIÓN:
- El Event Loop es de un solo hilo
- Las operaciones síncronas intensivas bloquean toda la aplicación
- Los callbacks asíncronos no pueden ejecutarse hasta que el call stack esté vacío
- Siempre usar operaciones asíncronas para tareas que consumen tiempo
*/

console.log("Final del código síncrono principal");
