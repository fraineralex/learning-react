import './Footer.css'

export function Footer () {
  return (
    <footer className='footer' style={{ textAlign: 'center', color: 'white' }}>
      <strong>
        Tic Tac Toe ⚛️ － <a target='a_blanc' href='https://github.com/fraineralex'>@fraineralex</a>
      </strong>
      <p>Build with React, Vite and SWC</p>
    </footer>
  )
}