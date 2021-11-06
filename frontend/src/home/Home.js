import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'

function Home() {
  const {currUser} = useContext(UserContext)

  const authLinks = (<div>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  )

  return (
    <div>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {currUser ? 
        <h2>Welcome Back, {currUser.firstName}!</h2>
        : authLinks}
    </div>
  )
}

export default Home