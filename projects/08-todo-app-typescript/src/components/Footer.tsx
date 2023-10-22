import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  handleFilterChange: (filter: FilterValue) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  const singleActiveCount = activeCount === 1
  const activeTodoWord = singleActiveCount ? 'task' : 'tasks'

  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>{activeCount}</strong> pending {activeTodoWord}
      </span>

      <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />

      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}>
              Clear completed
          </button>
        )
      }
    </footer>
  )
}
