import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src='https://midu.dev/images/this-is-fine-404.gif'
          alt='This is fine Gif'
        />
      </div>
      <Link to='/'>Go to home</Link>
    </>
  )
}
