import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

function PrivateRoute({exact, path, children}) {
  const {currUser} = useContext(UserContext)
  if (!currUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default PrivateRoute