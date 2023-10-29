import { Link } from '../components/Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example application of a React Router from zero</p>
      <Link to='/about'>Go to about</Link>
    </>
  )
}
