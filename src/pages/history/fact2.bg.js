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

const Fact2 = () => (
  <FactsStyle>
    <h2>Поморийското солено езеро</h2>
    <p>От Поморийското солено езеро се добива лиманна лечебна кал, която е между най-добрите в света.
      Като лечебно място градът е бил известен още от древността, древните римляни са познавали и ползвали лечебната сила на калта и са наричали Поморийското езеро „свещено“.
      Калолечението и съвременните рехабилитационни бази правят Поморие целогодишен курорт.
      Езерото е защитена орнитологична местност, по която минава миграционния път на прелетниците „Виа Понтика“. Тук гнездят саблеклюна, кокилибегача, белочелата рибарка и морския дъждосвирец.
      Морската вода е кристално чиста, през лятото температурата й достига 24-25°C, брегът е плитък. Плажната ивица е покрита с фин пясък, с площ от 18700 м², дълга 4200м и опасва Поморийския залив.
    </p>
  </FactsStyle>
)

export default Fact2;