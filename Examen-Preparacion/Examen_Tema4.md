# Preguntas de Examen - Tema 4: Introducción a React y JSX

## Pregunta 1: Sintaxis Básica de JSX

**Observa el siguiente componente React. ¿Cuál de las opciones contiene errores de sintaxis JSX?**

**Opción A:**
```jsx
const Header = () => {
    return (
        <header>
            <h1 className="titulo">Bienvenido</h1>
            <label htmlFor="buscar">Buscar:</label>
            <input id="buscar" type="text" />
        </header>
    );
};
```

**Opción B:**
```jsx
const Header = () => {
    return (
        <header>
            <h1 class="titulo">Bienvenido</h1>
            <label for="buscar">Buscar:</label>
            <input id="buscar" type="text">
        </header>
    );
};
```

**Opciones:**

- a) Solo la Opción A tiene errores
- b) Solo la Opción B tiene errores
- c) Ambas opciones tienen errores
- d) Ninguna opción tiene errores

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Solo la Opción B tiene errores**

**Explicación:**

La Opción B contiene **tres errores** de sintaxis JSX:

| HTML | JSX | Razón |
|------|-----|-------|
| `class` | `className` | `class` es palabra reservada en JavaScript |
| `for` | `htmlFor` | `for` es palabra reservada en JavaScript |
| `<input>` | `<input />` | Las etiquetas sin contenido deben auto-cerrarse |

**Código corregido de la Opción B:**
```jsx
const Header = () => {
    return (
        <header>
            <h1 className="titulo">Bienvenido</h1>
            <label htmlFor="buscar">Buscar:</label>
            <input id="buscar" type="text" />
        </header>
    );
};
```

**Recuerda:** JSX no es HTML, es una extensión de sintaxis de JavaScript. Por eso utiliza las convenciones de JavaScript para los nombres de atributos (camelCase) y evita palabras reservadas.

</details>

---

## Pregunta 2: React.StrictMode

**Observa el siguiente código de entrada de una aplicación React:**

```jsx
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

**¿Cuál de las siguientes afirmaciones sobre `React.StrictMode` es CORRECTA?**

**Opciones:**

- a) StrictMode hace que la aplicación sea más rápida en producción al optimizar el código
- b) StrictMode renderiza los componentes dos veces en desarrollo para detectar efectos secundarios impuros, pero no afecta a producción
- c) StrictMode impide que la aplicación funcione si hay algún error de sintaxis en el código
- d) StrictMode es obligatorio y la aplicación no funcionará sin él

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) StrictMode renderiza los componentes dos veces en desarrollo para detectar efectos secundarios impuros, pero no afecta a producción**

**Explicación:**

`React.StrictMode` es una herramienta de desarrollo que ayuda a identificar problemas potenciales en la aplicación:

**Características principales:**

| Comportamiento | Desarrollo | Producción |
|---------------|------------|------------|
| Doble renderizado | ✅ Sí | ❌ No |
| Advertencias de APIs obsoletas | ✅ Sí | ❌ No |
| Detecta efectos secundarios | ✅ Sí | ❌ No |
| Impacto en rendimiento | Ninguno | Ninguno |

**¿Por qué renderiza dos veces?**
Para detectar efectos secundarios impuros. Si un componente tiene comportamiento diferente en cada renderizado, el doble renderizado ayuda a identificarlo.

**¿Qué detecta StrictMode?**
- Uso de APIs obsoletas (lifecycle methods antiguos)
- Efectos secundarios inesperados
- Uso de `findDOMNode` (obsoleto)
- Detección de contexto legacy

**Importante:** StrictMode es **opcional** y solo tiene efecto en modo desarrollo. No añade ningún nodo al DOM, es un componente "fantasma" que solo envuelve a sus hijos.

</details>

---

## Pregunta 3: Props y Desestructuración

**Dado el siguiente componente, ¿cuáles de las siguientes formas de acceder a las props son equivalentes y correctas?**

```jsx
// Datos que se pasan al componente
const peliculaData = {
    id: 1,
    name: "Inception",
    director: "Christopher Nolan",
    sessions: ["14:00", "17:00", "20:00"]
};

// Uso del componente
<Pelicula movie={peliculaData} destacada={true} />
```

**Opción A:**
```jsx
const Pelicula = (props) => {
    return <h2>{props.movie.name}</h2>;
};
```

**Opción B:**
```jsx
const Pelicula = ({ movie }) => {
    return <h2>{movie.name}</h2>;
};
```

**Opción C:**
```jsx
const Pelicula = ({ movie: { name } }) => {
    return <h2>{name}</h2>;
};
```

**Opciones:**

- a) Solo A y B son correctas
- b) Solo B y C son correctas
- c) A, B y C son correctas y equivalentes en resultado
- d) Solo A es correcta, B y C tienen errores de sintaxis

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: c) A, B y C son correctas y equivalentes en resultado**

**Explicación:**

Las tres formas acceden a `movie.name` correctamente, pero utilizan diferentes niveles de desestructuración:

| Opción | Técnica | Acceso a `name` |
|--------|---------|-----------------|
| A | Sin desestructuración | `props.movie.name` |
| B | Desestructuración de props | `movie.name` |
| C | Desestructuración anidada | `name` directamente |

**Opción A - Sin desestructuración:**
```jsx
const Pelicula = (props) => {
    // props = { movie: {...}, destacada: true }
    return <h2>{props.movie.name}</h2>;
};
```

**Opción B - Desestructuración en parámetros:**
```jsx
const Pelicula = ({ movie }) => {
    // movie = { id: 1, name: "Inception", ... }
    return <h2>{movie.name}</h2>;
};
```

**Opción C - Desestructuración anidada:**
```jsx
const Pelicula = ({ movie: { name } }) => {
    // name = "Inception"
    return <h2>{name}</h2>;
};
```

**Recomendación:** La Opción B es la más común y legible en React. La Opción C es útil cuando solo necesitas una o dos propiedades específicas del objeto anidado.

</details>

---

## Pregunta 4: Renderizado Condicional

**Observa el siguiente componente. ¿Qué se renderizará si `usuario` es `null`?**

```jsx
const Saludo = ({ usuario, esAdmin }) => {
    return (
        <div>
            {usuario && <h1>Hola, {usuario.nombre}</h1>}
            {usuario ? (
                <p>Bienvenido de nuevo</p>
            ) : (
                <p>Por favor, inicia sesión</p>
            )}
            {esAdmin && <button>Panel de Admin</button>}
        </div>
    );
};

