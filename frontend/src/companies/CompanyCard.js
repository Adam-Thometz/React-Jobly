import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logoUrl = null}) {

  return (
    <div>
      <h1><Link to={`/companies/${handle}`}>{name}</Link></h1>
      <p>{description}</p>
      {logoUrl ? <img src={logoUrl} alt={`Logo for ${name}`} /> : null}
    </div>
  )
}

export default CompanyCard