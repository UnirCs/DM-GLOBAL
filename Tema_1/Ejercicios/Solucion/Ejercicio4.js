// Función que devuelve una promesa basada en el valor inicial
function calculoConPromesas(valorInicial) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valorInicial >= 10) {
                resolve(valorInicial);
            } else {
                reject("El valor inicial debe ser mayor o igual a 10");
            }
        }, 500);
    });
}

// Encadenamiento de promesas para realizar cálculos sucesivos
calculoConPromesas(12)
    .then((valor) => {
        console.log(`Valor inicial: ${valor}`);
        // Multiplicar el valor por 2
        return valor * 2;
    })
    .then((valorMultiplicado) => {
        console.log(`Valor multiplicado por 2: ${valorMultiplicado}`);
        // Sumar 5 al resultado
        return valorMultiplicado + 5;
    })
    .then((valorFinal) => {
        console.log(`Valor final después de sumar 5: ${valorFinal}`);
    })
    .catch((error) => {
        console.error("Error en el cálculo:", error);
    });

// Para probar el flujo de error, cambia el valor inicial a un número menor a 10, por ejemplo:
// calculoConPromesas(8)
//   .then((valor) => { console.log(valor); })
//   .catch((error) => { console.error("Error en el cálculo:", error); });
