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
    <h2>Античната куполна гробница</h2>
    <p>Античната куполна гробница е датирана от края на III в. Или началото на IV в.сл.Хр. На това място се е намирал некрополът (градът на мъртвите). Призната е за национален паметник на културата.
       Оригиналната форма и тухлената гъбоподобна конструкция на гробницата я правят уникален представител на култувата архитектура от епохата на късната античност по българските земи. Личат и елементи от архитектурата на старите тракийски гробници.
    </p>
  </FactsStyle>
)

export default Fact5;