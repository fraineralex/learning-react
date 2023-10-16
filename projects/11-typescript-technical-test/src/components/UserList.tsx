import { SortBy, User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UserList ({
  changeSorting,
  deleteUser,
  showColors,
  users
}: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th
            onClick={() => {
              changeSorting(SortBy.NAME)
            }}
          >
            First name
          </th>
          <th
            onClick={() => {
              changeSorting(SortBy.LAST)
            }}
          >
            Last name
          </th>
          <th
            onClick={() => {
              changeSorting(SortBy.COUNTRY)
            }}
          >
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={showColors ? 'table--showColors' : ''}>
        {users &&
          users.map((user: User, index: number) => {
            return (
              <tr key={user.login.uuid}>
                <td>{index + 1}</td>
                <td>
                  <img src={user.picture.thumbnail} alt={user.name.first} />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button onClick={() => deleteUser(user.email)}>Delete</button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
