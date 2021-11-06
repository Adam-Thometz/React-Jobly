import React from "react";
import { useHistory } from "react-router-dom";
import './CompanyCard.css'

function CompanyCard({handle, name, description, logoUrl = null}) {
  const history = useHistory()

  const goToCompany = () => {
    history.push(`/companies/${handle}`)
  }

  return (
    <div className="CompanyCard" onClick={goToCompany}>
      {logoUrl ? <img src={logoUrl} alt={`Logo for ${name}`} /> : null}
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default CompanyCard