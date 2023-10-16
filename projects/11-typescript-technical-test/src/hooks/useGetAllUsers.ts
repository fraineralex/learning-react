import { useEffect, useRef, useState } from 'react'
import { User } from '../types.d'
import './App.css'

const API_PATH = (results: number) => {
    return `https://randomuser.me/api/?results=${results}`
}

export function useGetAllUsers () {
  const [users, setUsers] = useState<User[]>([])

  const originalUsers = useRef<User[]>([])

  useEffect(() => {
    fetch(API_PATH(100))
      .then(response => response.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
  }, [])

  return { users, setUsers, originalUsers }
}