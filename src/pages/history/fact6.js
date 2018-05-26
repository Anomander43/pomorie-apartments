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
    text-align: justify;
  }
`

const Fact6 = () => (
  <FactsStyle>
    <h2>The church of Holy Transfiguration of Our Lord</h2>
    <p>
        The Holy Transfiguration of Our Lord church is the oldest building in the architectural reserve of Old Pomorie Houses. It had been built in 1763 – 1764 and was finished and sanctified in 1765. A holy spring with water coming from a stone plate as located below the King’s icon of Jesus Christ. It was called “The Tears of Jeesus”.
    </p>
  </FactsStyle>
)

export default Fact6;