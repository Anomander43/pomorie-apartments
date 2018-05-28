import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../layouts/style-utils';

const PriceStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  table {
    margin-top: 25px;
    border-bottom: 2px solid black;

    thead {
      tr {

        &:first-child {
          th:first-child {
            border-bottom: 0;
          }
        }

        th {
          text-align: center;
          color: white;
          border-radius: 10px 10px 0 0;

          &:not(:last-child) {
            border-right: 1px solid white;
          }

          &:nth-child(2) {
            background-color: #328B99;
          }

          &:nth-child(3) {
            background-color: #62823F;
          }

          &:nth-child(4) {
            background-color: #D2A001;
          }

          &:nth-child(5) {
            background-color: #BF6212;
          }
        }
      }
    }

    tbody {
      /* border-top-left-radius: 10px; */
      /* box-shadow: 0 0 0 1px red; */

      tr {

        &:nth-child(odd) {
          background-color: #ECECEC;
        }
        
        &:nth-child(even) {
          background-color: #F6F6F6;
        }

        &:first-child {
          td:first-child {
            border-top-left-radius: 10px;
            border-top: 0;
          }
        }

        td {
          padding: 5px 15px;
          border-top: 1px solid #D8D8D8;
          border-bottom: 1px solid #D8D8D8;

          &:nth-child(n+2) {
            text-align: center;
          }

          &:not(:last-child) {
            border-right: 1px solid white;
          }
        }
      }
    }
  }

  ${media.ereader`
    table {
      font-size: 14px;

      tbody tr td {
        padding: 5px;
      }
    }
  `}
`


const Prices = () => (
  <PriceStyle>
    <table className="priceTable">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Classic</th>
                        <th scope="col">Comfort</th>
                        <th scope="col">Coral</th>
                        <th scope="col">Marina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">January</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">February</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">March</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">April</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">May</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">June</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">July</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">August</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">September</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">October</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">November</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    <tr>
                        <td scope="row">December</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                        <td>40€</td>
                    </tr>
                    
                </tbody>
            </table>
  </PriceStyle>
)

export default Prices;