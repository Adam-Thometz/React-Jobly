import React, { useState, useEffect } from "react";
import JoblyApi from "../utils/api";
import CompanyCard from "./CompanyCard";
import SearchBar from "../common-components/SearchBar";

function Companies() {
  const [companies, setCompanies] = useState([])

  useEffect(function getCompanies() {
    search()
  }, [])

  async function search(name) {
    const companies = await JoblyApi.getAllCompanies(name)
    setCompanies(companies)
  }

  return (
    <div>
      <SearchBar search={search} />
      {companies.length ? 
        companies.map(c => (
          <CompanyCard handle={c.handle} name={c.name} description={c.description} logoUrl={c.logoUrl} />
      )) : <p>No results found...</p>}
    </div>
  )
}

export default Companies