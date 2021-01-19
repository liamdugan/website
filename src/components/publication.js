import React from "react"

const Publication = ({title, authors, venue, links}) => {
  return (
    <li className="publication">
        <p><em>{title}</em></p>
        <p>{authors}</p>
        <p>{venue}</p>
        <p>{links}</p>
    </li>
  )
}

export default Publication