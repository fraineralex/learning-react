<aside>
💡 Curso completo de React impartido por midudev

</aside>

# 🚀 Introducción

React es una biblioteca de código abierto de interfaces de usuario creada por Meta, su creador fue **Jordan Walke** que no permite de forma declarativa componetizar nuestras interfaces. 

En https://reactjs.wiki están las preguntas frecuentes de React en español para cualquier consulta.

React nos permite evitar ataques XSS Cross Site Scripting. XSS ****ocurre cuando un atacante es capaz de inyectar un script, normalmente JavaScript, en el output de una aplicación web de forma que se ejecuta en el navegador del cliente.

### Por qué React?

El problema de escribir JavaScript vanilla es que escribimos código imperativo donde le damos una serie de instrucciones sobre que hacer, mientras que con react lo hacemos de forma declarativa.

### Usando React

Para usar react podemos usar empaquetadores para que nos ayuden, pero también podemos hacerlo manualmente con JavaScript vanilla, esto se hace importando react-dom para controlar el DOM y luego importando react.

**Ejemplo**:

```jsx
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

const appDomElement = document.getElementById('app')
const root = ReactDom.createRoot(appDomElement)
root.render('Hello World!')
```

En React no puedes renderizar html para evitar la inyección de código externo y por esto debemos crear elementos y retornar texto.

### JSX

JSX es una extensión de ECMAScript basada en xml que nos permite crear nuestros elementos de una forma más declarativa.

En React un componente es una función que devuelve un componente, los nombre de los componentes deben definirse en pascal case, ejemplo: **LikeButon**. porque esta es la forma en la que el interprete diferencia los componentes de React de los atributos html.

**Cases**: `PascalCase`, `camelCase`, `snake_case`, `kebab-case`

A los componentes también puedes pasarle elementos como props que se renderizarán sin problemas, la diferencia en React entre un elemento y un componente es que un componente es una factoría de elementos y un elemento es lo que renderiza React.

Las props que reciben los componentes deben ser inmutables, en lugar de modificar la prop podemos mejor crear una variable o una constante.

Nuestros componentes también pueden envolver children , los cuales pueden ser texto, elementos u otros componentes. para recuperar el children simplemente tenemos que incluirlo en las props con la palabra clave **children.**

### Virtual DOM

La magia de React es que gracias al virtual **Document Object Model** (DOM) el puede notar exactamente los nuevos cambios y solo afectar aquello que cambia de una forma quirúrgica. 

Estos componentes se vuelven a renderizar si pasa 3 cosas, el estado interno del componente cambia, se renderiza el componente padre y por lo tanto se propaga hacia abajo o si cambian las props.

## 🪝 Hooks

En react los hooks son una utilidades que nos permiten ejecutar código arbitrario en nuestros componentes a partir de acciones especificas. Los hooks son una forma de reutilizar la lógica de estado y efectos secundarios en los componentes funcionales de una manera más simple y declarativa.

### ⚓ useState

es un hook de React que permite a los componentes funcionales gestionar y mantener su propio estado interno. Puedes usarlo para declarar variables de estado y acceder a ellas en tus componentes funcionales. La función **`useState`** devuelve un array con dos elementos: el estado actual y una función para actualizar ese estado.

Ejemplo del uso de un `useState` en un componente de React:

```jsx
import { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // <--

  const text = isFollowing ? 'Siguiendo' : 'Seguir' // <--

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing) // <--
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
```

### ⚓ **useEffect**

Es un hook de React que permite realizar efectos secundarios en componentes funcionales. Puedes usarlo para ejecutar código en respuesta a cambios en el componente, como realizar solicitudes a una API, suscribirte a eventos o actualizar el DOM. **`useEffect`** recibe una función como argumento y se ejecuta después de que el componente se renderiza o cuando ciertas dependencias cambian.

Ejemplo del uso de un `useEffect` en un componente de React:

```jsx
import { useState, useEffect} from 'react'

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);
  
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
```

### ⚓ **useRef**

Es un hook de React que permite crear una referencia mutable que persiste durante todo  el ciclo de vida de los componentes, la cual nos resulta muy util para guardar cualquier valor que podamos mutar y que cada vez que cambia, no vuelva a renderizar el componente. Esto es lo que lo diferencia directamente del `useState`, porque el `useState` cada vez que cambia se renderiza el componente, pero el `useRef` cada vez vez cambia no dispara un nuevo renderizado del componente.

**Ejemplo:**

