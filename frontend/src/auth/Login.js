import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import Alert from '../common-components/Alert'

function Login({login}) {
  const INIT = {
    username: '',
    password: ''
  }

  const [formData, setFormData] = useState(INIT)
  const [formMessages, setFormMessages] = useState([])
  const history = useHistory()

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(d => ({...d, [name]: value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await login(formData)
    if (res.success) {
      history.push('/')
    } else {
      setFormMessages(res.errors)
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        {formMessages.length ?
          <Alert messages={formMessages} />
        : null}
        <Button>Log in</Button>
      </Form>
    </div>
  )
}

export default Login