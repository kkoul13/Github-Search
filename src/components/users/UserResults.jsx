import React, { useContext } from 'react'

import UserItem from './UserItem';
import GitHubContext from '../../context/github/GitHubContext';

function UserResults() {

const {users,loading} = useContext(GitHubContext)

 if (!loading)
  {
    return (
      <div className='grid grid-cols-3 gap-8 '>{users.map((iUser) => (<UserItem key={iUser.id} user={iUser}/>))}</div>
    )
  }
  else
  {
    return (
      <h3>Is Still Loading</h3>
    )
  }


}

export default UserResults