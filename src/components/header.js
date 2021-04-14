import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header
    className={headerStyles.header}
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
    <h1>
      <Link className={headerStyles.title} to="/">
        Ahn
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Index
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/page-2"
          >
            Page2
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/using-typescript"
          >
            UsingTypescript
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
