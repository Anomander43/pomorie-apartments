import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FactsStyle = styled.div`
  width: 1170px;
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
`

const Fact8 = () => (
  <FactsStyle>
    <h2>The monastery of St. George The Victorious</h2>
    <p>
    The monastery of St. George The Victorious is located in the modern district of Pomorie. A marble relief, which dates from II – III century and views a Thracian rider, is an evidence that this place was s Thracian sanctuary. The monastery is the only on the Black Sea coast. The legend says that in VII century a temple or a monastery had already existed there. It was named after St. George. Many pieces of icon art from XVIII and XIX century have been kept in the monastery. The temple icon is painted by the Anhialo master Temistoklis Diamandopulo Zograph. The temple holiday of St. George The Victorious Monastery is on the 6th of May – St. George’s Day. This is Pomorie’s day as well.
    </p>
  </FactsStyle>
)

export default Fact8;