// Función que simula una operación asíncrona basada en un parámetro condicional
function operacionCondicional(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicion) {
                resolve("Operación exitosa");
            } else {
                reject("Operación fallida");
            }
        }, 1000);
    });
}

// Encadenamiento de promesas en caso de éxito
operacionCondicional(true)
    .then((resultado) => {
        console.log(resultado); // Espera "Operación exitosa"
        // Primer encadenamiento: agregar información
        return `${resultado} - Paso adicional 1`;
    })
    .then((nuevoResultado) => {
        console.log(nuevoResultado); // Imprime el resultado transformado
        // Segundo encadenamiento: agregar otro paso
        return `${nuevoResultado} - Paso adicional 2`;
    })
    .then((finalResultado) => {
        console.log(finalResultado); // Resultado final del encadenamiento
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Para probar el flujo de error, descomenta la siguiente llamada:
// operacionCondicional(false)
//   .then((resultado) => { console.log(resultado); })
//   .catch((error) => { console.error("Error:", error); });
