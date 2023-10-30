import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import { CreateNewUser } from './components/CreateNewUser'
import { Toaster } from 'sonner'

function App () {
  return (
    <main>
      <header>
        <h1
          style={{ fontWeight: 'bolder', fontSize: '30px', marginBottom: 15 }}
        >
          <img
            src='redux.svg'
            alt='Redux Logo'
            width='50px'
            height='40px'
            style={{ display: 'inline', marginRight: 10, paddingBottom: 10 }}
          />
          Redux CRUD
        </h1>
      </header>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </main>
  )
}

export default App
