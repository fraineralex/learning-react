import { useMemo, useState } from 'react'
import { SortBy, User } from '../types.d'
import { useGetAllUsers } from './useGetAllUsers'

export function useFilters () {
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
    setShowColor(false)
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

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  return {
    sorting,
    showColor,
    setFilterCountry,
    sortedUsers,
    handleChangeSort,
    handleDeleteUser,
    handleReset,
    toggleSortByCountry,
    toggleColors
  }
}
