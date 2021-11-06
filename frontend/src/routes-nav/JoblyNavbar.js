import React, { useContext } from "react";
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import UserContext from "../utils/UserContext";

function JoblyNavbar({logout}) {
  const {currUser} = useContext(UserContext)

  const loggedOut = (<Nav>
    <NavItem>
      <NavLink to="/login">Login </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/signup">Sign Up</NavLink>
    </NavItem>
  </Nav>)

  const loggedIn = (<Nav>
    <NavItem>
      <NavLink to="/companies">Companies </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/jobs">Jobs</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/profile">Profile</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/logout" onClick={logout}>Log out</NavLink>
    </NavItem>
  </Nav>)
  
  return (
    <div>
      <Navbar>
        <NavLink exact to="/">Jobly</NavLink>

        {currUser ? loggedIn : loggedOut}
      </Navbar>
    </div>
  )
}

export default JoblyNavbar