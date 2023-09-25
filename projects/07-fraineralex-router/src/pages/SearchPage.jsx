import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams?.query}`
  }, [])

  return (
    <h1>
      Your Search is:{' '}
      <strong style={{ color: 'blue' }}>{routeParams?.query}</strong>
    </h1>
  )
}
