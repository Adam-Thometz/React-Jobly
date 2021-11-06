import React, {useState} from "react";
import {Form, FormGroup, Input, Button} from 'reactstrap'

function SearchBar({search}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    search(searchTerm)
  }

  return (
    <Form onClick={handleSubmit}>
      <FormGroup>
        <Input
          name="searchTerm"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </FormGroup>
    </Form>
  )
}

export default SearchBar