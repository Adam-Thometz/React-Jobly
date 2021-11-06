import React, {useEffect, useState} from 'react';
import JoblyApi from './utils/api';
import './App.css';
import JoblyNavbar from './routes-nav/JoblyNavbar';
import Routes from './routes-nav/Routes';
import UserContext from './utils/UserContext';
import jwt from 'jsonwebtoken'
import useLocalStorage from './utils/useLocalStorage';
import LoadingSpinner from './common-components/LoadingSpinner';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false)
  const [token, setToken] = useLocalStorage("jobly-token")
  const [currUser, setCurrUser] = useState(null)
  const [applicationIds, setApplicationIds] = useState(new Set([]))

  useEffect(() => {
    async function getUserInfo() {
      if (token) {
        try {
          const {username} = jwt.decode(token)
          JoblyApi.token = token
          const currUser = await JoblyApi.getUser(username)
          setCurrUser(currUser)
        } catch (e) {
          setCurrUser(null)
        }
      }
      setInfoLoaded(true)
    }
    setInfoLoaded(false)
    getUserInfo()
  }, [token])

  const login = async loginData => {
    try {
      const token = await JoblyApi.login(loginData)
      setToken(token)
      return {success: true}
    } catch (errors) {
      return {success: false, errors}
    }
  }

  const signup = async signupData => {
    try {
      const token = await JoblyApi.signup(signupData)
      setToken(token)
      return {success: true}
    } catch (errors) {
      return {success: false, errors}
    }
  }

  const logout = async () => {
    setToken(null)
    setCurrUser(null)
  }

  const hasApplied = id => {
    return applicationIds.has(id)
  }

  const apply = async jobId => {
    if (hasApplied(jobId)) return
    await JoblyApi.applyToJob(currUser.username, jobId)
    setApplicationIds(new Set([...applicationIds, jobId]))
  }

  if (!infoLoaded) return <LoadingSpinner />

  return (
    <div className="App">
      <UserContext.Provider value={{currUser, setCurrUser, apply, hasApplied}}>
        <JoblyNavbar logout={logout} />
        <Routes login={login} signup={signup} />
      </UserContext.Provider>
    </div>
  );
}

export default App;