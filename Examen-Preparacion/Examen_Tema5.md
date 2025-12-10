# Preguntas de Examen - Tema 5: Hooks de React (useState, useEffect, Custom Hooks y Context)

## Pregunta 1: useState y Re-renderizado de Componentes

**Observa la siguiente estructura de componentes con prop drilling:**

```jsx
// App.jsx
function App() {
    const [contador, setContador] = useState(0);
    
    return (
        <div>
            <Header titulo="Mi App" />
            <Contenido contador={contador} />
            <Footer />
        </div>
    );
}

// Header.jsx
const Header = ({ titulo }) => {
    console.log("Header renderizado");
    return <h1>{titulo}</h1>;
};

// Contenido.jsx
const Contenido = ({ contador }) => {
    console.log("Contenido renderizado");
    return (
        <div>
            <Contador valor={contador} />
            <Info />
        </div>
    );
};

// Contador.jsx
const Contador = ({ valor }) => {
    console.log("Contador renderizado");
    return <p>Valor: {valor}</p>;
};

// Info.jsx
const Info = () => {
    console.log("Info renderizado");
    return <p>Información estática</p>;
};

// Footer.jsx
const Footer = () => {
    console.log("Footer renderizado");
    return <footer>© 2025</footer>;
};
```

**Si se ejecuta `setContador(contador + 1)`, ¿qué componentes se re-renderizarán?**

**Opciones:**

- a) Solo `Contador`, porque es el único que usa el valor del estado
- b) `App`, `Header`, `Contenido`, `Contador`, `Info` y `Footer` (todos los componentes)
- c) Solo `App` y `Contador`
- d) `App`, `Contenido` y `Contador`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `App`, `Header`, `Contenido`, `Contador`, `Info` y `Footer` (todos los componentes)**

**Explicación:**

Cuando un estado cambia en React:

1. **El componente que tiene el estado se re-renderiza** (`App`)
2. **Todos sus componentes hijos se re-renderizan** por defecto, independientemente de si usan o no el estado

Esto significa que cuando `setContador` se ejecuta:
- `App` se re-renderiza (tiene el estado)
- `Header` se re-renderiza (es hijo de App)
- `Contenido` se re-renderiza (es hijo de App)
- `Contador` se re-renderiza (es hijo de Contenido)
- `Info` se re-renderiza (es hijo de Contenido)
- `Footer` se re-renderiza (es hijo de App)

**¿Cómo evitar re-renderizados innecesarios?**

```jsx
// Usar React.memo para componentes que no necesitan re-renderizarse
const Header = React.memo(({ titulo }) => {
    console.log("Header renderizado");
    return <h1>{titulo}</h1>;
});

const Footer = React.memo(() => {
    console.log("Footer renderizado");
    return <footer>© 2025</footer>;
});
```

Con `React.memo`, `Header` y `Footer` solo se re-renderizarían si sus props cambian.

</details>

---

## Pregunta 2: useEffect y Array de Dependencias

**Analiza el siguiente componente. ¿Cuántas veces se ejecutará el `console.log` dentro de cada useEffect si el usuario cambia `selectedCity` de "madrid" a "barcelona"?**

```jsx
function App() {
    const [selectedCity, setSelectedCity] = useState('madrid');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Efecto A
    useEffect(() => {
        console.log("Efecto A: Sin dependencias");
    }, []);

    // Efecto B
    useEffect(() => {
        console.log("Efecto B: Dependencia selectedCity");
        loadMovies();
    }, [selectedCity]);

    // Efecto C
    useEffect(() => {
        console.log("Efecto C: Sin array de dependencias");
    });

    // Efecto D
    useEffect(() => {
        console.log("Efecto D: Múltiples dependencias");
    }, [selectedCity, isLoading]);

    const loadMovies = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMovies([{ id: 1, name: "Película" }]);
        setIsLoading(false);
    };

    return <div>{selectedCity}</div>;
}
```

**Opciones:**

- a) A: 0 veces, B: 1 vez, C: 1 vez, D: 1 vez
- b) A: 0 veces, B: 1 vez, C: 3 veces, D: 3 veces
- c) A: 1 vez, B: 1 vez, C: 1 vez, D: 1 vez
- d) A: 0 veces, B: 1 vez, C: 2 veces, D: 2 veces

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) A: 0 veces, B: 1 vez, C: 3 veces, D: 3 veces**

**Explicación:**

Cuando `selectedCity` cambia de "madrid" a "barcelona", sucede lo siguiente:

| Efecto | Array de dependencias | Comportamiento | Ejecuciones |
|--------|----------------------|----------------|-------------|
| A | `[]` | Solo se ejecuta en el montaje inicial | 0 (ya se ejecutó al montar) |
| B | `[selectedCity]` | Se ejecuta cuando `selectedCity` cambia | 1 (cambió de madrid a barcelona) |
| C | Sin array | Se ejecuta en **cada** renderizado | 3 (cambio ciudad + setIsLoading(true) + setIsLoading(false)) |
| D | `[selectedCity, isLoading]` | Se ejecuta cuando cualquiera cambia | 3 (ciudad + isLoading true + isLoading false) |