```jsx
import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search); // <--

  const getMovies = async () => {
		// If the current search is the same to before search: return
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
```

### ⚓ ****useMemo****

El hook `useMemo` es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado.

**Ejemplo:**

```jsx
import { useMemo } from 'react'

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count])

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  )
}
```

En este caso, el componente `Counter` recibe una prop `count` que es un número. El componente calcula el doble de ese número y lo muestra en pantalla.

El hook `useMemo` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count`.

La ventaja es que si la prop `count` no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.

### ⚓ ****useCallback****

El hook `useCallback` es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

**Ejemplo:**

```jsx
import { useCallback } from 'react'

function Counter({ count, onIncrement }) {
  const handleIncrement = useCallback(() => {
    onIncrement(count)
  }, [count, onIncrement])

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}
```

En este caso, el componente `Counter` recibe una prop `count` que es un número y una prop `onIncrement` que es una función que se ejecuta cuando se pulsa el botón.

El hook `useCallback` recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop `count` o la prop `onIncrement`.

La ventaja es que si la prop `count` o la prop `onIncrement` no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.

### ⚓ ****useId****

`useId` es un hook para generar identificadores únicos que se pueden pasar a los atributos de las etiquetas HTML y es especialmente útil para accesibilidad.

Llama `useId` en el nivel superior del componente para generar una ID única.

**Ejemplo:**

```jsx
import { useId } from 'react'
function PasswordField() {
  const passwordHintId = useId()
  // ...
```

A continuación, pasa el ID generado a diferentes atributos:

```jsx
<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
```

La etiqueta `aria-describedby` te permite especificar que dos etiquetas están relacionadas entre sí, puede generar una identificación única con useId donde incluso si `PasswordField` aparece varias veces en la pantalla, las identificaciones generadas no chocarán.

El ejemplo completo sería así:

```jsx
import { useId } from 'react'

function PasswordField() {
  const passwordHintId = useId()

  return (
    <>
      <label>
        Password:
        <input
          type="password"aria-describedby={passwordHintId}/>
      </label>
      <p id={passwordHintId}>
        El password debe ser de 18 letras y contener caracteres especiales
      </p>
    </>)
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>)
}
```

Como ves en `App` estamos usando el componente dos veces. Si pusieramos una id a mano, por ejemplo `password`, entonces la ID no sería única y quedaría duplicada. Por eso es importante que generes la ID automáticamente con `useId`.

### ⚓ useContext

El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

Para crear un contexto en React usamos el hook `createContext`:

```jsx
import { createContext } from 'react'

const ThemeContext = createContext()
```

Para usar el contexto, debemos envolver el árbol de componentes con el componente `Provider`:

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

Para consumir el contexto, debemos usar el hook `useContext`:

```jsx
import { useContext } from 'react'

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Haz clic aquí</button>}
```

### ⚓ useReducer

Es un hook en React que se utiliza para administrar el estado de un componente utilizando un enfoque basado en la acción y la reducción (similar a Redux). A menudo se prefiere sobre **`useState`** cuando el estado de un componente es más complejo o cuando las actualizaciones del estado dependen del estado anterior o de acciones previas.

**`useReducer`** acepta dos argumentos: una función reductora y el estado inicial. La función reductora recibe dos argumentos: el estado actual y una acción que describe cómo debe cambiar el estado. La función reductora devuelve el nuevo estado.

**Ejemplo:**

```jsx
import React, { useReducer } from 'react';

// Definimos la función reductora
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Usamos useReducer para gestionar el estado del contador
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

En este ejemplo, hemos creado una función reductora llamada **`counterReducer`** que toma el estado actual y una acción como entrada y devuelve el nuevo estado. Luego, utilizamos **`useReducer`** en el componente **`Counter`** para administrar el estado del contador. Cuando hacemos clic en los botones "Increment" o "Decrement", se despacha una acción que modifica el estado a través de la función reductora.

**`useReducer`** es útil cuando tienes un estado complejo que necesita ser actualizado de manera más controlada o cuando las actualizaciones del estado dependen del estado actual o de acciones previas. También puede ser beneficioso cuando estás trabajando en una aplicación grande con múltiples componentes que necesitan acceder y modificar el mismo estado global.

## 📝Linters

Los linters son herramientas de software diseñadas para analizar el código fuente de un programa o archivo y detectar posibles problemas, errores o convenciones de estilo que no se ajusten a las normas predefinidas o a las buenas prácticas de programación.

