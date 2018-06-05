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

const Fact4 = () => (
  <FactsStyle>
    <h2>Исторически музей</h2>
    <p>В постоянната сбирка на Исторически музей Поморие е проследен животът в този край от най-дълбока древност до завладяването на района от турците в края на XIV в. Сградата на музея е паметник на културата – основно реконструирана Девическа (изгоряла) гимназия.
       Римският и средновековният период от историята на Анхиало са онагледени с карти на римски и средновековни пътища в района, изложени са много монети, сечени в Анхиало, багато украсени мраморни архитектурни фрагменти от древния град.
    </p>
  </FactsStyle>
)

export default Fact4;