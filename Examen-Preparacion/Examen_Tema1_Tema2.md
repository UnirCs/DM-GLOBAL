# Preguntas de Examen - Tema 1 y Tema 2

## Pregunta 1: Event Loop y setTimeout

**Observa el siguiente código y determina cuál será el orden de impresión en consola:**

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");
```

**Opciones:**

- a) A, B, C, D, E
- b) A, C, E, B, D
- c) A, C, E, D, B
- d) B, D, A, C, E

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) A, C, E, B, D**

**Explicación:**
El Event Loop de JavaScript funciona de la siguiente manera:
1. Primero se ejecuta todo el código síncrono del Call Stack.
2. Los callbacks de `setTimeout` (aunque tengan delay 0) se colocan en la Callback Queue.
3. Solo cuando el Call Stack está vacío, el Event Loop mueve los callbacks de la Queue al Stack.

Por tanto:
- Se imprime "A" (síncrono)
- setTimeout programa "B" para la Queue
- Se imprime "C" (síncrono)
- setTimeout programa "D" para la Queue
- Se imprime "E" (síncrono)
- Call Stack vacío → se ejecuta "B"
- Se ejecuta "D"

</details>

---

## Pregunta 2: Callbacks y Funciones de Orden Superior

**Dado el siguiente código, ¿cuál será la salida por consola?**

```javascript
const procesarNumero = (n, callbackPar, callbackImpar) => {
    if (n % 2 === 0) {
        callbackPar(n);
    } else {
        callbackImpar(n);
    }
};

const numeros = [3, 8, 5];
const resultados = [];

numeros.forEach(num => {
    procesarNumero(
        num,
        (x) => resultados.push(x * 2),
        (x) => resultados.push(x + 1)
    );
});

console.log(resultados);
```

**Opciones:**

- a) `[6, 16, 10]`
- b) `[4, 16, 6]`
- c) `[3, 8, 5]`
- d) `[4, 8, 6]`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) [4, 16, 6]**

**Explicación:**
La función `procesarNumero` recibe un número y dos callbacks: uno para números pares (multiplica por 2) y otro para impares (suma 1).

- Para `3`: es impar → `callbackImpar(3)` → `3 + 1 = 4` → resultados = [4]
- Para `8`: es par → `callbackPar(8)` → `8 * 2 = 16` → resultados = [4, 16]
- Para `5`: es impar → `callbackImpar(5)` → `5 + 1 = 6` → resultados = [4, 16, 6]

Este es un ejemplo de **callbacks** combinados con la función de orden superior `forEach`.

</details>

---

## Pregunta 3: Promesas y Promise.all

**Analiza el siguiente código. ¿Qué se imprimirá en consola?**

```javascript
const promesa1 = new Promise(resolve => {
    setTimeout(() => resolve(10), 100);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error en promesa2"), 50);
});

const promesa3 = new Promise(resolve => {
    setTimeout(() => resolve(30), 150);
});

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log("Éxito:", resultados);
    })
    .catch(error => {
        console.log("Fallo:", error);
    });
```

**Opciones:**

- a) `Éxito: [10, undefined, 30]`
- b) `Fallo: Error en promesa2`
- c) `Éxito: [10, 30]`
- d) `Fallo: [10, "Error en promesa2", 30]`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Fallo: Error en promesa2**

**Explicación:**
`Promise.all` tiene un comportamiento de "todo o nada":
- Espera a que **todas** las promesas se cumplan para resolverse.
- Si **cualquier** promesa es rechazada, `Promise.all` se rechaza inmediatamente con el error de esa promesa.

En este caso, `promesa2` se rechaza después de 50ms con el mensaje "Error en promesa2", lo cual causa que `Promise.all` entre directamente al `.catch()`, ignorando los resultados de las demás promesas.

Si se necesita obtener el resultado de todas las promesas independientemente de si fallan o no, se debería usar `Promise.allSettled()`.

</details>

---

## Pregunta 4: Async/Await

**¿Cuál es la salida del siguiente código?**

```javascript
function obtenerDato() {
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 100);
    });
}

async function calcular() {
    console.log("Inicio");
    const valor1 = await obtenerDato();
    const valor2 = await obtenerDato();
    console.log("Suma:", valor1 + valor2);
    return valor1 + valor2;
}

calcular();
console.log("Fin");
```

**Opciones:**

- a) `Inicio`, `Suma: 10`, `Fin`
- b) `Inicio`, `Fin`, `Suma: 10`
- c) `Fin`, `Inicio`, `Suma: 10`
- d) `Suma: 10`, `Inicio`, `Fin`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Inicio, Fin, Suma: 10**

**Explicación:**
1. Se llama a `calcular()`, que es una función async.
2. Se imprime `"Inicio"` (síncrono dentro de la función async).
3. Se encuentra el primer `await`, lo cual **pausa** la ejecución de `calcular()` y devuelve el control al código que la llamó.
4. Se imprime `"Fin"` (código síncrono fuera de la función async).
5. Después de ~100ms, el primer `await` se resuelve con valor 5.
6. Después de otros ~100ms, el segundo `await` se resuelve con valor 5.
7. Se imprime `"Suma: 10"`.

**Nota importante:** `await` pausa solo la función async, no bloquea el hilo principal. Por eso `"Fin"` se imprime antes de `"Suma: 10"`.

</details>

---

## Pregunta 5: Fetch API vs Axios

**Observa los siguientes fragmentos de código que realizan una petición POST. ¿Cuál es la diferencia principal entre ellos?**

**Código A (Fetch):**
```javascript
fetch('http://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: "Juan", edad: 25 })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

**Código B (Axios):**
```javascript
axios.post('http://api.example.com/users', {
    nombre: "Juan",
    edad: 25
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

**¿Cuál de las siguientes afirmaciones es CORRECTA?**

**Opciones:**

- a) Fetch convierte automáticamente el body a JSON, mientras que Axios requiere `JSON.stringify()`
- b) Axios requiere verificar manualmente `response.ok`, mientras que Fetch lanza errores automáticamente para códigos HTTP 4xx/5xx
- c) Fetch requiere `JSON.stringify()` para el body y verificar `response.ok` manualmente, mientras que Axios maneja ambos automáticamente
- d) Ambas APIs funcionan exactamente igual, la única diferencia es la sintaxis

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: c) Fetch requiere `JSON.stringify()` para el body y verificar `response.ok` manualmente, mientras que Axios maneja ambos automáticamente**

**Explicación:**

Las principales diferencias entre Fetch y Axios son:

| Característica | Fetch | Axios |
|---------------|-------|-------|
| Serialización de datos | Requiere `JSON.stringify()` manualmente | Convierte objetos a JSON automáticamente |
| Headers Content-Type | Debe especificarse manualmente | Se establece automáticamente para JSON |
| Manejo de errores HTTP | No lanza error para 4xx/5xx, hay que verificar `response.ok` | Lanza error automáticamente para códigos de error HTTP |
| Acceso a datos | `response.json()` (devuelve promesa) | `response.data` (ya parseado) |
| Disponibilidad | Nativo del navegador | Requiere instalación (`npm install axios`) |

Por eso en el código con Fetch se necesita:
1. `JSON.stringify({ nombre: "Juan", edad: 25 })`
2. `if (!response.ok) { throw new Error(...) }`
3. `return response.json()`

Mientras que en Axios todo esto se maneja internamente.

</details>

