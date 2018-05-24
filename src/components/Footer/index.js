import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  margin: 0 auto;
  background: #fff;

  .container {
    width: 1170px;
    margin: 0 auto;

    .year-mark {
      float: right;
    }
  }

  a {
    text-decoration: none;
  }
`

const FooterBlock = styled.div`
  width: 1170px;
`

const Footer = () => (
    <FooterStyle>
      <FooterBlock className="container">
        <span className="year-mark">
          © 2018
        </span>
      </FooterBlock>
    </FooterStyle>
  )

  export default Footer;