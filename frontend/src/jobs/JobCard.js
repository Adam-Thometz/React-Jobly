import React, {useContext, useEffect, useState} from "react";
import UserContext from "../utils/UserContext";
import './JobCard.css'

function JobCard({id, title, companyName, salary, equity}) {
  const {apply, hasApplied} = useContext(UserContext)
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    setApplied(hasApplied(id))
  }, [id, hasApplied])

  const handleApply = async () => {
    if (hasApplied(id)) return
    apply(id)
    setApplied(true)
  }

  return (
    <div className="JobCard">
      <h4>{title}</h4>
      {companyName ? <h6>{companyName}</h6> : null}

      <p>Salary: {salary ? salary : "N/A"}</p>
      <p>Equity: {equity ? equity : "N/A"}</p>

      <button onClick={handleApply} disabled={applied}>{applied ? "Applied" : "Apply"}</button>
    </div>
  )
}

export default JobCard