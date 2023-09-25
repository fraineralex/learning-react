import { Suspense, lazy } from 'react'

import './App.css'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

import { Router } from './Router'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import('./pages/About')) // lazy loading
const LazyHomePage = lazy(() => import('./pages/Home')) // lazy loading

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

const App = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