Opcionalmente podemos inicializar un linter fácilmente desde la consola indicando desde allí todas las configuraciones con las que queremos trabajar como el lenguaje de programación, el framework, el estilo que queremos usar, entre otras cosas, para hacerlo solo necesitamos ejecutar el siguiente comando:

```bash
npx eslint --init
```

### Standard

Es un conjunto de reglas y un linter para JavaScript que se utiliza para aplicar un estilo de codificación consistente y mejorar la calidad del código en proyectos de JavaScript.

Para configurar el linter standard js necesitamos primero instalarlo en nuestro proyecto como dependencia de desarrollo, se puede hacer de la siguiente manera mediante npm:

```bash
npm install standard -D
```

Luego en nuestro archivo package.json debemos agregamos esta configuración:

```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

Tambien necesitamos tener instalada la extensión en **vscode** `ESLint` y ya debería detectar todos los errores.

## ⚛️ Configurar React desde cero

Para configurar react desde cero sin ningún template, por ejemplo podemos hacer esto fácilmente con vite de la siguiente manera:

primero iniciamos un proyecto de vite e instalamos el plugin de react

```bash
npm createvite@latest
	- Project name: react-example
	- Select a framework: Vanilla
	- Select a variant: JavaScript
```

Una vez creado acceder e instalar las dependencias:

```bash
cd react-example
npm install
npm run dev
```

Luego puedes instalar el plugin de react y abrimos vscode:

```bash
npm install @vite/plugin-react -E
code .
```

Luego para configurar react necesitamos instalar dos dependencias, las cuales son `react` y `react-dom`:

```bash
npm install react react-dom -E
```

Luego creamos nuestro archivo de configuración de vite en la raíz de nuestro proyecto, este archivo se debe llamar: `vite.config.js`. En nuestros archivo de vite hacemos lo siguiente.

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()]
})
```

Luego de esto debes identificar el archivo que funciona como punto de entrada de la aplicación para configurar react, en este caso al ser un proyecto de vite este archivo ya estará presente y linkiado al `index.html`, el archivo se llama: `main.js`. En este archivo debes hacer lo siguiente:

```jsx
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app')
root.render(<h1>Hello, world!</h1>)
```

Por ultimo al ser un proyecto de react debemos cambiar el extension name del archivo que funciona como punto de entrada de `main.js` a `main.jsx` para que vite pueda transpilar correctamente nuestra sintaxis de react, debes recordar cambiar la importación en el `inde.html` también de `src="/main.js"` a `src="/main.jsx"`.

Ahora al correr la aplicación deberíamos ver el `Hello, World` en el navegador.

## 🎯 Buenas y malas prácticas

1. En React es una mala practica compartir la función de actualizar el estado fuera de nuestro componente, por ende no debemos pasarla como parámetro a ninguna función o componente.
2. Cuando necesitamos separar lógica de react casi siempre es más recomendable hacerlo mediante un custom hook.
3. Las funciones normales no pueden usar los hooks de react, por lo tanto si necesitas separar alguna lógica que que use algún hook debes crear un custom hook.
4. No es bueno que los `useEffect` tengan muchas responsabilidades, mejor crear varios `useEffect` cada uno con sus responsabilidades especificas y sus dependencias bien definidas.
5. No se pueden definir hooks dentro de condiciones o bucles, estos siempre se deben declarar en el mismo orden para no confundir a React, puesto que se guardan en el mismo orden que se definen.
6. No es buena idea exportar la función que actualiza algún estado en nuestro custom hook desde fuera a no se que sea necesario, generalmente no es buena idea exponerlos nuestros estados internos de forma que se pueda cambiar desde fuera.
7. No es buena practica definir los nombres de nuestros custom hooks atados a una implementación, porque al ser una caja negra el contrato es lo que devuelve, no como lo hace. Ejemplo en lugar de llamar un custom hook `useFetchCatFact` deberíamos llamarlo `useCatFact` porque el día de mañana podría usar `GraphQL` u otra cualquier implementación diferente a un fetch.
8. Normalmente cuando tengas un `useEffect` pregúntate si necesita ser separado en un custom hook, porque generalmente contienen un conjunto de lógica o cálculos que podrían ser reutilizables y tenerlos a parte.
9. Es una buena practica no adherirse únicamente al contrato de nuestra api cuando hacemos fetching de datos en nuestros componentes internos, mejor podemos hacer un mapeo de datos y así si el día de mañana cambiamos de api o la propia api cambia solo debemos cambiar nuestro fetch y/o propiedades y todos nuestros componentes seguirían funcionando igual.
10. En React cada vez que cambia el estado interno de un componente se vuelven a crear las funciones, se inicializan las variables y se calcula todo de nuevo, una mala practica es no identificar aquellas funciones o lógica que no necesita ser recreada en cada render para mejorar el rendimiento de la aplicación. Esto se hace mediante el useMemo.

