import React, {useState} from "react";
import {Form, FormGroup, Input, Button} from 'reactstrap'
import './SearchBar.css'

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
    <Form className="SearchBar" inline={true} onClick={handleSubmit}>
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