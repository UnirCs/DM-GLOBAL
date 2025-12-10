# Preguntas de Examen - Tema 6: React Router

## Pregunta 1: Rutas Básicas y Coincidencia Exacta

**Dado el siguiente enrutador, ¿qué componente se renderizará cuando la URL sea `/about`?**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}
```

**Opciones:**

- a) `HomePage` y `AboutPage`, porque `/about` también coincide con `/`
- b) Solo `AboutPage`
- c) `AboutPage` y `TeamPage`, porque ambas empiezan con `/about`
- d) Ninguno, porque las rutas deben tener el atributo `exact`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Solo `AboutPage`**

**Explicación:**

En React Router v6, **todas las rutas son exactas por defecto**. Esto significa que:

| URL | Ruta que coincide | Componente renderizado |
|-----|-------------------|------------------------|
| `/` | `path="/"` | `HomePage` |
| `/about` | `path="/about"` | `AboutPage` |
| `/about/team` | `path="/about/team"` | `TeamPage` |
| `/contact` | `path="/contact"` | `ContactPage` |

**Diferencia con React Router v5:**

```jsx
// React Router v5 - Se necesitaba "exact"
<Route exact path="/" component={HomePage} />
<Route path="/about" component={AboutPage} />

// React Router v6 - Todas son exactas por defecto
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
```

**Nota importante:** En v6, si quieres que una ruta coincida con rutas hijas (comportamiento no exacto), debes usar `/*`:

```jsx
// Coincide con /about, /about/team, /about/history, etc.
<Route path="/about/*" element={<AboutPage />} />
```

</details>

---

## Pregunta 2: Rutas Dinámicas y useParams

**Observa el siguiente código. Si la URL es `/movie/42/session/18:00`, ¿cuál será el valor de las variables `id` y `time`?**

```jsx
// App.jsx
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/movie/:id/session/:time" element={<SeatSelection />} />
            </Routes>
        </Router>
    );
}

// SeatSelection.jsx
import { useParams } from 'react-router-dom';

const SeatSelection = () => {
    const { id, time } = useParams();
    
    return (
        <div>
            <p>Movie ID: {id}</p>
            <p>Session Time: {time}</p>
        </div>
    );
};
```

**Opciones:**

- a) `id = "42"`, `time = "18:00"`
- b) `id = 42`, `time = "18:00"` (id es número, time es string)
- c) `id = undefined`, `time = undefined` (useParams no funciona con múltiples parámetros)
- d) Error: no se pueden tener dos parámetros dinámicos en la misma ruta

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: a) `id = "42"`, `time = "18:00"`**

**Explicación:**

El hook `useParams()` devuelve un objeto con los parámetros de la URL. **Todos los valores son siempre strings**, independientemente de si parecen números.

```jsx
// URL: /movie/42/session/18:00
// Ruta: /movie/:id/session/:time

const { id, time } = useParams();
// id = "42" (string, no number)
// time = "18:00" (string)
```

**Para convertir a número:**
```jsx
const { id } = useParams();
const movieId = parseInt(id);
// o
const movieId = Number(id);
// o
const movieId = +id;
```

**Sintaxis de rutas dinámicas:**

| Sintaxis | Descripción | Ejemplo URL | useParams() |
|----------|-------------|-------------|-------------|
| `:id` | Parámetro requerido | `/movie/42` | `{ id: "42" }` |
| `:id?` | Parámetro opcional | `/movie` o `/movie/42` | `{ id: undefined }` o `{ id: "42" }` |
| `*` | Wildcard (resto de la ruta) | `/files/docs/report.pdf` | Captura todo después |

**Múltiples parámetros son válidos:**
```jsx
<Route path="/cinema/:city/movie/:movieId/session/:time" element={<.../>} />
// URL: /cinema/madrid/movie/5/session/20:00
// useParams() = { city: "madrid", movieId: "5", time: "20:00" }
```

</details>

---

## Pregunta 3: Navegación con Link vs href

**¿Cuál de las siguientes implementaciones de navegación es CORRECTA en una aplicación React con React Router?**

**Opción A:**

```jsx
const Header = () => {
    return (
        <header>
            <a href="/">Inicio</a>
            <a href="/about">Sobre nosotros</a>
            <a href="/contact">Contacto</a>
        </header>
    );
};
```

**Opción B:**
```jsx
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre nosotros</Link>
            <Link to="/contact">Contacto</Link>
        </header>
    );
};
```

**Opción C:**
```jsx
const Header = () => {
    const goTo = (path) => {
        window.location.href = path;
    };

    return (
        <header>
            <button onClick={() => goTo('/')}>Inicio</button>
            <button onClick={() => goTo('/about')}>Sobre nosotros</button>
            <button onClick={() => goTo('/contact')}>Contacto</button>
        </header>
    );
};
```

**Opciones:**

- a) Solo la Opción A es correcta
- b) Solo la Opción B es correcta
- c) Las opciones A y B son correctas
- d) Todas las opciones son correctas

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Solo la Opción B es correcta**

**Explicación:**

En una Single Page Application (SPA) con React Router, **nunca se debe usar `<a href>` ni `window.location`** para navegación interna.

| Método | Comportamiento | Consecuencia |
|--------|---------------|--------------|
| `<a href="/about">` | Recarga completa de la página | ❌ Pierde estado de React, pierde contexto |
| `window.location.href` | Recarga completa de la página | ❌ Pierde estado de React, pierde contexto |
| `<Link to="/about">` | Navegación del lado del cliente | ✅ Mantiene estado, sin recarga |

**¿Por qué `<Link>` es la forma correcta?**

1. **No recarga la página:** Cambia la URL y renderiza el componente correspondiente sin hacer una petición al servidor
2. **Mantiene el estado:** El estado de React, contextos y datos cargados se conservan
3. **Mejor rendimiento:** No descarga de nuevo JS, CSS ni otros recursos
4. **Transiciones suaves:** Permite animaciones entre páginas

**Navegación programática con `useNavigate`:**

```jsx
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Volver atrás
    };

    const handleGoHome = () => {
        navigate('/'); // Ir a inicio
    };

    const handleGoWithState = () => {
        navigate('/checkout', { state: { movieId: 42 } });
    };

    return (
        <div>
            <button onClick={handleGoBack}>← Volver</button>
            <button onClick={handleGoHome}>Inicio</button>
        </div>
    );
};
```

**Cuándo SÍ usar `<a href>`:**
- Enlaces a páginas externas: `<a href="https://google.com">`
- Enlaces para descargar archivos
- Enlaces a secciones de la misma página (anclas): `<a href="#seccion">`

</details>

---

## Pregunta 4: Ruta por Defecto (404 / Not Found)

**Dado el siguiente enrutador, ¿qué se renderizará si el usuario navega a `/productos`?**

```jsx
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};
```

**Opciones:**

- a) `HomePage`, porque `/productos` coincide parcialmente con `/`
- b) `NotFoundPage`, porque ninguna ruta específica coincide con `/productos`
- c) Nada, la aplicación mostrará una página en blanco
- d) Error de React Router: ruta no definida

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `NotFoundPage`, porque ninguna ruta específica coincide con `/productos`**

**Explicación:**

La ruta `path="*"` es un **wildcard** (comodín) que coincide con cualquier URL que no haya sido capturada por las rutas anteriores.

**Orden de evaluación en React Router v6:**

React Router v6 utiliza un algoritmo de puntuación para determinar la ruta más específica, no importa el orden en que se declaren:

| Ruta | Puntuación | Especificidad |
|------|------------|---------------|
| `/about` | Alta | Ruta específica |
| `/movie/:id` | Media | Tiene parámetro dinámico |
| `/*` o `*` | Baja | Wildcard (coincide con todo) |

```jsx
// Estas dos configuraciones son equivalentes:

// Opción 1: Wildcard al final
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
</Routes>

// Opción 2: Wildcard al principio (React Router v6 lo maneja igual)
<Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
```

**Usos comunes del wildcard:**

```jsx
// 404 - Página no encontrada
<Route path="*" element={<NotFoundPage />} />

// Redirección por defecto
<Route path="*" element={<Navigate to="/" replace />} />

// Rutas anidadas que capturan subrutas
<Route path="/docs/*" element={<Documentation />} />
```

</details>

---

## Pregunta 5: caseSensitive en Rutas

**Dado el siguiente enrutador con la propiedad `caseSensitive`, ¿qué se renderizará para cada URL?**

```jsx
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/About" element={<AboutPage />} caseSensitive />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
```

**URLs a evaluar:**
1. `/About`
2. `/about`
3. `/CONTACT`
4. `/contact`

**Opciones:**

- a) 1: `AboutPage`, 2: `AboutPage`, 3: `ContactPage`, 4: `ContactPage`
- b) 1: `AboutPage`, 2: `NotFoundPage`, 3: `ContactPage`, 4: `ContactPage`
- c) 1: `AboutPage`, 2: `NotFoundPage`, 3: `NotFoundPage`, 4: `ContactPage`
- d) 1: `NotFoundPage`, 2: `AboutPage`, 3: `ContactPage`, 4: `ContactPage`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) 1: `AboutPage`, 2: `NotFoundPage`, 3: `ContactPage`, 4: `ContactPage`**

**Explicación:**

La propiedad `caseSensitive` hace que la ruta distinga entre mayúsculas y minúsculas. Por defecto, las rutas en React Router **NO son case sensitive**.

| URL | Ruta | caseSensitive | Resultado |
|-----|------|---------------|-----------|
| `/About` | `/About` | ✅ Sí | `AboutPage` ✅ (coincide exactamente) |
| `/about` | `/About` | ✅ Sí | `NotFoundPage` ❌ (no coincide, diferente case) |
| `/CONTACT` | `/contact` | ❌ No (default) | `ContactPage` ✅ (ignora mayúsculas) |
| `/contact` | `/contact` | ❌ No (default) | `ContactPage` ✅ (coincide) |

**Comportamiento por defecto vs caseSensitive:**

```jsx
// Sin caseSensitive (por defecto)
<Route path="/about" element={<About />} />
// Coincide con: /about, /About, /ABOUT, /AbOuT

// Con caseSensitive
<Route path="/about" element={<About />} caseSensitive />
// Solo coincide con: /about
```

**Aplicar caseSensitive a todas las rutas:**

```jsx
// Opción 1: En cada Route
<Route path="/about" element={<About />} caseSensitive />
<Route path="/contact" element={<Contact />} caseSensitive />

// Opción 2: En el componente Routes (aplica a todas las rutas hijas)
<Routes caseSensitive>
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
</Routes>
```

**¿Cuándo usar caseSensitive?**
- APIs que distinguen mayúsculas/minúsculas
- URLs que deben ser exactas por SEO
- Sistemas donde `/User` y `/user` son recursos diferentes

</details>

