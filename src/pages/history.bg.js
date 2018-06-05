import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../layouts/style-utils';
import pomorieImg from '../images/pomorie.jpg'

const HistoryStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  h2 {
    margin: 12px 0;
    margin-bottom: 28px;
    font: normal 45px/55px "Open Sans";
    color: #584a3e;
    font-weight: 300 !important;
  }
  
  p {
    text-align: justify;
  }

  ul {
    margin: 0;
  }

  li {
    position: relative;
    margin: 16px 0 0 0;
    padding: 0 0 0 25px;
    list-style: none;
    line-height: 24px;
    font-size: 16px;
    color: #616156;

    &:before {
      position: absolute;
      top: 1px;
      left: 0;
      line-height: 24px;
      font-family: FontAwesome;
      font-size: 16px;
      color: #a8d700;
      content: '\u2714';
    }

    a {
      text-decoration: none;
      color: #616156;
      transition: 0.8s;
      outline: none;
      line-height: 24px;
      font-size: 16px;

      &:hover {
        text-decoration: none;
        color: #d2c970;
      }
    }
  }

  ${media.ereader`
    padding: 0 20px;
  `}
`

const History = () => (
  <HistoryStyle>
    <h2>Поморие</h2>
    <img src={pomorieImg} />
    <p>Разположен на живописен полуостров, той съчетава по своеобразен начин минало и настояще в съжителството на уникалните си исторически и културни паметници.
       Специфичните му природни характеристики отдавна са го превърнали в предпочитано място за отдих и лечение.
       Поморие притежава климатични и балнеоложки дадености, които определят условията за дълъг курортен сезон и целогодишен оздравителен туризъм.
    </p>

    <ul>
      <li><Link exact to="/bg/history/fact1">История</Link></li>
      <li><Link exact to="/bg/history/fact2">Поморийското солено езеро</Link></li>
      <li><Link exact to="/bg/history/fact3">Музей на солта</Link></li>
      <li><Link exact to="/bg/history/fact4">Исторически музей</Link></li>
      <li><Link exact to="/bg/history/fact5">Античната куполна гробница</Link></li>
      <li><Link exact to="/bg/history/fact6">Църквата „Свето Преображение Господне“</Link></li>
      <li><Link exact to="/bg/history/fact7">Църквата „Рождество на Пресвета Богородица“</Link></li>
      <li><Link exact to="/bg/history/fact8">Манастирът „Св. Георги Победоносец“</Link></li>
      <li><Link exact to="/bg/history/fact9">Лозарство и винарство</Link></li>
      <li><Link exact to="/bg/history/fact10">Защитени местности в близост до Поморие</Link></li>
    </ul>
  </HistoryStyle>
)

export default History;