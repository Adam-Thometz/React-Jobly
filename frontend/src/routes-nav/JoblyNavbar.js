import React, { useContext } from "react";
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import UserContext from "../utils/UserContext";
import './JoblyNavbar.css'

function JoblyNavbar({logout}) {
  const {currUser} = useContext(UserContext)


  const loggedOut = () => {
    return (<Nav>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/login">Login </NavLink>
      </NavItem>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/signup">Sign Up</NavLink>
      </NavItem>
    </Nav>)
  }

  const loggedIn = () => {
    return (<Nav>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/companies">Companies </NavLink>
      </NavItem>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/jobs">Jobs</NavLink>
      </NavItem>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/profile">Profile</NavLink>
      </NavItem>
      <NavItem className="JoblyNavbar-item">
        <NavLink className="JoblyNavbar-link" to="/logout" onClick={logout}>Log out {currUser.username}</NavLink>
      </NavItem>
    </Nav>)
  }
  
  return (
    <div>
      <Navbar className="JoblyNavbar">
        <NavLink className="JoblyNavbar-main" exact to="/">Jobly</NavLink>

        {currUser ? loggedIn() : loggedOut()}
      </Navbar>
    </div>
  )
}

export default JoblyNavbar