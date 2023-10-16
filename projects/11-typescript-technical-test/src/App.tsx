import { useEffect, useState } from 'react'
import { SortBy, User } from './types.d'
import './App.css'

function useGetAllUsers () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }, [])

  return { users, setUsers }
}

function App () {
  const { users, setUsers } = useGetAllUsers()
  const [showColor, setShowColor] = useState(false)
  const [sortedUsers, SetSortedUsers] = useState<User[]>(users)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)

  const handleOrderByCountry = () => {
    const newSortedUsers = users.toSorted((a, b) =>
      a.location.country.localeCompare(b.location.country)
    )

    SetSortedUsers(newSortedUsers)
  }

  return (
    <>
      <h1>Typescript Technical Test</h1>
      <header>
        <button onClick={() => setShowColor(!showColor)}>Coloring rows</button>
        <button onClick={handleOrderByCountry}>Order by country</button>
        <button>Reset state</button>
        <input type='text' placeholder='Filter by country' />
      </header>
      <section style={{ width: '100%' }}>

      </section>
    </>
  )
}

export default App
