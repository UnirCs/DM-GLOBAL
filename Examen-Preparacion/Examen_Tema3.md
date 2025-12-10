# Preguntas de Examen - Tema 3: DOM Básico

## Pregunta 1: Métodos de Selección del DOM

**Observa el siguiente código HTML y JavaScript:**

```html
<section id="peliculas">
    <article class="pelicula" data-id="1">
        <h2>La Gran Aventura</h2>
        <button class="btnSeleccionar" id="btn1">Seleccionar</button>
    </article>
    <article class="pelicula" data-id="2">
        <h2>Romance en París</h2>
        <button class="btnSeleccionar" id="btn2">Seleccionar</button>
    </article>
</section>
```

```javascript
const resultado1 = document.getElementById("peliculas");
const resultado2 = document.getElementsByClassName("pelicula");
const resultado3 = document.querySelector(".pelicula");
const resultado4 = document.querySelectorAll(".pelicula");
```

**¿Cuál de las siguientes afirmaciones es CORRECTA?**

**Opciones:**

- a) `resultado2` y `resultado4` devuelven exactamente el mismo tipo de objeto
- b) `resultado1` devuelve una HTMLCollection y `resultado3` devuelve un Element
- c) `resultado2` devuelve una HTMLCollection, mientras que `resultado4` devuelve una NodeList
- d) `resultado3` y `resultado4` devuelven el mismo resultado porque usan el mismo selector

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: c) `resultado2` devuelve una HTMLCollection, mientras que `resultado4` devuelve una NodeList**

**Explicación:**

| Método | Tipo de retorno | Descripción |
|--------|----------------|-------------|
| `getElementById()` | Element (o null) | Devuelve un único elemento |
| `getElementsByClassName()` | HTMLCollection | Colección "viva" de elementos |
| `querySelector()` | Element (o null) | Primer elemento que coincide |
| `querySelectorAll()` | NodeList | Lista estática de todos los elementos que coinciden |

La diferencia clave entre HTMLCollection y NodeList:
- **HTMLCollection** es "viva": se actualiza automáticamente si el DOM cambia
- **NodeList** (de `querySelectorAll`) es estática: no se actualiza con cambios del DOM
- Ambas son array-like pero no son Arrays verdaderos

`resultado3` devuelve solo el **primer** elemento con clase "pelicula", mientras que `resultado4` devuelve **todos** los elementos.

</details>

---

## Pregunta 2: Crear y Añadir Elementos al DOM

**Dado el siguiente código, ¿qué se mostrará en el DOM después de ejecutarlo?**

```javascript
const contenedor = document.getElementById("lista");
// El contenedor inicialmente contiene: <ul id="lista"></ul>

const item1 = document.createElement("li");
item1.textContent = "Primero";

const item2 = document.createElement("li");
item2.textContent = "Segundo";

const item3 = document.createElement("li");
item3.textContent = "Tercero";

contenedor.appendChild(item1);
contenedor.insertBefore(item3, item1);
contenedor.appendChild(item2);
```

**Opciones:**

- a) Primero, Segundo, Tercero
- b) Tercero, Primero, Segundo
- c) Segundo, Tercero, Primero
- d) Primero, Tercero, Segundo

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Tercero, Primero, Segundo**

**Explicación:**

Analicemos paso a paso:

1. `contenedor.appendChild(item1)` → Lista: **[Primero]**
2. `contenedor.insertBefore(item3, item1)` → Inserta "Tercero" **antes** de "Primero" → Lista: **[Tercero, Primero]**
3. `contenedor.appendChild(item2)` → Añade "Segundo" al final → Lista: **[Tercero, Primero, Segundo]**

Métodos importantes:
- `appendChild(elemento)`: Añade el elemento al **final** del contenedor
- `insertBefore(nuevoElemento, elementoReferencia)`: Inserta el nuevo elemento **antes** del elemento de referencia

El resultado final en el DOM sería:
```html
<ul id="lista">
    <li>Tercero</li>
    <li>Primero</li>
    <li>Segundo</li>
</ul>
```

</details>

---

## Pregunta 3: Event Listeners y Atributos data-*

**Observa el siguiente código HTML y JavaScript:**

```html
<div id="productos">
    <button class="btn-producto" data-precio="25" data-nombre="Camiseta">Comprar</button>
    <button class="btn-producto" data-precio="50" data-nombre="Pantalón">Comprar</button>
    <button class="btn-producto" data-precio="15" data-nombre="Gorra">Comprar</button>
</div>
```

```javascript
let total = 0;

document.querySelectorAll('.btn-producto').forEach(button => {
    button.addEventListener('click', (event) => {
        const precio = event.target.dataset.precio;
        total += precio;
        console.log("Total:", total);
    });
});
```

**Si el usuario hace clic en "Camiseta" y luego en "Gorra", ¿qué se imprimirá en consola?**

**Opciones:**

- a) `Total: 25` y luego `Total: 40`
- b) `Total: 25` y luego `Total: 2515`
- c) `Total: "25"` y luego `Total: "2515"`
- d) Error: no se puede acceder a dataset

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `Total: 25` y luego `Total: 2515`**

