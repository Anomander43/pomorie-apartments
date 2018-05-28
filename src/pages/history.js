import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../layouts/style-utils';

const HistoryStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  h2 {
    margin: 12px 0;
    margin-bottom: 28px;
    font: normal 45px/55px "Open Sans";
    color: #584a3e;
    font-weight: 300 !important;
  }
  
  p {
    text-align: justify;
  }

  ul {
    margin: 0;
  }

  li {
    position: relative;
    margin: 16px 0 0 0;
    padding: 0 0 0 25px;
    list-style: none;
    line-height: 24px;
    font-size: 16px;
    color: #616156;

    &:before {
      position: absolute;
      top: 1px;
      left: 0;
      line-height: 24px;
      font-family: FontAwesome;
      font-size: 16px;
      color: #a8d700;
      content: '\u2714';
    }

    a {
      text-decoration: none;
      color: #616156;
      transition: 0.8s;
      outline: none;
      line-height: 24px;
      font-size: 16px;

      &:hover {
        text-decoration: none;
        color: #d2c970;
      }
    }
  }

  ${media.ereader`
    padding: 0 20px;
  `}
`

const History = () => (
  <HistoryStyle>
    <h2>Pomorie</h2>
    <p>Situated on a picturesque peninsula, this piece of the world unites the past and the future by the coexistence of the unique historical and cultural records.
      The specific natural surroundings have turned this place into a preferred destination for rest and cure a long time ago.
      Pomorie’s climate and the balneological centre set terms for a long season along with an year-round health tourism.
    </p>

    <ul>
      <li><Link exact to="history/fact1">History</Link></li>
      <li><Link exact to="history/fact2">Pomorie Salt Lake</Link></li>
      <li><Link exact to="history/fact3">Pomorie Museum of Salt</Link></li>
      <li><Link exact to="history/fact4">History Museum</Link></li>
      <li><Link exact to="history/fact5">The Ancient Beehive Tomb</Link></li>
      <li><Link exact to="history/fact6">The church of Holy Transfiguration of Our Lord</Link></li>
      <li><Link exact to="history/fact7">The church of the Birth of the Most Holy Virgin Mary</Link></li>
      <li><Link exact to="history/fact8">The monastery of St. George The Victorious</Link></li>
      <li><Link exact to="history/fact9">Vine growing and Wine producing</Link></li>
      <li><Link exact to="history/fact10">Protected countryside nearby Pomorie</Link></li>
    </ul>
  </HistoryStyle>
)

export default History;