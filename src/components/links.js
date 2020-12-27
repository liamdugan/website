import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Links = () => {
  return (
    <div className="social-links">
        <ul className="links-parent">
            <li className="links"><a href="https://github.com/liamdugan"><FaGithub size={50}/></a></li>
            <li className="links"><a href="https://www.linkedin.com/in/liam-dugan/"><FaLinkedin size={50}/></a></li>
            <li className="links"><a href=""><FaTwitter size={50}/></a></li>
            <li className="links"><a href=""><FaYoutube size={50}/></a></li>
        </ul>
    </div>
  )
}

export default Links