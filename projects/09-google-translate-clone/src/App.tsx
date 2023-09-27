import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App() {
  // use the hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }] = useStore()

  console.log({ fromLanguage })

  return (
    <div className='app'>
      <h1>Google Translate</h1>
      <button onClick={() => { setFromLanguage('es') }}>Change to Spanish</button>{ fromLanguage }
    </div>
  )
}

export default App
