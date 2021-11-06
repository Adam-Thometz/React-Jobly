import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../utils/api";
import JobCard from "./JobCard";
import SearchBar from "../common-components/SearchBar";
import LoadingSpinner from "../common-components/LoadingSpinner";
import UserContext from "../utils/UserContext";

function Jobs() {
  const [jobs, setJobs] = useState([])

  useEffect(function getJobs() {
    search()
  }, [])

  async function search(title) {
    const jobs = await JoblyApi.getAllJobs(title)
    setJobs(jobs)
  }

  if (!jobs) return <LoadingSpinner />

  return (
    <div>
      <SearchBar search={search} />
      {jobs.length ?
        jobs.map(j => (
          <JobCard key={j.id} id={j.id} title={j.title} salary={j.salary} equity={j.equity} companyName={j.companyName} />
        )) : <p>No results found...</p>}
    </div>
  )
}

export default Jobs