**Explicación:**

El problema está en que `dataset.precio` devuelve un **string**, no un número. Los atributos `data-*` siempre se almacenan como strings en el DOM.

Cuando haces `total += precio`:
- Primera vez: `0 + "25"` → JavaScript convierte 0 a string → `"025"` → se muestra como `25`
- Segunda vez: `"25" + "15"` → Concatenación de strings → `"2515"`

**Corrección del código:**
```javascript
const precio = parseInt(event.target.dataset.precio);
// o también:
const precio = Number(event.target.dataset.precio);
// o usando el operador +:
const precio = +event.target.dataset.precio;
```

Con la corrección, el resultado sería:
- `Total: 25`
- `Total: 40`

**Nota:** Los atributos `data-*` se acceden mediante `element.dataset.nombreAtributo`, donde el nombre se convierte de kebab-case a camelCase (ej: `data-mi-valor` → `dataset.miValor`).

</details>

---

## Pregunta 4: Modificación de Estilos y Clases

**Dado el siguiente código, ¿cuál será el estado final del elemento?**

```html
<div id="caja" class="visible grande"></div>
```

```javascript
const caja = document.getElementById("caja");

caja.classList.add("activo");
caja.classList.remove("grande");
caja.classList.toggle("visible");
caja.classList.toggle("destacado");
caja.style.backgroundColor = "blue";
caja.style.display = "flex";
```

**Opciones:**

- a) Clases: `activo destacado` | Estilos inline: `background-color: blue; display: flex;`
- b) Clases: `visible grande activo` | Estilos inline: ninguno
- c) Clases: `activo` | Estilos inline: `background-color: blue; display: flex;`
- d) Clases: `visible activo destacado` | Estilos inline: `background-color: blue;`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: a) Clases: `activo destacado` | Estilos inline: `background-color: blue; display: flex;`**

**Explicación:**

Analicemos paso a paso la modificación de clases:

| Operación | Estado de clases |
|-----------|-----------------|
| Inicial | `visible grande` |
| `classList.add("activo")` | `visible grande activo` |
| `classList.remove("grande")` | `visible activo` |
| `classList.toggle("visible")` | `activo` (visible existía, se elimina) |
| `classList.toggle("destacado")` | `activo destacado` (destacado no existía, se añade) |

**Métodos de classList:**
- `add(clase)`: Añade la clase si no existe
- `remove(clase)`: Elimina la clase si existe
- `toggle(clase)`: Si existe la elimina, si no existe la añade
- `contains(clase)`: Devuelve true/false si tiene la clase

Los estilos inline se aplican directamente al atributo `style` del elemento:
```html
<div id="caja" class="activo destacado" style="background-color: blue; display: flex;"></div>
```

</details>

---

## Pregunta 5: innerHTML vs textContent vs createElement

**Observa las tres formas de añadir contenido a un elemento:**

```javascript
const contenedor = document.getElementById("contenedor");

// Opción A
contenedor.innerHTML = "<p onclick='alert(1)'>Texto con <strong>HTML</strong></p>";

// Opción B
contenedor.textContent = "<p onclick='alert(1)'>Texto con <strong>HTML</strong></p>";

// Opción C
const parrafo = document.createElement("p");
parrafo.textContent = "Texto con HTML";
contenedor.appendChild(parrafo);
```

**¿Cuál de las siguientes afirmaciones es CORRECTA?**

**Opciones:**

- a) Las tres opciones producen exactamente el mismo resultado visual
- b) La Opción B interpreta las etiquetas HTML y muestra "Texto con **HTML**" en negrita
- c) La Opción A puede ser vulnerable a ataques XSS si el contenido proviene de entrada del usuario, mientras que B y C son más seguras
- d) La Opción C es la más lenta porque crea elementos en memoria antes de añadirlos

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: c) La Opción A puede ser vulnerable a ataques XSS si el contenido proviene de entrada del usuario, mientras que B y C son más seguras**

**Explicación:**

| Propiedad/Método | Comportamiento | Seguridad |
|-----------------|----------------|-----------|
| `innerHTML` | Interpreta y renderiza HTML | ⚠️ Vulnerable a XSS |
| `textContent` | Inserta como texto plano (escapa HTML) | ✅ Seguro |
| `createElement` + `textContent` | Crea elementos programáticamente | ✅ Seguro |

**Resultados visuales:**

- **Opción A**: Muestra "Texto con **HTML**" (con HTML en negrita) y el onclick es funcional
- **Opción B**: Muestra literalmente `<p onclick='alert(1)'>Texto con <strong>HTML</strong></p>` como texto
- **Opción C**: Muestra "Texto con HTML" como texto plano dentro de un párrafo

**Sobre seguridad XSS:**
Si un atacante puede controlar el contenido que se inserta con `innerHTML`, podría inyectar código malicioso:
```javascript
// ¡PELIGROSO!
contenedor.innerHTML = inputUsuario; 
// Si inputUsuario = "<img src=x onerror='robarCookies()'>"
```

**Recomendación:** Usar `textContent` o `createElement` cuando el contenido proviene de fuentes no confiables.

</details>

