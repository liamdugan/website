import React from "react"

const NewsEntry = ({date, text}) => {
  return (
    <tr>
        <td className="news-entry" width="15%">
            <strong>[{date}]</strong>   
        </td>
        <td className="news-entry" width="85%">
            {text}
        </td>
    </tr>
  )
}

export default NewsEntry