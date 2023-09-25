import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://unavatar.io/fraineralex'
          alt='Frainer Encarnación photo'
        />
        <p>
          Hi! I'am Frainer Encarnación and I'm creating a clone of React Router.
        </p>
      </div>
      <Link to='/'>Go to home</Link>
    </>
  )
}
