import './Footer.css'

export function Footer () {
  return (
    <footer className='footer' style={{ textAlign: 'center', color: 'black' }}>
      <strong>
        Google Translate － <a target='a_blanc' href='https://github.com/fraineralex'>@fraineralex</a>
      </strong>
      <p>Build with React, TypeScript and openai API.</p>
    </footer>
  )
}
