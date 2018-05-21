import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'



const FooterStyle = styled.div`
  width: 1200px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0,
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pomorie Apartments"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        
      }}
    >
      {children()}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
