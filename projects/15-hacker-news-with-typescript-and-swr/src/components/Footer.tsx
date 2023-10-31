import './Footer.css'

export function Footer () {
  return (
    <footer className='footer' style={{ textAlign: 'center', color: 'black' }}>
      <strong>
        Hacker News Clone－<a target='a_blanc' href='https://github.com/fraineralex'>@fraineralex</a>
      </strong>
      <p>Build with React, TypeScript and SWR.</p>
    </footer>
  )
}
