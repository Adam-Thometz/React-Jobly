import React, {useState, useContext} from "react";
import { Button, Form, FormText, FormGroup, Label, Input } from "reactstrap";
import JoblyApi from "../utils/api";
import UserContext from "../utils/UserContext";
import Alert from '../common-components/Alert'

function Profile() {
  const {currUser, setCurrUser} = useContext(UserContext)
  const INIT = {
    username: currUser.username,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    password: ''
  }

  const [formData, setFormData] = useState(INIT)
  const [formMessages, setFormMessages] = useState([])

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(d => ({...d, [name]: value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const {firstName, lastName, email, password} = formData
    const updated = {firstName, lastName, email, password}
    const res = await JoblyApi.update(updated, currUser.username)
    setCurrUser(res)
    setFormMessages(["Updated successfully!"])
    setFormData(res)
  }

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <Form onSubmit={handleSubmit}>
        <FormText>
          <Label htmlFor="username">Username</Label>
          <Input
            disabled={!currUser.isAdmin}
            id="username"
            name="username"
            value={formData.username}
          />
        </FormText>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Confirm password to make changes</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        {formMessages.length ?
          <Alert type="success" messages={formMessages} />
          : null}
        <Button type="submit">Save Changes</Button>
      </Form>
    </div>
  )
}

export default Profile