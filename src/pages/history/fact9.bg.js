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
    <h2>Лозарство и винарство</h2>
    <p>
      В позлатените подноси на тракийските владетели Амадок и Терез II е искряло вино, произведено от този край. 
      Много монети, сечени в древния град с изображения на грозд и бога на виното Дионисий по времето на римските императори Антоний Пий и Марк Аврелий – говорят за цветущо лозарство в този край.
      И днес Поморие е утвърден лозаро-винарски център, чийто продукти печелят ежегодно престижни награди от международни и национални изложения.
    </p>
  </FactsStyle>
)

export default Fact9;