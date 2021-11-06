import {Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Home from '../home/Home'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Profile from '../auth/Profile'
import Companies from '../companies/Companies'
import Company from '../companies/Company'
import Jobs from '../jobs/Jobs'

function Routes({login, signup}) {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <Route exact path="/signup">
          <Signup signup={signup} />
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/companies">
          <Companies />
        </PrivateRoute>
        <PrivateRoute path="/companies/:handle">
          <Company />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes