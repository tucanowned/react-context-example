import React from 'react'

export const User = ({ user }) => {
  return (
    <tr>
      <td><img src={user.picture} alt="" /></td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.amount}</td>
    </tr>
  )
}
