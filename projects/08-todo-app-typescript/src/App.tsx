import { useState } from 'react'
import { mockTodos } from './mocks/todos'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoId } from './types.d'
import { type Todo } from './types.d'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed

    return todo
  })

  return (
    <>
      <div className='todoapp'>
        <h1>To Do App</h1>
        <Todos
          onRemoveTodo={handleRemove}
          onToggleCompletedTodo={handleCompleted}
          todos={filteredTodos}
        />

        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={handleRemoveAllCompleted}
        />
      </div>
    </>
  )
}

export default App
