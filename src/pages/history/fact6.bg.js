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

const Fact6 = () => (
  <FactsStyle>
    <h2>Църквата „Свето Преображение Господне“</h2>
    <p>
       В архитектурния резерват „Стари поморийски къщи“ най-старата сграда е църквата „Свето Преображение Господне“, най-стара е и в целия град. Градена е през 1763 – 1764 г., завършена и осветена през 1765 г. Под царската икона на Исус Христос се намира малко аязмо с извираща вода от каменна плоча. Изворчето е наречено от миряните „Сълзите на Христос“.
    </p>
  </FactsStyle>
)

export default Fact6;