import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ApartmentMedium from '../components/ApartmentMedium'

import { media } from '../layouts/style-utils';

import classicThumb from "../images/thumbnails/classic_medium.jpg";
import comfortThumb from "../images/thumbnails/comfort_medium.jpg";
import coralThumb from "../images/thumbnails/coral_medium.jpg";
import marinaThumb from "../images/thumbnails/marina_medium.jpg";

const ApartmentsStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  ${media.ereader`
    padding-left: 20px;
    padding-right: 20px;
  `}
`

const Apartments = () => (
  <ApartmentsStyle>
    <ApartmentMedium
      apartmentName="Класик"
      descriptionText='Апартамент "Класик" се намира в съседна кооперация, в която е находящ апартамент "Комфорт". Подходящ е за 4 човека, разполага с две стаи, оборудван кухненски бокс, баня с тоалетна и два балкона.'
      thumbImg={classicThumb}
    />
    <ApartmentMedium
      apartmentName="Комфорт"
      descriptionText='Апартамент "Комфорт" се намира в най-атрактивната част на град Поморие - в Стария град, на 50м от сградата на Община Поморие и на 50м от плажа. Разположен е на 1-ви жилищен етаж в новопостроена кооперация с асансьор. Съвременно обзаведен апартамент за 4-6 човека с две стаи, оборудван кухненски бокс, баня с тоалетна и две тераси.'
      thumbImg={comfortThumb}
    />
    <ApartmentMedium
      apartmentName="Корал"
      descriptionText='Апартамент "Корал" е в новопостроена сграда с асансьор, в най-новата част на Поморие, т.нар. Руски квартал, на мястото на Соленото езеро. Само на 100метра от центъра на града и на 100метра от прекрасни плажове. Подходящ е за 5 човека, разполага с две стаи, оборудван кухненски бокс, баня с тоалетна и два балкона.'
      thumbImg={coralThumb}
    />
    <ApartmentMedium
      apartmentName="Марина"
      descriptionText='Апартамент Марина се намира на най-атрактивния плаж на град Поморие - в Стария град, на самата улица Крайбрежна, в непосредствена близост до ресторанти и на 5мин пеша от автобусната спирка и сградата на Община Поморие. Разположен е на 3-ти жилищен етаж, което предлага невероятна гледка от всички стаи към морето и плажовете. Съвременно обзаведен апартамент за 4-7 човека с три стаи, оборудван кухненски бокс, баня с тоалетна. Апартаментът разполага с климатик в хола, пералня, микровълнова фурна, хладилник, печка, кана за гореща вода, телевизор, ютия, тераса, безплатен Wi-Fi.'
      thumbImg={marinaThumb}
    />
  </ApartmentsStyle>
)

export default Apartments;
