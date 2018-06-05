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
    <h2>Защитени местности в близост до Поморие</h2>
    <p>
    Недалеч от реката е защитената местност Чаирите, където вирее блатното кокиче, от което се произвежда лекарството „Нивалин“ – изключително ефективно при лечението на детски паралич.
    На три километра горе в планината се намира късноантичната крепостна стена Калето с високо запазени зидове, обявена за архитектурен паметник. В същото землище се намира природната забележителност „Добровански гъби“ – естествени скални образувания.
    В землището на съседното село Гълъбец е паспортизираната защитена територия „Корията“ – лонгозна гора от бук и бряст.
    </p>
  </FactsStyle>
)

export default Fact9;