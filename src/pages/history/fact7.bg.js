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

const Fact7 = () => (
  <FactsStyle>
    <h2>Църквата „Рождество на Пресвета Богородица“</h2>
    <p>
        В централната част на града е храмът, създаден за слава на Светата и Животворяща Троица и памет на Рождество на Пресвета Богородица през 1890 г. В предиконните пана са разработени битови сцени от ежедневието на поморийските жители. В Поморие православните християни празнуват Рождество на Пресвета Богородица на 8 септември.
    </p>
  </FactsStyle>
)

export default Fact7;