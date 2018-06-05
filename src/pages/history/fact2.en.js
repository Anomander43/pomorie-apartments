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
    <h2>Pomorie Salt Lake</h2>
    <p>Healing firth mud is extracted from Pomorie Salt Lake. It’s one of the best in the world.
      The city was a prominent medical centre since ancient times. The Romans profited from the curing strength of the mud and that’s they called Pomorie lake “sacred”.
      Mud healing and the modern rehabilitation base make Pomorie a year-round resort. 
      The lake is a protected ornithological area. The migratory way of the birds of passage “Via Pontica” goes there. The Avocet, the Stilts runner, the Sterna albifrons and the Sea plover nest in the lake.
      The sea water is perfectly clean and reaches a temperature of 24-25°C in the summer. The shore is shallow. The beach is covered by fine sand and its surface is 18 700 square meters. It’s 4200m long and goes along Pomorie Bay.
    </p>
  </FactsStyle>
)

export default Fact2;