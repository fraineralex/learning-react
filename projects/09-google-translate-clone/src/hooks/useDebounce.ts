import { useEffect, useState } from 'react'

export function useDebounce<T> (value: T, delay = 500) {
  const [debouncedValue, SetDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      SetDebouncedValue(value)
    }, delay)

    // clear timeout if the value changes
    return () => { clearTimeout(timer) }
  }, [value, delay])

  return debouncedValue
}
