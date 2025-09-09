//(async () => {
    /**
     * ASYNC/AWAIT - Código de apoyo
     */

    /**
     * Función auxiliar que simula una operación asíncrona
     * Podría perfectamente ser una llamada a una API, lectura de archivo, etc.
     * Retorna una promesa que se resuelve después de un tiempo determinado
     */
    function operacionAsincrona(valor, tiempoMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor);
            }, tiempoMs);
        });
    }

    /**
     * Encadenamiento secuencial con async/await
     *
     * Este ejemplo toma el primer caso del archivo Promesas.js donde se encadenan
     * operaciones secuenciales, pero usando async/await en lugar de .then()
     */
    async function ejemploEncadenamientoSecuencial() {
        try {
            // Esperar el resultado de la primera operación (equivalente al primer resolve)
            const resultadoInicial = await operacionAsincrona(42, 1000);
            console.log('Resultado inicial:', resultadoInicial); // Imprime: 42

            // Procesar el resultado y continuar con la siguiente operación
            const resultadoMultiplicado = resultadoInicial * 2;
            console.log('Resultado después de la multiplicación:', resultadoMultiplicado); // Imprime: 84

            // Se puede continuar con más operaciones await si es necesario
            const resultadoFinal = await operacionAsincrona(resultadoMultiplicado + 10, 500);
            console.log('Resultado final:', resultadoFinal); // Imprime: 94

            return resultadoFinal;

        } catch (error) {
            // En caso de error, se captura aquí (equivalente al .catch())
            console.error('Error en la operación async/await:', error);
            throw error; // Re-lanzar el error si es necesario
        }
    }

    let resultadoFinal = await ejemploEncadenamientoSecuencial();
    //console.log('Resultado Final:', resultadoFinal);

    /**
     * NOTAS IMPORTANTES:
     *
     * 1. async/await es "azúcar sintáctico" sobre las promesas
     * 2. Las funciones async siempre retornan una Promise
     * 3. await solo puede usarse dentro de funciones async
     * 4. try/catch reemplaza a .catch() para manejo de errores
     * 5. El código es más legible y similar al código síncrono
     * 6. await pausa la ejecución hasta que la Promise se resuelve
     */
//})();