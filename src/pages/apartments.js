import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ApartmentMedium from '../components/ApartmentMedium'

import classicThumb from "../images/thumbnails/classic_medium.jpg";
import comfortThumb from "../images/thumbnails/comfort_medium.jpg";
import coralThumb from "../images/thumbnails/coral_medium.jpg";
import marinaThumb from "../images/thumbnails/marina_medium.jpg";

const ApartmentsStyle = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-bottom: 65px;
`

const Apartments = () => (
  <ApartmentsStyle>
    <ApartmentMedium 
      apartmentName="Classic" 
      descriptionText="Apartment Classic is situated in the most attractive part in town Pomorie - in the Old town, it's only 50 m from the building of Municipality Pomorie and only 50 m from the beach.
      
      It's for 4 people, with two rooms, furnished kitchen, bathroom with WC and two balconies. The apartment has air conditioner, laundry, microwave oven, refrigerator, hot plates, iron, hair-dryer, TV with a satellite and free Wi-Fi." 
      thumbImg={classicThumb} 
    />
    <ApartmentMedium 
      apartmentName="Comfort" 
      descriptionText="Apartment Comfort is situated in the most attractive part of town Pomorie - in the Old town, it is only 50 m from the building of Municipality Pomorie and only 50 m from the beach. It is situated on the first floor in new co-operation with elevator. It’s a modern furnished apartment for 4-6 people with two rooms, furnished kitchen, bathroom with WC. The apartment has an air-conditioner in the dining room, laundry, microwave oven, refrigerator, cooker, hot water jug, iron, TVs in both rooms, two terraces and free Wi-Fi." 
      thumbImg={comfortThumb} 
    />
    <ApartmentMedium 
      apartmentName="Coral" 
      descriptionText="Apartment Coral is in new building with an elevator, in the newest part of Pomorie, called Russian neighborhood, in place of Salt Lake. It's only 100 m of the city center and 100 m from beautiful beaches.
      
      It's for 5 people, has two rooms, furnished kitchen, bathroom with WC and two balconies. The apartment has air conditioner, laundry, microwave oven, hot plates, refrigerator, hot pot jug, iron, TV in both rooms and free Wi-Fi." 
      thumbImg={coralThumb} 
    />
    <ApartmentMedium 
      apartmentName="Marina" 
      descriptionText="Apartment Marina is situated on the most attractive beach of Pomorie town - in the Old town, exactly on Kraibrejna Street, really close to many restaurants and only 5 minutes away from the bus station and the Building of the Municipality. The apartment is on the 3rd floor, which supposed a great view from every room to the sea and beaches. It’s a modern furnished apartment for 4-7 people with two rooms, furnished kitchen, bathroom with WC. The apartment has air conditioner in the dinning room, laundry, microwave oven, refrigerator, cooker, hot water jug, iron, TV, a terrace and free Wi-Fi." 
      thumbImg={marinaThumb} 
    />
  </ApartmentsStyle>
)

export default Apartments;
