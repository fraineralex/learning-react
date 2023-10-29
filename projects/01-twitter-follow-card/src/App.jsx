import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'fraineralex',
    name: 'Frainer Encarnación',
    isFollowing: false
  },
  {
    userName: 'rseverinop',
    name: 'Ralph Severino',
    isFollowing: true
  },
  {
    userName: 'jeisondls',
    name: 'Jeison De los Santos',
    isFollowing: false
  },
  {
    userName: 'javierpro29',
    name: 'Anderson Balbuena',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
