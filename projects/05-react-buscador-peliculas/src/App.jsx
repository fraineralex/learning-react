import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Search your movie</h1>
        <form className="form">
          <input placeholder="Avengers, SatrWars, Matrix..." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        Here goes the movies
      </main>
    </div>
  )
}

export default App;
