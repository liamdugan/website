import React from "react"
import { Link } from "gatsby"
import { FaRegNewspaper, FaPenNib, FaCode, FaCoffee, FaHome } from 'react-icons/fa'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  header = (
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item name" to="/" activeClassName="navbar-item name">
          Liam Dugan
        </Link>

        <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link class="navbar-item" to="/" activeClassName="navbar-item">
            <span class="icon is-medium">
              <FaHome/>
            </span>
            Home
          </Link>

          <Link class="navbar-item" to="/publications" activeClassName="navbar-item">
            <span class="icon is-medium">
              <FaRegNewspaper/>
            </span>
            Publications
          </Link>

          <Link class="navbar-item" to="/blog" activeClassName="navbar-item">
            <span class="icon is-medium">
              <FaPenNib/>
            </span>
            Blog
          </Link>

          <Link class="navbar-item" to="/projects" activeClassName="navbar-item">
            <span class="icon is-medium">
              <FaCode/>
            </span>
            Projects
          </Link>

          <Link class="navbar-item" to="/about" activeClassName="navbar-item">
            <span class="icon is-medium">
              <FaCoffee/>
            </span>
            Hobbies
          </Link>
        </div>
      </div>
    </nav>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <div className="body-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
