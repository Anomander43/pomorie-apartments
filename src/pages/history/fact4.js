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

const Fact4 = () => (
  <FactsStyle>
    <h2>History Museum</h2>
    <p>The constant collection of the Pomorie History Museum presents what has been happening in the region since the most ancient times until the Turkish conquest in the end of XIV century. The house of the museum is a cultural monument – the building was a burnt secondary school for girls.
       The Roman and the Medieval period of Anhialo’s history are illustrated by maps of Roman and Medieval roads in the region. Many coins, which were minted in Anhialo, are exhibited along with richly decorated architectural fragments from the Ancient town.
    </p>
  </FactsStyle>
)

export default Fact4;