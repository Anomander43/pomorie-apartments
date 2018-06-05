import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../layouts/style-utils';

const PriceStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  h2 {
        margin-top: 60px;
        margin-bottom: 30px;
        color: #584a3e;
        font-size: 45px;
        transition: 0.8s;
        outline: none;
        font-weight: 300 !important;
    }

  ul {
    margin-bottom: 0;
  }

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

          &:not(:first-child):not(:last-child) {
            border-right: 1px solid white;
          }

          &:nth-child(3) {
            background-color: #328B99;
          }

          &:nth-child(4) {
            background-color: #62823F;
          }

          &:nth-child(5) {
            background-color: #D2A001;
          }

          &:nth-child(6) {
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
          text-align: center;

          &.rowHeading {
            /* text-align: left; */
            width: 150px;
          }

          &.normalHeading, &.promo {
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
    <div>
      <h2>General conditions of all our apartments</h2>
      <ul>
        <li><strong>THE GUEST MUST INFORM ABOUT THE TIME OF THEIR ARRIVAL BY E-MAIL OR TELEPHONE TO ARRANGE THE CHECK-IN IN THE APARTMENT.</strong></li>
        <li><strong>Check-in starts from 14:00.</strong></li>
        <li><strong>Check-out time is 11:30.</strong></li>
        <li>Once you have carried out the payment of the reservation fee you will receive an e-mail with the confirmation and all the information.</li>
        <li>Please contact us 3 days before your arrival to confirm the meeting time and place of arrival.</li>
        <li>You must give back all sets of keys on departure. In case you lose the keys to the apartment, there’s a penalty of 50 euro in order to change the lock.</li>
        <li>You must leave the apartment at the pointed check out time.</li>
        <li>No damaging the apartments furniture or facilities.</li>
        <li>No allowed lodging of more people than the maximum number specified for the apartment.</li>
        <li>Loud noise is forbidden after 21.00h inside the apartment and also in the staircase. Please do not disturb the neighbours when opening or closing the entrance to the building and the apartment. This point is particularly important and no concessions will be made. If the police contact us due to trouble in the apartment, the agreement will be terminated and the rent won’t be returned.</li>
        <li>We do not accept reservations of people who rent the apartments for illegal activities.</li>
        <li>We will not be liable for the possible theft of objects or money deposited in the apartment.</li>
      </ul>
      <h2>Cancellation policy</h2>
        When a reservation is cancelled due to causes that are attributable to the client, the amount paid as a reservation fee will not be refunded.<br/>
        Cancellations must be communicated either in writing or by e-mail.<br/>
        In the event the apartment is not available due to circumstances beyond our control, we will offer you accommodation with identical characteristics. If we are unable to offer alternative accommodation, the reservation will be cancelled and a refund of your booking fee will be made.
      </div>

    <h2>Prices</h2>
    <table className="priceTable">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th scope="col">Classic</th>
                        <th scope="col">Comfort</th>
                        <th scope="col">Coral</th>
                        <th scope="col">Marina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">01.06 - 14.06</td>
                        <td>26€</td>
                        <td>26€</td>
                        <td>28€</td>
                        <td>36€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">15.06 - 28.06</td>
                        <td>30€</td>
                        <td>30€</td>
                        <td>31€</td>
                        <td>42€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">29.06 - 05.07</td>
                        <td>36€</td>
                        <td>34€</td>
                        <td>36€</td>
                        <td>48€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">06.07 - 12.07</td>
                        <td>40€</td>
                        <td>36€</td>
                        <td>39€</td>
                        <td>54€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">13.07 - 26.07</td>
                        <td>42€</td>
                        <td>40€</td>
                        <td>43€</td>
                        <td>63€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">27.07 - 18.08</td>
                        <td>44€</td>
                        <td>48€</td>
                        <td>50€</td>
                        <td>75€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">19.08 - 01.09</td>
                        <td>32€</td>
                        <td>36€</td>
                        <td>39€</td>
                        <td>46€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">02.09 - 08.09</td>
                        <td>30€</td>
                        <td>30€</td>
                        <td>31€</td>
                        <td>36€</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">09.09 - 30.09</td>
                        <td>26€</td>
                        <td>26€</td>
                        <td>28€</td>
                        <td>34€</td>
                    </tr>
                    <tr>
                        <td scope="row" rowSpan="4" className="rowHeading promo">Promo!</td>
                        <td scope="row" className="rowHeading">08.06 - 13.06</td>
                        <td>26€</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">10.07 - 13.07</td>
                        <td>38€</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">15.07 - 18.07</td>
                        <td></td>
                        <td></td>
                        <td>41€</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">27.08 - 01.09</td>
                        <td></td>
                        <td></td>
                        <td>43€</td>
                        <td></td>
                    </tr>                    
                </tbody>
            </table>
  </PriceStyle>
)

export default Prices;