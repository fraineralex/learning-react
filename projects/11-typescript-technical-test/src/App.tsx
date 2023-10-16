import { useMemo, useState } from 'react'
import { SortBy } from './types.d'
import './App.css'
import { UserList } from './components/UserList'
import { useGetAllUsers } from './hooks/useGetAllUsers'

function App () {
  const { users, setUsers, originalUsers } = useGetAllUsers()
  const [showColor, setShowColor] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColor(!showColor)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.COUNTRY ? SortBy.NONE : SortBy.COUNTRY
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
    setFilterCountry(null)
    const input = document.querySelector('input')
    if (input) {
      input.value = ''
    }
  }

  const handleDeleteUser = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sortingValue: SortBy) => {
    const newSortingValue =
      sorting === sortingValue ? SortBy.NONE : sortingValue
    setSorting(newSortingValue)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [filterCountry, users])

  return (
    <>
      <h1>Typescript Technical Test</h1>
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
          users={filteredUsers}
        />
      </section>
    </>
  )
}

export default App
