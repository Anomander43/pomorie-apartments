import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../../layouts/style-utils';

const FactsStyle = styled.div`
  max-width: 1170px;
  width: 100%
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

const Fact5 = () => (
  <FactsStyle>
    <h2>The Ancient Beehive Tomb</h2>
    <p>The Ancient Beehive Tomb dates from the end of III century and the beginning of IV century. This was the place of the necropolis (the city of the dead). It’s recognized as a National cultural monument.
       The original shape and the mushroom-like brick construction make the tomb representative of the cult architecture from the epoch of the late antiquity in Bulgaria. There is evidence for components of the architecture of the old Thracian tombs.
    </p>
  </FactsStyle>
)

export default Fact5;