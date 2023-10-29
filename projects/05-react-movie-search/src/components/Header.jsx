import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export const Header = ({
  search,
  setSearch,
  error,
  sort,
  setSort,
  getMovies
}) => {
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = event => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <header style={{ marginBottom: 20 }}>
      <h1 style={{ textAlign: 'center' }}>
        <img
          src='/icon64.png'
          alt='movie logo'
          style={{ height: 40, marginRight: 10 }}
        />
        Movie Search
      </h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          onChange={handleChange}
          value={search}
          name='query'
          placeholder='Avengers, Hulk, Matrix...'
        />
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>
  )
}
