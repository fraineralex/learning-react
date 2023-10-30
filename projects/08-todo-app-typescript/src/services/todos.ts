import { type TodoList } from '../types'

const X_MASTER_KEY = import.meta.env.VITE_X_MASTER_KEY
const API_BIN_ID = import.meta.env.VITE_API_BIN_ID
const API_URL = `https://api.jsonbin.io/v3/b/${API_BIN_ID}`

interface Todo {
  id: string
  title: string
  completed: boolean
  order: number
}

export const fetchTodos = async (): Promise<Todo[]> => {
  console.log(X_MASTER_KEY)
  const res = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': X_MASTER_KEY
    }
  })
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { record: todos } = (await res.json()) as { record: Todo[] }
  return todos
}

export const updateTodos = async ({
  todos
}: {
  todos: TodoList
}): Promise<boolean> => {
  console.log(import.meta.env.VITE_API_BIN_KEY)
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': X_MASTER_KEY
    },
    body: JSON.stringify(todos)
  })

  return res.ok
}
