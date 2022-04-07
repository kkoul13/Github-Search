import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({user:{login,avatar_url}}) {

  // const {avatar_url , login} = props.user
  
  return (
      <div className='flex-row items-center bg-base-100'>
    
    <div className=' avatar w-14 h-14'><img src={avatar_url} alt=''/></div>
    <div className='flex-row '>{login} <Link to={`/user/${login}`}>Visit Profile</Link></div>
    </div>
  )
}

UserItem.PropType={
    userInfo: PropType.object,
}

export default UserItem