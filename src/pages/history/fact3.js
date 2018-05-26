import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FactsStyle = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-bottom: 65px;

  h2 {
    margin: 12px 0;
    text-rendering: optimizelegibility;
    margin-bottom: 30px;
    font: normal 45px/55px Open Sans;
    color: #584a3e;
    font-weight: 300 !important;
  }
  
  p {
    margin: 0 0 15px;
    font-weight: normal;
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 24px;
    color: #616156;
  }
`

const Fact3 = () => (
  <FactsStyle>
    <h2>Pomorie Museum of Salt</h2>
    <p>Pomorie Museum of Salt is the only one in Bulgaria and Eastern Europe. It’s specialized museum for salt and production by solar evaporation of sea water.
       The museum presents the ancient Anhialo technology of sea salt production. It has been obtained since unknown times. According to the Bulgarian historians the saltworks existed even before the foundation of the town (around V century BC). The visitors have the chance to see “on live” all the technological procedures and to feel the authentic atmosphere of the past.
    </p>
  </FactsStyle>
)

export default Fact3;