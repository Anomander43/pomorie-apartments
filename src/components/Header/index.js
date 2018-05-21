import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../images/logo_small.jpg'

const HeaderStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0,

  a {
    text-decoration: none;
  }
`

const Header = () => (
    <HeaderStyle>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
      <img src={logo} />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            Pomorie Apartments
          </Link>
        </h1>
      <nav>
            <Link to="/">Home</Link>
            <Link to="/apartments">Apartments</Link>
            <Link to="/prices">Prices</Link>
            <Link to="/history">History</Link>
            <Link to="/about">About</Link>
      </nav>
      </div>
    </HeaderStyle>
  )

  export default Header;