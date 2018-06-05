import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../../layouts/style-utils';

const FactsStyle = styled.div`
  max-width: 1170px;
  width: 100%
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

  ${media.ereader`
    padding: 0 20px;
  `}
`

const Fact7 = () => (
  <FactsStyle>
    <h2>The church of the Birth of the Most Holy Virgin Mary</h2>
    <p>
    The temple, which was built for the fame of the Holy and Life-giving Trinity and in memory of the Birth of the Most Holy Virgin Mary in 1890, is situated in the center of the town. The wall panels beneath the icons illustrate daily scenes of the life of the citizens in Pomorie. The Christians in the town celebrate the Birth of the Most Holy Virgin Mary on the 8th of September.
    </p>
  </FactsStyle>
)

export default Fact7;