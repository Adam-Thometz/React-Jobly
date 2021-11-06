import React, { useState, useEffect } from "react";
import {useParams} from 'react-router'
import JobCard from "../jobs/JobCard";
import JoblyApi from "../utils/api";
import './Company.css'

function Company() {
  const {handle} = useParams()
  const [company, setCompany] = useState({})

  useEffect(() => {
    async function getCompany() {
      let company = await JoblyApi.getCompany(handle)
      setCompany(company)
    }
    getCompany()
  }, [handle])

  return (
    <div className="Company">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.jobs ?
        company.jobs.map(j => (
          <JobCard id={j.id} title={j.title} salary={j.salary} equity={j.equity} />
        )) : <p>There are no vacancies here.</p>}
    </div>
  )
}

export default Company