import './Footer.css'

export function Footer () {
  return (
    <footer className='footer' style={{ textAlign: 'center', color: 'black' }}>
      <strong>
        React CRUD with Redux － <a target='a_blanc' href='https://github.com/fraineralex'>@fraineralex</a>
      </strong>
      <p>Build with TypeScript and tremor components.</p>
    </footer>
  )
}
