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
    <h2>Protected countryside nearby Pomorie</h2>
    <p>
    Not far away from the river is the protected countryside, called Chairite. This is the home of the marsh snowdrop. It gives the extract for the medicine “Nivalin” – extremely effective in curing infantile paralysis.
    Three kilometers up in the mountain the ancient fortress wall, called Kaleto, is situated. It’s very well saved and it’s declared as an architectural record. The landmark, called Dobrovan Mushrooms is located in the same area. These are natural rock establishments.
    The protected territory, called Koriyata – a dense forest of beech and elm, is the area of the neighboring village of Gababetz.
    </p>
  </FactsStyle>
)

export default Fact9;