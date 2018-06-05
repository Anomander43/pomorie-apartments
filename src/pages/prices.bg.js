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
      <h2>Общи условия за всички апартаменти</h2>
      <ul>
        <li><strong>ГОСТИТЕ ТРЯБВА ДА ИНФОРМИРАТ ЗА СВОЕТО ПРИСТИГАНЕ ПО ТЕЛЕФОНА ИЛИ ЧРЕЗ E-MAIL, ЗА ДА СЕ УГОВОРИ ЧАСЪТ НА НАСТАНЯВАНЕ В АПАРТАМЕНТА.</strong></li>
        <li><strong>Настаняването е от 14:00 часа.</strong></li>
        <li><strong>Напускането е до 11:30 часа</strong></li>
        <li>След като преведете необходимото капаро, ще получите e-mail с потвърждение на резервацията и цялата необходима информация относно нея.</li>
        <li>Моля да се свържете с нас 3 дни преди резервацията си, относно очаквания час на вашето пристигане.</li>
        <li>Трябва да върнете всички ключове при напускане. Загубата на ключ се заплаща с 50 евро, с оглед смяна на бравата.</li>
        <li>Трябва да напуснете апартамента най-късно в часа за запускане.</li>
        <li>Не увреждайте обзавеждането на апартамента.</li>
        <li>Не е разрешено настаняване на повече гости от максималния допустим за апартамента.</li>
        <li>Силният шум е забранен след 21.00 часа в апартамента и на стълбището. Моля, не притеснявайте съседите си при влизане и излизане през входната врата на сградата и на апартамента. Тази точка е особено важна и не се правят никакви отстъпки. Ако полицията се свърже с нас относно някакви оплаквания, резервацията се преустановява и наемът не се връща.</li>
        <li>Не приемаме резервации от хора, с цел нелегална дейност.</li>
        <li>Не носим отговорност за евентуална кражба на вещи или пари в апартамента.</li>
      </ul>
      <h2>Условия за анулиране на резервация</h2>
      Когато анулирането на резервация е поради причини, които се дължат на клиента, платената такса сумата по капаро не се възстановява.<br />
      Анулирането на резервация трябва да се направи писмено, по e-mail.<br />
      При обстоятелства, които не зависят от нас и настанпването не може да се направи, ще ви предложим алтернативно настаняване с подобни условия. Ако не можем да ви предложим алтернативно настаняване, резервацията ще бъде отменена,а платената сума като капаро – възстановена.
      </div>

    <h2>Цени</h2>
    <table className="priceTable">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th scope="col">Класик</th>
                        <th scope="col">Комфорт</th>
                        <th scope="col">Корал</th>
                        <th scope="col">Марина</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">01.06 - 14.06</td>
                        <td>51лв</td>
                        <td>51лв</td>
                        <td>55лв</td>
                        <td>70лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">15.06 - 28.06</td>
                        <td>59лв</td>
                        <td>59лв</td>
                        <td>60лв</td>
                        <td>82лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">29.06 - 05.07</td>
                        <td>71лв</td>
                        <td>67лв</td>
                        <td>70лв</td>
                        <td>94лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">06.07 - 12.07</td>
                        <td>78лв</td>
                        <td>70лв</td>
                        <td>76лв</td>
                        <td>105лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">13.07 - 26.07</td>
                        <td>82лв</td>
                        <td>78лв</td>
                        <td>84лв</td>
                        <td>123лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">27.07 - 18.08</td>
                        <td>86лв</td>
                        <td>94лв</td>
                        <td>98лв</td>
                        <td>147лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">19.08 - 01.09</td>
                        <td>63лв</td>
                        <td>70лв</td>
                        <td>76лв</td>
                        <td>90лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">02.09 - 08.09</td>
                        <td>59лв</td>
                        <td>59лв</td>
                        <td>60лв</td>
                        <td>70лв</td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan="2" className="rowHeading normalHeading">09.09 - 30.09</td>
                        <td>51лв</td>
                        <td>51лв</td>
                        <td>55лв</td>
                        <td>66лв</td>
                    </tr>
                    <tr>
                        <td scope="row" rowSpan="4" className="rowHeading promo">Промоция!</td>
                        <td scope="row" className="rowHeading">08.06 - 13.06</td>
                        <td>50лв</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">10.07 - 13.07</td>
                        <td>75лв</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">15.07 - 18.07</td>
                        <td></td>
                        <td></td>
                        <td>80лв</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row" className="rowHeading">27.08 - 01.09</td>
                        <td></td>
                        <td></td>
                        <td>84лв</td>
                        <td></td>
                    </tr>                    
                </tbody>
            </table>
  </PriceStyle>
)

export default Prices;