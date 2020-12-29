import React from "react"

const NewsEntry = ({date, text}) => {
  return (
    <tr>
        <td className="news-entry" width="25%">
            <strong>[{date}]</strong>   
        </td>
        <td className="news-entry" width="75%">
            {text}
        </td>
    </tr>
  )
}

export default NewsEntry