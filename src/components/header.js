import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   background: `rebeccapurple`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <h1>Ahn</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Index
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: "red" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={{ color: "red" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/page-2" activeStyle={{ color: "red" }}>
            Page2
          </Link>
        </li>
        <li>
          <Link to="/using-typescript" activeStyle={{ color: "red" }}>
            UsingTypescript
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
