import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

import { Router } from './Router'
import { Route } from './Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

const App = () => {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
