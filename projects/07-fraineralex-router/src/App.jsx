import './App.css'

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example application of a React Router from zero</p>
      <a href='/about'>Go to about</a>
    </>
  )
}

const AboutPage = () => {
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
      <a href='/home'>Go to home</a>
    </>
  )
}

const App = () => {
  return <main></main>
}

export default App
