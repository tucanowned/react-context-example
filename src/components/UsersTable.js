import React, { useContext } from 'react'
import { User } from './User';
import { GlobalContext } from '../context/GlobalState';

export const UsersTable = () => {
  const { users } = useContext(GlobalContext);
    return (
      <div className="table-users">
        <div className="header">Users</div>
      
        <table cellSpacing="0">
          <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th width="100">Amount</th>
            </tr>
          </thead>
          <tbody>
            {(users.map(user => <User user={user} key={user.id} />))}
          </tbody>
        </table>
      </div>
    )
}
