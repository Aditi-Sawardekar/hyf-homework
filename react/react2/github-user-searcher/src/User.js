import React from 'react'

const User = ({user}) => {
    console.log(user)
  return (
    <li className="user" key={user.id}>
        <p>{user.login}</p>

    </li>
  )
}

export default User