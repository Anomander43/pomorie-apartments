import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import IndexPage from '../pages/index'
import Footer from '../components/Footer'
import './index.css'


const BodyStyle = styled.div`
  background-color: #f1f1e6;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 24px;
  color: #616156;

  .container {
    width: 1170px;
    margin: 0 auto;
  }
`

const TemplateWrapper = ({ children }) => (
  <BodyStyle>
    <Helmet
      title="Pomorie Apartments"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      
    >
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Helmet>

    <Header />
    {children()}
    <Footer />
  </BodyStyle>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
