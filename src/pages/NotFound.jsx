import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>Not Found
        <Link to='/home' className='btn'><FaHome/>Back to Home</Link>
    </div>
    
  )
}

export default NotFound