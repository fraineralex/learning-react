import { useState } from 'react'
import { Products } from './components/Products.jsx'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