**Flujo detallado:**

1. `setSelectedCity('barcelona')` → Re-render → B, C y D se ejecutan
2. Dentro de `loadMovies`: `setIsLoading(true)` → Re-render → C y D se ejecutan
3. Después del timeout: `setIsLoading(false)` → Re-render → C y D se ejecutan

**Reglas de useEffect:**

| Sintaxis | Cuándo se ejecuta |
|----------|-------------------|
| `useEffect(() => {}, [])` | Solo al montar el componente |
| `useEffect(() => {}, [dep])` | Al montar + cuando `dep` cambia |
| `useEffect(() => {})` | En **cada** renderizado (¡evitar!) |

</details>

---

## Pregunta 3: Custom Hooks - Reglas y Definición

**Observa los siguientes fragmentos de código. ¿Cuál es un custom hook válido según las reglas de React?**

**Opción A:**
```jsx
const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            });
    }, []);

    return { movies, loading };
};
```

**Opción B:**
```jsx
const getMovies = () => {
    const [movies, setMovies] = useState([]);
    return { movies, setMovies };
};
```

**Opción C:**
```jsx
const useMovies = (city) => {
    let movies = [];
    
    if (city === 'madrid') {
        const [data, setData] = useState([]);
        movies = data;
    }
    
    return { movies };
};
```

**Opción D:**
```jsx
class useMovies {
    constructor() {
        this.movies = [];
    }
    getMovies() {
        return this.movies;
    }
}
```

**Opciones:**

- a) Solo la Opción A es válida
- b) Las opciones A y B son válidas
- c) Las opciones A, B y C son válidas
- d) Todas las opciones son válidas

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: a) Solo la Opción A es válida**

**Explicación:**

**Reglas de los Custom Hooks:**

| Regla | Descripción |
|-------|-------------|
| 1. Nombre con "use" | Debe empezar con `use` (ej: `useMovies`, `useAuth`) |
| 2. Es una función | No una clase ni otro tipo de estructura |
| 3. Puede usar otros hooks | `useState`, `useEffect`, `useContext`, etc. |
| 4. Hooks incondicionales | Los hooks NO pueden estar dentro de condicionales, bucles o funciones anidadas |

**Análisis de cada opción:**

**Opción A ✅ Válida:**
- Nombre correcto: `useMovies`
- Es una función
- Usa hooks (`useState`, `useEffect`) correctamente
- Retorna valores útiles

**Opción B ❌ Inválida:**
- El nombre `getMovies` **no empieza con "use"**
- React no lo reconocerá como hook y no aplicará las reglas de hooks
- Causará errores o comportamiento inesperado

**Opción C ❌ Inválida:**
- Viola la regla: **hooks dentro de condicionales**
- `useState` está dentro de un `if`, lo cual está prohibido
- Los hooks deben ejecutarse siempre en el mismo orden

**Opción D ❌ Inválida:**
- Es una **clase**, no una función
- Los hooks solo funcionan con componentes funcionales y funciones
- No puede usar `useState`, `useEffect`, etc.

**¿Por qué los hooks no pueden estar en condicionales?**

React rastrea los hooks por el **orden** en que se llaman. Si un hook está en un condicional, el orden puede cambiar entre renderizados, causando bugs.

</details>

---

## Pregunta 4: Prop Drilling vs Context

**Compara las siguientes dos implementaciones. En la primera hay prop drilling, en la segunda se usa Context.**

**Implementación A - Prop Drilling:**
```jsx
// App.jsx
function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    );
}

// Header.jsx
const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className={darkMode ? 'dark' : ''}>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
    );
};

// Nav.jsx
const Nav = ({ darkMode, setDarkMode }) => {
    return (
        <nav>
            <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
    );
};

// ToggleButton.jsx (el único que realmente usa setDarkMode)
const ToggleButton = ({ darkMode, setDarkMode }) => {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};
```

**Implementación B - Context:**
```jsx
// GlobalContext.jsx
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(prev => !prev);
    
    return (
        <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </GlobalContext.Provider>
    );
};

// App.jsx
function App() {
    return (
        <GlobalProvider>
            <Header />
            <Main />
            <Footer />
        </GlobalProvider>
    );
}

// ToggleButton.jsx
const ToggleButton = () => {
    const { darkMode, toggleDarkMode } = useContext(GlobalContext);
    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};
```

**¿Cuál es la principal ventaja de usar Context sobre prop drilling?**

**Opciones:**

- a) Context es más rápido en rendimiento porque evita re-renderizados
- b) Context evita pasar props a través de componentes intermedios que no las necesitan
- c) Context permite usar estados locales dentro de cada componente
- d) Context hace que el código sea más difícil de mantener pero más seguro

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Context evita pasar props a través de componentes intermedios que no las necesitan**

