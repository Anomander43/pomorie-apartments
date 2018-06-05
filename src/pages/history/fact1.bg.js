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

const Fact1 = () => (
  <FactsStyle>
    <h2>История</h2>
    <p>Анхиално е древното име на Поморие
       При император Траян (98 – 117 г.сл.Хр.) Анхиало получава статут на град с административно устройство като на западноевропейските градове. Античният град от римската епоха се е намирал в местността „Палеокастро“ (от старогръцки – „стара крепост“).
       Анхиало е свидетел на продължителни и ожесточени борби между българи и византийци и на важни исторически събития. През 812 г. хан Крум превзема града, а на 20 август 917 г. армията на цар Симеон I Велики разгромява византийската войска в полето между Анхиало и река Ахелой (Ахелойската битка).
    </p>
  </FactsStyle>
)

export default Fact1;