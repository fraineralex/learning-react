import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilters(previousFilters => ({
      ...previousFilters,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    setFilters(previousFilters => ({
      ...previousFilters,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimum price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onSelect={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
