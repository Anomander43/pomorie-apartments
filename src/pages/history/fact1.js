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

const Fact1 = () => (
  <FactsStyle>
    <h2>History</h2>
    <p>During Emperor Trayan’s reign (98 – 117) Anhialo gained the status of a town with an administrative structure like that in the West European cities. The ancient town was situated in the Paleokastro region (“old fort” in Greek).
       Anhialo had witnessed continuous and furious fights between the Bulgarians and the Byzantines and memorable historical events. In 812 Khan Krum conquered the town, and on the 20th of August 917 King Simeon I The Great defeated the Byzantine army in the field between Anhialo and the Aheloy River (the Aheloy battle).
    </p>
  </FactsStyle>
)

export default Fact1;