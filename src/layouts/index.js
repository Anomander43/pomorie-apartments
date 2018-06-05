import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';


import Header from '../components/Header'
import IndexPage from '../pages/index'
import Footer from '../components/Footer'
import './index.css'
import icon32 from '../icon32.png'

// import { media } from './style-utils';

const BodyStyle = styled.div`
  background-color: #f1f1e6;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 24px;
  color: #616156;

  .container {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }
`

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <BodyStyle>
      <Helmet
        title="Pomorie Apartments"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ]}
      >
        <link rel="shortcut icon" href={icon32} />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Helmet>

      <Header langs={langsMenu} />
      {children()}
      <Footer />
    </BodyStyle>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;