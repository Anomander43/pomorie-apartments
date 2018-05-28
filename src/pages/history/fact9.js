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

const Fact9 = () => (
  <FactsStyle>
    <h2>Vine growing and Wine producing</h2>
    <p>
    The golden-plated trays of the Thracian kings Amadok and Terez II were filled with sparkling wine, which was produced just here.
    Many coins that were minted in the ancient town, viewed a bunch and the God of wine – Dionisy. They are dated at the time of the Roman Emperors Antonius Pius and Marcus Aurelius. There are evidences for a flourishing wine production in this region.
    Nowadays Pomorie is a prominent vine-growing center as well. The products of the local wineries capture prestigious awards at national and international exhibitions.
    </p>
  </FactsStyle>
)

export default Fact9;