**Explicación:**

**El problema del Prop Drilling:**

En la Implementación A, `Header` y `Nav` reciben `darkMode` y `setDarkMode` **solo para pasarlos** a `ToggleButton`. Estos componentes intermedios:
- No usan realmente estas props
- Se acoplan innecesariamente al estado
- Si se necesita añadir una nueva prop, hay que modificar toda la cadena

```
App (tiene el estado)
  └── Header (pasa props) ❌ No las usa
        └── Nav (pasa props) ❌ No las usa
              └── ToggleButton (usa props) ✅ Las necesita
```

**La solución con Context:**

Con Context, cualquier componente puede acceder directamente al estado:

```
GlobalProvider (tiene el estado)
  └── App
        └── Header
              └── Nav
                    └── ToggleButton (useContext) ✅ Acceso directo
```

**Comparativa:**

| Aspecto | Prop Drilling | Context |
|---------|---------------|---------|
| Componentes intermedios | Reciben y pasan props | No se ven afectados |
| Mantenibilidad | Difícil de mantener en apps grandes | Más limpio y escalable |
| Acoplamiento | Alto (componentes conocen props de otros) | Bajo |
| Rendimiento | Similar* | Similar* |
| Uso recomendado | Pocos niveles de anidamiento | Estado global o muy anidado |

*Nota sobre rendimiento: Context **no** evita re-renderizados automáticamente. Cuando el valor del Context cambia, todos los componentes que usan `useContext` se re-renderizan.

</details>

---

## Pregunta 5: useContext y Re-renderizado con Context

**Dado el siguiente código con Context, ¿qué componentes se re-renderizarán cuando se ejecute `toggleDarkMode()`?**

```jsx
// GlobalContext.jsx
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [city, setCity] = useState('madrid');
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => setDarkMode(prev => !prev);
    const changeCity = (newCity) => setCity(newCity);
    
    return (
        <GlobalContext.Provider value={{ city, darkMode, toggleDarkMode, changeCity }}>
            {children}
        </GlobalContext.Provider>
    );
};

// App.jsx
function App() {
    console.log("App renderizado");
    return (
        <GlobalProvider>
            <Header />
            <Landing />
            <Footer />
        </GlobalProvider>
    );
}

// Header.jsx - USA el contexto
const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(GlobalContext);
    console.log("Header renderizado");
    return (
        <header className={darkMode ? 'dark' : ''}>
            <button onClick={toggleDarkMode}>Toggle</button>
        </header>
    );
};

// Landing.jsx - USA el contexto
const Landing = () => {
    const { city } = useContext(GlobalContext);
    console.log("Landing renderizado");
    return <main>Ciudad: {city}</main>;
};

// Footer.jsx - NO usa el contexto
const Footer = () => {
    console.log("Footer renderizado");
    return <footer>© 2025</footer>;
};
```

**Opciones:**

- a) Solo `Header`, porque es el único que usa `darkMode`
- b) `Header` y `Landing`, porque ambos usan `useContext(GlobalContext)`
- c) `GlobalProvider`, `Header`, `Landing` y `Footer`
- d) Todos los componentes: `App`, `Header`, `Landing` y `Footer`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `Header` y `Landing`, porque ambos usan `useContext(GlobalContext)`**

**Explicación:**

Cuando cambia cualquier valor en el Context (en este caso `darkMode`):

1. **`GlobalProvider`** se re-renderiza (tiene el estado)
2. **Todos los componentes que usan `useContext(GlobalContext)`** se re-renderizan
3. Los componentes que **no** usan el contexto **no** se re-renderizan

**Análisis por componente:**

| Componente | Usa useContext | Se re-renderiza | Razón |
|------------|----------------|-----------------|-------|
| App | ❌ No | ❌ No | No es hijo de Provider, lo envuelve |
| Header | ✅ Sí | ✅ Sí | Suscrito al contexto |
| Landing | ✅ Sí | ✅ Sí | Suscrito al contexto |
| Footer | ❌ No | ❌ No | No usa el contexto |

**Importante:** `Landing` se re-renderiza aunque solo use `city` (que no cambió). Esto es porque **cualquier cambio** en el objeto `value` del Provider causa re-renderizado de todos los suscriptores.

**¿Cómo optimizar?**

Para evitar que `Landing` se re-renderice cuando solo cambia `darkMode`:

1. **Separar contextos:** Un contexto para `darkMode`, otro para `city`
2. **Usar `React.memo`** con comparación de props
3. **Usar bibliotecas de estado** como Zustand o Jotai que optimizan suscripciones

```jsx
// Separar en dos contextos
const ThemeContext = createContext(); // darkMode
const CityContext = createContext();  // city

// Ahora Landing solo se re-renderiza si city cambia
const Landing = () => {
    const { city } = useContext(CityContext);
    // ...
};
```

</details>

