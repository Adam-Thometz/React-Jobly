import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import Alert from '../common-components/Alert'

function Signup({signup}) {
  const INIT = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
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
    const res = await signup(formData)
    if (res.success) {
      history.push('/')
    } else {
      setFormMessages(res.errors)
    }
  }

  return (
    <div className="Login">
      <h1>Sign Up</h1>
      <Form>
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
        <FormGroup>
          <Label>First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        {formMessages.length ?
          <Alert messages={formMessages} />
        : null}
        <Button onClick={handleSubmit}>Sign up</Button>
      </Form>
    </div>
  )
}

export default Signup