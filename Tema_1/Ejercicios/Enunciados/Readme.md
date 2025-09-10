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

### Ejercicio 5: Problemas de Concurrencia con Variables Compartidas

#### Contexto Teórico
En JavaScript, aunque el lenguaje es de un solo hilo (single-threaded), el **Event Loop** permite la ejecución de código asíncrono a través de callbacks, promesas y funciones como `setTimeout` o `fetch`. Esto puede crear **problemas de concurrencia** cuando múltiples operaciones asíncronas acceden y modifican la misma variable del hilo principal.

#### ¿Qué es un problema de concurrencia?
Un problema de concurrencia ocurre cuando:
1. Una variable es accesible desde el hilo principal
2. La misma variable es modificada por callbacks asíncronos
3. El orden de ejecución no es predecible
4. El estado final de la variable no es el esperado

#### Conceptos Clave

**Event Loop**: Mecanismo que permite a JavaScript manejar operaciones asíncronas. Las funciones asíncronas se colocan en una cola y se ejecutan cuando la pila de ejecución principal está vacía.

**Scope (Ámbito)**: Determina dónde las variables son accesibles en el código.

#### El Problema

Imagina que tienes un contador que debe incrementarse de forma secuencial, pero usas operaciones asíncronas que pueden ejecutarse en diferentes momentos:

```javascript
// CÓDIGO CON PROBLEMA - ESTO NO ES UNA SOLUCIÓN
let contador = 0;

function incrementarAsincrono() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            contador++;
            console.log(`Incremento ${i + 1}: contador = ${contador}`);
        }, Math.random() * 3000); // Tiempo aleatorio
    }
}

incrementarAsincrono();
console.log(`Valor inicial del contador: ${contador}`);
```

Cuando ejecutes este código, verás que el valor final del contador puede no ser 5, debido a que las operaciones asíncronas se ejecutan en un orden impredecible.
Por tanto en este problema concurrente (condición de carrera) identificamos:
1. Una variable compartida: `contador`. También llamada zona crítica.
2. Múltiples operaciones asíncronas que modifican `contador` indiscriminadamente. Aunque solo una operación a la vez puede modificar `contador`, no hay control sobre el orden de ejecución.
3. Que necesitamos sincronizar el acceso a `contador` para evitar resultados incorrectos.
4. Que podemos usar técnicas como Promesas encadenadas o async/await para controlar el flujo de ejecución y asegurar que las operaciones se realicen en el orden correcto.

#### Enunciado del Ejercicio

**Parte 1: Reproduce el problema**

Crea un archivo llamado `ProblemasConcurrencia.js` que contenga:

1. Una variable global `saldo` inicializada en 1000
2. Una función `procesarTransaccion(monto, descripcion)` que simule operaciones bancarias asíncronas usando `setTimeout`. Guíate con el ejemplo anterior.
3. Múltiples llamadas a esta función que debiten y acrediten el saldo (es decir, que sumen y resten del saldo).
4. Demuestra cómo el resultado final puede ser incorrecto debido a la concurrencia.

**Parte 2: Soluciona el problema**

Implementa **al menos 2 soluciones diferentes**:

1. **Solución con Promesas encadenadas**: Asegura que las operaciones se ejecuten secuencialmente. Deberás encadenar las llamadas a `procesarTransaccion` usando `.then()`.
2. **Solución con async/await**: Usa programación asíncrona moderna para controlar el flujo. Deberás hacer que `procesarTransaccion` devuelva una promesa y luego usar `await` para esperar a que cada transacción se complete antes de iniciar la siguiente.

#### Requisitos

- El código problemático debe mostrar claramente resultados inconsistentes
- Cada solución debe garantizar que el saldo final sea correcto
- Incluye logs detallados que muestren el estado en cada paso
- (Para ti) Comenta tu código explicando por qué cada solución funciona

#### Pistas

- Usa `Math.random() * 3000` para simular tiempos de procesamiento variables
- Para las promesas, puedes crear una función que devuelva `new Promise()`
- Para async/await, necesitarás hacer que tus funciones devuelvan promesas
- Revisa la solución si tienes dudas sobre cómo implementar cada enfoque. Intenta depurar el código para entender el flujo de ejecución. Usa el [depurador de Runtime](https://jsflow.info/examples/settimeout-basic). Verás que la solución tiene muchas "florituras" como logs para entender bien la ejecución. Céntrate en lo esencial para entender y resolver el problema de concurrencia.
