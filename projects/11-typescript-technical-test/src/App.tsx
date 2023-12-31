import { SortBy } from './types.d'
import './App.css'
import { UserList } from './components/UserList'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'

function App () {
  const {
    sorting,
    showColor,
    setFilterCountry,
    sortedUsers,
    handleChangeSort,
    handleDeleteUser,
    handleReset,
    toggleSortByCountry,
    toggleColors
  } = useFilters()

  return (
    <>
      <h1>React Technical Test</h1>
      <header>
        <button onClick={toggleColors}>Coloring rows</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? "Don't order by country"
            : 'Order by country'}
        </button>
        <button onClick={handleReset}>Reset state</button>
        <input
          type='text'
          placeholder='Filter by country'
          onChange={e => setFilterCountry(e.target.value)}
        />
      </header>
      <section style={{ width: '100%' }}>
        <UserList
          changeSorting={handleChangeSort}
          deleteUser={handleDeleteUser}
          showColors={showColor}
          users={sortedUsers}
        />
      </section>
      <Footer />
    </>
  )
}

export default App
