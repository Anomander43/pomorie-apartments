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

const Fact8 = () => (
  <FactsStyle>
    <h2>Манастирът „Св. Георги Победоносец“</h2>
    <p>
        Манастирът „Св. Георги Победоносец“ се намира в новата част на град Поморие. Мраморен релеф от II – III в.сл.Хр. с образа на тракийския конник показва, че на това място е имало тракийско светилище. Манастирът е единственият действащ мъжки манастир по черноморското крайбрежие. Преданието сочи, че през VII век на това място вече съществува храм или манастир, посветен на великомъченик Георги. В манастира днес се съхраняват много ценни образци на иконографското изкуство от XVIII и XIX век. Храмовата икона е рисувана от анхиалеца Томистокъл Диамандопуло Зограф. Храмовият празник на манастира „Св.Георги Победоносец“ 6 май – Гергьовден е празник и на град Поморие.
    </p>
  </FactsStyle>
)

export default Fact8;