## 🧪 Tests E2E

En el contexto de una aplicación React, las pruebas E2E se utilizan para probar la interacción completa de la aplicación, incluida la navegación entre páginas, la entrada de datos, la realización de acciones y la verificación de que la aplicación proporciona las respuestas correctas y se comporta correctamente en diferentes situaciones.

Para hacer un test e2e podemos utilizar varios frameworks que nos permiten realizar nuestros test fácilmente, entre los que se encuentran: **Cypress, Selenium, Playwright,** entre otros.

Para realizar un test e2e  en nuestro proyecto de react con playwright, debemos hacer lo siguiente:

iniciar el proyecto de `playwright` mediante `npm`:

```bash
npm init playwright@latest
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Installing Playwright Test (npm install --save-dev @playwright/test)…
npm WARN workspaces react-prueba-tecnica in filter set, but no workspace folder present
```

Una vez inicializado playwright en nuestro proyecto podemos proceder con la creación de nuestros tests, ejemplo:

```jsx
// @ts-check
const { test, expect } = require("@playwright/test");

const LOCALHOST_URL = "http://127.0.0.1:5173/";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
```

Recuerda que playwright usa CommonJS y nuestros proyectos de React usan ECMAScript Modules, por lo tanto puede que esto te de error, puedes resolverlo cambiando el extension name de `js` a `cjs` para cambiarlo a CommonJS.

Luego para correr los tests solo necesitamos ejecutar el siguiente comando:

```bash
npm playwright test
```

### Cómo recuperar los inputs de un formulario facilmente?

- **Forma no controlada**

Hay varias formas de recuperar los inputs de un formulario en React, pero la forma más fácil y menos costosa es  hacerlo recibiéndolo directamente desde el DOM de una forma no controlada. Esto lo hacemos recibiendo en una función nuestro formulario y desde allí acceder a los campos del mismo.

Decimos que es de forma no controlado porque somos nosotros mismos quienes implementaremos todas las validaciones y no React directamente.

******************Ejemplo:******************

```jsx
import "./App.css";

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log({ query });
  };

  return (
    <div className="page">
      <header>
        <h1>Search your movie</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, SatrWars, Matrix..." />
          <button type="submit">Search</button>
        </form>
      </header>
  );
}

export default App;
```

- ********************************Forma controlada********************************

Tambien podemos hacer esto de forma controlada por React, lo cual nos facilitaría muchas cosas, como por ejemplo las validaciones ya que podríamos tener en un `useState` nuestro input y condicionarlo como queramos o incluso ponerlo como dependencia de un `useEffect.`  La desventaja de esto es que nuestro componente se renderizaría cada vez que el usuario escriba en los inputs y esto en una aplicación grande podría ser un problema en el rendimiento.

**Ejemplo:**

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const newQuery = event.target.value;

    // Validations
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery);
  }

  return (
    <div className="page">
      <header>
        <h1>Search your movie</h1>
        <form className="form">
          <input onChange={handleChange} value={query} name="query" placeholder="Avengers, SatrWars, Matrix..." />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;
```

### Cómo hacer un grid responsive en css?

Para hacer un grid responsive en css necesitamos hacer un display grid en nuestro contenedor y luego establecer la plantilla en con la que queremos que se muestren nuestras columnas, diciendole que se repita en `auto-fit` o `auto-fill` segun corresponda para que se ajuste automaticamete y estab;eciendole un minimo y maximo a ocupar según corresponda.

**Ejemplo:**

```css
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 32px;
}
```

## 🔩 Patrones de Flujo

Los **patrones de flujo** en React se refieren a enfoques y técnicas utilizados para gestionar y controlar cómo fluyen y se comparten los datos dentro de una aplicación construida con React. Estos patrones ayudan a mantener un flujo de datos organizado y predecible, lo que es esencial para desarrollar aplicaciones escalables y mantenibles.

### Props Driling

En React se refieren a un patrón en el que los datos se pasan desde un componente principal a través de múltiples niveles de componentes secundarios para llegar a un componente que necesita esos datos. Esto puede ser necesario cuando tienes componentes anidados y deseas compartir datos entre componentes que no tienen una relación directa de padre e hijo.

El propósito principal de las `props drilling` es mantener el flujo de datos unidireccional en una aplicación de React y evitar el uso de estados globales o contextos cuando no son necesarios.

**Ejemplo sencillo de cómo funciona el `props drilling` en React:**

Supongamos que tienes una aplicación con tres componentes anidados: **`App`** (el componente principal), **`ParentComponent`**, y **`ChildComponent`**. Quieres pasar un valor llamado **`data`** desde **`App`** a **`ChildComponent`** a través de **`ParentComponent`**.

**Ejemplo:**

```jsx
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Valor de data en ChildComponent: {props.data}</p>
    </div>
  );
}

