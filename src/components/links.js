import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Links = () => {
  return (
    <div className="social-links">
        <ul className="links-parent">
            <li className="links"><a href="https://github.com/liamdugan"><FaGithub size={50}>Github</FaGithub></a></li>
            <li className="links"><a href="https://www.linkedin.com/in/liam-dugan/"><FaLinkedin size={50}>LinkedIn</FaLinkedin></a></li>
            <li className="links"><a href="https://twitter.com/LiamDugan_"><FaTwitter size={50}>Twitter</FaTwitter></a></li>
            <li className="links"><a href="https://www.youtube.com/channel/UCJ0CmYx0Ureqi9iBAf5xIbQ"><FaYoutube size={50}>YouTube</FaYoutube></a></li>
        </ul>
    </div>
  )
}

export default Links