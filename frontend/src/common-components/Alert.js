import React from "react";

const Alert = ({type="danger", messages = []}) => {
  return <div className={`alert alert-${type}`}>
    {messages.map(error => (
      <p>{error}</p>
    ))}
  </div>
}

export default Alert