function ParentComponent(props) {
  return (
    <div>
      <p>Valor de data en ParentComponent: {props.data}</p>
      <ChildComponent data={props.data} />
    </div>
  );
}

function App() {
  const data = "Hola, soy un valor de ejemplo";

  return (
    <div>
      <h1>Aplicación de Props Drilling</h1>
      <ParentComponent data={data} />
    </div>
  );
}

export default App;
```

En este ejemplo, **`App`** es el componente principal que tiene un valor llamado **`data`**. **`App`** pasa este valor como una "prop" al componente **`ParentComponent`**, y luego **`ParentComponent`** pasa la misma "prop" a **`ChildComponent`**. De esta manera, **`ChildComponent`** tiene acceso a **`data`** a pesar de que no es el componente directamente conectado a **`App`**. Este es un ejemplo simple de cómo se realiza el "props drilling" en React.

## 📦 Dependencias interesantes

1. `**path-to-regexp**`: Es una dependencia interesante que nos permite convertir una cadena de ruta de estilo Express como /user/:name en una expresión regular. `GitHub:` https://github.com/component/path-to-regexp
2. `**vitest`: E**s una biblioteca de pruebas unitarias diseñada específicamente para aplicaciones Svelte. Svelte es un marco de trabajo para construir aplicaciones web reactivas, y Vitest proporciona herramientas y utilidades para escribir y ejecutar pruebas unitarias de componentes Svelte de manera eficiente. `GitHub:` https://github.com/vitest-dev/vitest
3. **`happy-dom`:** Happy-DOM es una implementación del Modelo de Objetos del Documento (DOM) en JavaScript que se utiliza principalmente para pruebas y desarrollo de componentes web. A diferencia del DOM en un navegador real, Happy-DOM se ejecuta en un entorno de Node.js y permite simular y manipular la estructura de la página web de manera controlada durante las pruebas de componentes y aplicaciones web.  `GitHub:` https://github.com/capricorn86/happy-dom
4. `**@testing-library/react`:** Es una biblioteca de pruebas que se utiliza para escribir pruebas unitarias y de integración en aplicaciones React. Proporciona una serie de utilidades y enfoques que fomentan las pruebas centradas en el usuario, lo que significa que se centra en probar el comportamiento y la interacción de los componentes tal como lo experimentaría un usuario real. En lugar de centrarse en los detalles de implementación interna, esta biblioteca se enfoca en probar cómo interactúa el usuario con los componentes a través de la interfaz de usuario. `GitHub:` https://github.com/testing-library/react-testing-library

## 🐌 Lazy Loading

El `lazy loading` (carga perezosa) en React se refiere a la técnica de cargar módulos o componentes de manera diferida, es decir, solo cuando se necesitan. Esto es especialmente útil cuando estás construyendo aplicaciones grandes, ya que te permite dividir el código en partes más pequeñas y solo cargar aquellas que se requieran en un momento dado. Esto puede ayudar a mejorar el rendimiento inicial de la aplicación, reduciendo el tiempo de carga inicial y permitiendo que la aplicación sea más eficiente.

La función principal de React que se utiliza para implementar el lazy loading es **`React.lazy()`**, junto con el componente **`Suspense`** para manejar la carga de forma asincrónica. **`React.lazy()`** permite cargar componentes dinámicamente cuando se necesitan. Aquí tienes un ejemplo simple de cómo se usa:

Supongamos que tienes dos componentes, **`ComponentA`** y **`ComponentB`**, y quieres cargar **`ComponentB`** de forma perezosa:

```jsx
jsxCopy code
import React, { lazy, Suspense } from 'react';