// Uso del componente:
<Saludo usuario={null} esAdmin={false} />
```

**Opciones:**

- a) Se renderiza: `<h1>Hola, </h1>`, `<p>Por favor, inicia sesión</p>`
- b) Se renderiza solo: `<p>Por favor, inicia sesión</p>`
- c) Se produce un error porque `usuario.nombre` es undefined
- d) No se renderiza nada porque todas las condiciones son falsas

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Se renderiza solo: `<p>Por favor, inicia sesión</p>`**

**Explicación:**

Analicemos cada renderizado condicional:

**1. `{usuario && <h1>Hola, {usuario.nombre}</h1>}`**
- `usuario` es `null` (falsy)
- El operador `&&` cortocircuita: si la primera parte es falsy, **no evalúa** la segunda
- **Resultado:** No se renderiza nada (React ignora `null`, `false`, `undefined`)

**2. `{usuario ? <p>Bienvenido...</p> : <p>Por favor, inicia sesión</p>}`**
- `usuario` es `null` (falsy)
- El operador ternario devuelve la parte del `:` (else)
- **Resultado:** `<p>Por favor, inicia sesión</p>`

**3. `{esAdmin && <button>Panel de Admin</button>}`**
- `esAdmin` es `false`
- **Resultado:** No se renderiza nada

**Resultado final en el DOM:**
```html
<div>
    <p>Por favor, inicia sesión</p>
</div>
```

**Técnicas de renderizado condicional en React:**

| Técnica | Uso recomendado |
|---------|-----------------|
| `&&` | Mostrar/ocultar un elemento |
| `? :` (ternario) | Elegir entre dos elementos |
| `if/else` fuera del JSX | Lógica más compleja |

</details>

---

## Pregunta 5: Renderizado de Listas y la Prop `key`

**Observa el siguiente código. ¿Cuál es el problema y cómo se soluciona?**

```jsx
const Landing = () => {
    const movies = [
        { id: 1, name: "Inception", director: "Christopher Nolan" },
        { id: 2, name: "The Matrix", director: "The Wachowskis" },
        { id: 3, name: "Interstellar", director: "Christopher Nolan" }
    ];

    return (
        <main>
            {movies.map((movie) => (
                <div>
                    <h2>{movie.name}</h2>
                    <p>Director: {movie.director}</p>
                </div>
            ))}
        </main>
    );
};
```

**Opciones:**

- a) El código es correcto, no hay ningún problema
- b) Falta la prop `key` en el elemento raíz del map; se debe añadir `key={movie.id}`
- c) No se puede usar `map` dentro de JSX, hay que usar un bucle `for`
- d) El problema es que `movies` debería ser un estado con `useState`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Falta la prop `key` en el elemento raíz del map; se debe añadir `key={movie.id}`**

**Explicación:**

Cuando renderizas listas en React usando `map()`, cada elemento hijo debe tener una prop `key` única. Esto ayuda a React a:

1. **Identificar** qué elementos han cambiado, se han añadido o eliminado
2. **Optimizar** el rendimiento al re-renderizar solo lo necesario
3. **Mantener** el estado de los componentes correctamente

**Código corregido:**
```jsx
{movies.map((movie) => (
    <div key={movie.id}>
        <h2>{movie.name}</h2>
        <p>Director: {movie.director}</p>
    </div>
))}
```

**Reglas importantes para `key`:**

| Hacer | No hacer |
|-------|----------|
| Usar IDs únicos de los datos | Usar el índice del array como key (cuando el orden puede cambiar) |
| Asignar `key` al elemento raíz del map | Asignar `key` a elementos anidados |
| Keys únicas entre hermanos | Keys únicas globalmente (no es necesario) |

**¿Por qué no usar el índice como key?**
```jsx
// ❌ Evitar si los elementos pueden reordenarse o eliminarse
{movies.map((movie, index) => (
    <div key={index}>...</div>
))}

// ✅ Mejor usar un identificador único
{movies.map((movie) => (
    <div key={movie.id}>...</div>
))}
```

Si usas el índice y los elementos se reordenan, React puede confundir qué elemento es cuál, causando bugs visuales o de estado.

</details>

