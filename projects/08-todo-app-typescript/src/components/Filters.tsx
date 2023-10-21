import { TODO_FILTERS } from '../consts'
import { type FilterValue } from '../types'

const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'All',
    href: `#/${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `#/${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `#/${TODO_FILTERS.COMPLETED}`
  }
}

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  //const handleClick = (filter: )

  return (
    <ul className='filters'>
      {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              className={className}
              onClick={event => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
