import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0,

  a {
    text-decoration: none;
  }
`

const Footer = () => (
    <FooterStyle>
        <span>
          2018
        </span>
        <div></div>
    </FooterStyle>
  )

  export default Footer;