// Utiliza React.lazy para importar el componente de forma perezosa
const ComponentB = lazy(() => import('./ComponentB'));

function App() {
  return (
    <div>
      <ComponentA />
      {/* Usa Suspense para manejar la carga asincrónica */}
      <Suspense fallback={<div>Cargando...</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

export default App;

```

En este ejemplo:

1. Importamos **`React.lazy()`** y lo usamos para importar **`ComponentB`** de manera perezosa. La función que pasamos a **`React.lazy()`** debe devolver una promesa que resuelva al módulo del componente que queremos cargar.
2. Utilizamos el componente **`Suspense`** para manejar la carga asincrónica. El prop **`fallback`** especifica qué mostrar mientras se carga **`ComponentB`**. En este caso, mostramos un mensaje de "Cargando...".

Cuando el usuario accede a la parte de la aplicación que contiene **`ComponentB`**, React cargará dinámicamente el código de **`ComponentB`** y lo renderizará en ese momento. Esta técnica puede mejorar el rendimiento inicial de la aplicación al reducir el tamaño del paquete inicial que se carga en el navegador del usuario, ya que los componentes perezosos se cargarán solo cuando sean necesarios.

## ♉ Redux

`Redux` es una biblioteca de manejo de estado para aplicaciones JavaScript, especialmente útil en aplicaciones de una sola página (SPA) y aplicaciones web grandes y complejas. Se basa en tres principios fundamentales: un solo origen de verdad (single source of truth), el estado es de solo lectura (state is read-only) y los cambios se realizan mediante acciones (changes are made with actions). Redux permite manejar el estado de la aplicación de una manera predecible y centralizada, facilitando el desarrollo, la depuración y el testing de aplicaciones web.

**Ejemplo:**

Imaginemos una aplicación de lista de tareas. En Redux, el estado de la aplicación se almacena en un objeto llamado **store**. Las interacciones con el estado se hacen mediante **acciones**, y las acciones son procesadas por **reducers** que especifican cómo el estado cambia en respuesta a esas acciones.

```jsx
// Actions
const ADD_TASK = 'ADD_TASK';

// Reducer
const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Action Creators
const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

// Store
const { createStore } = Redux;
const store = createStore(tasksReducer);

// Dispatching actions
store.dispatch(addTask('Hacer la compra'));
store.dispatch(addTask('Estudiar Redux'));

// Obtener estado actual
console.log(store.getState()); // Output: ['Hacer la compra', 'Estudiar Redux']
```

**Redux Toolkit**
`Redux Toolkit` es un conjunto de herramientas oficiales para Redux, que proporciona utilidades que hacen que el código Redux sea más eficiente y fácil de entender. Incluye el concepto de **slices**, que son porciones de estado y funciones relacionadas, y simplifica la definición de **reducers** y **actions**.

**Ejemplo:**

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Extract the actions and reducer from the slice
const { actions, reducer } = counterSlice;

// Create the Redux store
const store = configureStore({
  reducer: { counter: reducer },
});

// Dispatch actions
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());

// Get the current state
const currentState = store.getState().counter;
console.log(currentState); // Output: 1

```

**Reducers**
Los **`reducers`** son funciones puras que especifican cómo el estado de una aplicación cambia en respuesta a una acción enviada a un store de Redux.

**Slice**
Un **`slice`** es un concepto introducido por Redux Toolkit que representa una porción del estado de la aplicación junto con las funciones reducer y las acciones relacionadas.

**Store**
El **`store`** en Redux es un objeto que mantiene el estado de la aplicación. Permite acceder al estado mediante **getState()**, actualizar el estado mediante **dispatch(action)** y registrar oyentes mediante **subscribe(listener)**.

**Middleware**
Los **`middlewares`** en Redux son funciones que tienen acceso al estado, a la acción despachada y al próximo middleware en la cadena. Se utilizan para realizar tareas adicionales, como registrar acciones, transformar acciones antes de que lleguen a los reducers, o manejar acciones asincrónicas.

**Ejemplo:**

```jsx
import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Extract the actions and reducer from the slice
const { actions, reducer } = counterSlice;

// Define a custom middleware
const customMiddleware = (store) => (next) => (action) => {
  console.log('Action:', action);
  next(action);
};

// Create the Redux store with the reducer and custom middleware
const store = configureStore({
  reducer: { counter: reducer },
  middleware: [...getDefaultMiddleware(), customMiddleware],
});

// Dispatch actions
store.dispatch(actions.increment());
store.dispatch(actions.decrement());

// Get the current state
const currentState = store.getState().counter;
console.log(currentState); // Output: 0
```

### **Optimistic UI**

Es una técnica en la que una aplicación web muestra inmediatamente los cambios de la interfaz de usuario como si la acción del usuario fuera exitosa, antes de que la operación subyacente se haya completado realmente. En el contexto de Redux, esto implica optimizar la interfaz de usuario para que sea altamente receptiva incluso cuando se están realizando operaciones de red u otras operaciones asincrónicas.

### **Screaming Architecture**

Es una convención de nomenclatura donde los archivos y carpetas están nombrados de manera que la estructura del código exprese su función y propósito. En el contexto de Redux, esto puede significar nombrar acciones, reducers, slices y otros componentes de Redux de una manera que refleje claramente su propósito en la aplicación.

**Ejemplo:**

```
src/
  components/
    Button/
      Button.js
      Button.css
    Card/
      Card.js
      Card.css
  containers/
    HomePage/
      HomePage.js
      HomePage.css
  redux/
    actions/
      counterActions.js
      userActions.js
    reducers/
      counterReducer.js
      userReducer.js
    store.js
  services/
    apiService.js
    authService.js
  utils/
    helperFunctions.js

```

En este ejemplo, los nombres de archivos y carpetas están estructurados para indicar claramente su propósito y función dentro de la aplicación. Los componentes, contenedores, acciones, reductores, servicios y utilidades están organizados en directorios separados, lo que facilita encontrar y comprender las diferentes partes del código base.

Esta convención de nombres ayuda a los desarrolladores a identificar rápidamente el rol de cada archivo y promueve un código base modular y mantenible. También mejora la colaboración dentro de un equipo al proporcionar una estructura consistente e intuitiva para el proyecto.

### **Intersection Observer**

**`Intersection Observer`** es una API de JavaScript que permite a los desarrolladores detectar cuándo un elemento HTML entra o sale del área de visualización del usuario. Es comúnmente utilizado en técnicas de **infinite scroll** para cargar dinámicamente contenido a medida que el usuario se desplaza por la página.

**Ejemplo:**

```jsx
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();
  const containerRef = useRef();

  useEffect(() => {
    fetchData();

    // Create a new Intersection Observer
    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    // Observe the container element
    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      observer.current.disconnect();
    };
  }, []);

  const fetchData = () => {
    // Simulate an API call to fetch more data
    setIsLoading(true);
    setTimeout(() => {
      const newData = [...data, ...generateMoreData()];
      setData(newData);
      setIsLoading(false);
    }, 1500);
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchData();
    }
  };

  const generateMoreData = () => {
    // Generate more data to append to the list
    return Array.from({ length: 10 }, (_, index) => `Item ${data.length + index + 1}`);
  };

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <div className="container" ref={containerRef}>
        {data.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
      {isLoading && <div>Loading more...</div>}
    </div>
  );
}

export default App;

```

En este ejemplo, tenemos un componente simple de React que demuestra el uso de Intersection Observer para implementar una funcionalidad de desplazamiento infinito. El componente mantiene un estado `data` y carga más datos cuando el observador detecta que el elemento contenedor se intersecta con el viewport.

La función `fetchData` simula una llamada a una API para obtener más datos y los agrega a los datos existentes en el estado del componente. La función `handleObserver` se llama cuando el observador detecta que el elemento contenedor está en el viewport, lo que activa la función `fetchData`.

El `containerRef` se utiliza para hacer referencia al elemento contenedor, que es observado por el Intersection Observer. El `observer.current` se inicializa con la configuración del Intersection Observer, y el observador se adjunta al elemento contenedor utilizando el método `observe`. Por último, el observador se desconecta cuando el componente se desmonta utilizando el método `disconnect`.

Los datos generados se renderizan en el componente y se muestra un indicador de carga cuando se están obteniendo nuevos datos.

Nota: Recuerda agregar estilos CSS adecuados para crear un contenedor desplazable y estilizar los elementos según sea necesario.

**TanStack Query (React Query)**

**`TanStack Query`** es una biblioteca para manejar solicitudes de datos y caché en aplicaciones React. Proporciona una forma fácil y eficiente de realizar consultas de datos, gestionar la caché y manejar los estados de carga y error.

**`@tanstack/react-query-devtools`:**
Es una herramienta de desarrollo para **`TanStack Query`** que proporciona una interfaz de usuario para visualizar y depurar las solicitudes de datos y el estado de la caché en aplicaciones React. Es útil para monitorear y depurar el flujo de datos en tiempo real durante el desarrollo de aplicaciones web.

**Ejemplo:**

```jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const response = await fetch('<https://api.example.com/users>');
  const data = await response.json();
  return data;
};

const UserList = () => {
  const { data, isLoading, isError } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

```

En este ejemplo, tenemos un componente React simple llamado `UserList` que utiliza el `useQuery` hook de TanStack Query para obtener una lista de usuarios de una API. La función `fetchUsers` es una función asíncrona que realiza una solicitud de búsqueda a la API y devuelve los datos.

Dentro del componente `UserList`, utilizamos el `useQuery` hook para obtener los datos de los usuarios. El primer argumento de `useQuery` es una clave única para la consulta, en este caso, `'users'`. El segundo argumento es la función que obtiene los datos (`fetchUsers` en este caso).

El `useQuery` hook devuelve un objeto con propiedades `data`, `isLoading` y `isError`. Utilizamos estas propiedades para renderizar condicionalmente diferentes componentes de IU según el estado de la consulta.

Si los datos aún se están cargando (`isLoading` es true), mostramos un mensaje de carga. Si hay un error al obtener los datos (`isError` es true), mostramos un mensaje de error. De lo contrario, mostramos la lista de usuarios.

Nota: No olvides envolver tu aplicación con un componente `QueryClientProvider` en el nivel superior para proporcionar el cliente de consulta a todos los componentes que utilizan `useQuery`.

```jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import UserList from './UserList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};

export default App;

```

En este ejemplo, creamos una instancia de `QueryClient` y envolvemos nuestro componente `UserList` con un componente `QueryClientProvider`. Esto proporciona el cliente de consulta a todos los componentes que usan `useQuery` dentro del alcance del proveedor.

Recuerda instalar los paquetes requeridos (`react-query` y `@tanstack/react-query-devtools`) e importar los componentes y funciones necesarios antes de ejecutar el código.

### Immediately Invoked Function Expression (IIFE)

Es una función que se define y se ejecuta inmediatamente después de su declaración. Es una forma de encapsular variables dentro de un ámbito local, evitando así que contaminen el ámbito global. Esta técnica se logra envolviendo la función en paréntesis y luego invocándola con otro conjunto de paréntesis al final.

**Ejemplo:**

```jsx
(function() {
    var mensaje = "Hola desde la IIFE";
    console.log(mensaje);
})();
```

## 🐻 Zustand

**`Zustand`**es una biblioteca de gestión del estado para React que proporciona una forma sencilla y minimalista de manejar el estado en aplicaciones React sin la necesidad de configuraciones complejas. A diferencia de `Redux Toolkit`, que ofrece una solución más completa y estructurada para gestionar el estado de la aplicación, Zustand se enfoca en ofrecer una experiencia fácil y rápida para aplicaciones más pequeñas o proyectos donde la complejidad de Redux podría ser excesiva.

**Características principales de Zustand:**

- **Simplicidad:** Zustand tiene una API minimalista y fácil de entender, lo que facilita su uso y adopción.
- **Pequeño tamaño:** Es ligero y tiene un tamaño de bundle más pequeño en comparación con Redux Toolkit, lo que puede ser beneficioso para aplicaciones donde el tamaño del bundle es crítico.
- **Reactividad:** Usa el sistema de reactividad de React, lo que significa que los componentes se vuelven a renderizar automáticamente cuando el estado cambia.
- **Escalabilidad:** Aunque es simple, es lo suficientemente flexible para manejar estados complejos y puede escalar con el tamaño del proyecto.

**¿Por qué podría ser una mejor opción que Redux Toolkit?**
Zustand puede ser una mejor opción que Redux Toolkit en situaciones donde se prefiera una solución más simple y minimalista para gestionar el estado de la aplicación. Si estás desarrollando una aplicación pequeña o medianamente compleja y prefieres una API más sencilla sin la necesidad de configuraciones complejas, Zustand puede ser una excelente elección. Además, si estás buscando un tamaño de bundle reducido, Zustand también podría ser una mejor opción.

**Ejemplo:**

```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
```

## 🔥 Redux vs Zustand

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6fd22c9c-a3e0-40c0-b242-f80c2db3c42a/35a0e985-6b1b-4b6a-872a-57c3cda86e72/Untitled.png)