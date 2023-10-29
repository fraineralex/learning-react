import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error, isFirstInput } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  return (
    <div className='page'>
      <Header
        search={search}
        setSearch={setSearch}
        error={error}
        sort={sort}
        setSort={setSort}
        getMovies={getMovies}
      />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Movies movies={movies} isFirstInput={isFirstInput} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
