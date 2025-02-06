### Ejercicio 1: Callback Síncrono - Transformación de un Número
Crea una función transformarNumero que reciba tres parámetros:

- Un número de entrada.
- Un callback que procese el número (por ejemplo, multiplicarlo por 2).
- Un callback que formatee el resultado en una cadena.

La función debe aplicar ambos callbacks de forma secuencial y mostrar el resultado en la consola. Pistas:

- Implementa la función transformarNumero.
- Define dos callbacks: uno para la operación (por ejemplo, duplicar) y otro para formatear el mensaje.
- Ejecuta la función y observa el resultado.


### Ejercicio 2: Callback Síncrono - Cálculo de Impuestos
Implementa una función calcularImpuesto que simule el cálculo de impuestos de forma síncrona. La función debe recibir dos parámetros:

- ingreso: un número que representa el ingreso.
- calcular: un callback que reciba el ingreso y devuelva el impuesto a pagar.

La función debe ejecutar el callback y mostrar en la consola el resultado del impuesto. Pistas:

- Implementa la función calcularImpuesto.
- Define un callback para calcular el impuesto (por ejemplo, un 15% del ingreso).
- Llama a la función con un ingreso de ejemplo.

### Ejercicio 3: Callback Asíncrono con Promesas - Operación Condicional
Crea una función operacionCondicional que simule una operación asíncrona utilizando setTimeout y devuelva una promesa. La función recibirá un parámetro booleano condicion que determine el flujo:

- Si condicion es true, la promesa se cumplirá (resolve) después de 1 segundo.
- Si condicion es false, la promesa se rechazará (reject) después de 1 segundo.

Encadena al menos dos .then() para procesar el resultado en caso de éxito y utiliza .catch() para capturar errores. Pistas:

- Implementa la función operacionCondicional.
- Encadena múltiples .then() para transformar el resultado.
- Prueba la función cambiando el valor de condicion para ver ambos flujos (éxito y error).

### Ejercicio 4: Callback Asíncrono con Promesas - Cálculo Basado en un Parámetro
Implementa una función calculoConPromesas que reciba un número valorInicial. La función debe devolver una promesa que se cumpla si valorInicial es mayor o igual a 10 y se rechace si es menor a 10. Luego, encadena varias operaciones asíncronas (por ejemplo, multiplicar el número por 2 y luego sumar 5) utilizando .then(). Captura cualquier error con .catch(). Pistas:

- Implementa la función calculoConPromesas que utiliza setTimeout para simular una operación asíncrona.
- Encadena al menos dos .then() para procesar el valor de forma secuencial.
- Prueba la función con un valorInicial que cumpla la condición y otro que la incumpla para observar el flujo de error.