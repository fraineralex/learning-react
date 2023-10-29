# Frainer Router

This package provides custom implementations of essential React Router components - `Link`, `Route`, and `Router`. These components work exactly like their counterparts in React Router, allowing you to create seamless navigation and routing in your React applications. Whether you're building a single-page application or a complex web interface, these components simplify the process of managing routes and links within your React project.

## 🎯 Installation

To install the package, use npm or yarn:

```bash
npm install frainer-router
# or
yarn add frainer-router
```

## 📦 Usage

### `Link` Component

```jsx
import React from 'react';
import { Link } from 'frainer-router';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
```

### `Route` Component

```jsx
import React from 'react';
import { Route } from 'frainer-router';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Us</div>;
const Contact = () => <div>Contact Us</div>;

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};
```

### `Router` Component

```jsx
import React from 'react';
import { Router } from 'frainer-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      {/* Your Route components here */}
    </Router>
  );
};
```

## 🚀 Contributing

Feel free to contribute by submitting issues or pull requests on [GitHub](https://github.com/fraineralex/learning-react/tree/main/projects/07-frainer-router).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨🏻‍🚀 Developer
- Frainer Encarnación ➡️ [Github](https://github.com/fraineralex)