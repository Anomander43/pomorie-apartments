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

const Fact3 = () => (
  <FactsStyle>
    <h2>Музей на солта</h2>
    <p>Музей на солта Поморие е единственият в България и Източна Европа специализиран музей за производството на сол чрез слънчево изпарение на морска вода.
       Музеят представя древната анхиалска технология за производство на морска сол, която се добива от незапомнени времена. Според българските историци, солниците са съществували още преди основаването на града (около V в.пр.Хр.). Посетителите могат да видят „на живо“ всички технологични операции и да усетят автентичната атмосфера на миналото.
    </p>
  </FactsStyle>
)

export default Fact3;