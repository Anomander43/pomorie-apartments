import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Carousel from 'nuka-carousel';
import ApartmentSmall from '../components/ApartmentSmall'

import img1 from "../images/carousel/1.jpg";
import img2 from "../images/carousel/2.jpg";
import img3 from "../images/carousel/3.jpg";
import img4 from "../images/carousel/4.jpg";
import img5 from "../images/carousel/5.jpg";
import classicThumb from "../images/thumbnails/classic_thumb.jpg";
import comfortThumb from "../images/thumbnails/comfort_thumb.jpg";
import coralThumb from "../images/thumbnails/coral_thumbnail.jpg";
import marinaThumb from "../images/thumbnails/marina_thumbnail.jpg";

const MainContent = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  .slider {
    margin: 0 0 45px 0;
  }
`
const ApartmentDescriptionHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content: space-between;
`

const IndexPage = () => (
  <MainContent>
    <Carousel autoplay={true} wrapAround={true} renderCenterLeftControls={() => {}} renderCenterRightControls={() => {}}  renderBottomCenterControls={() => {}}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
    </Carousel>

    <ApartmentDescriptionHolder>
      <ApartmentSmall apartmentName="Класик" thumbImg={classicThumb} />
      <ApartmentSmall apartmentName="Комфорт" thumbImg={comfortThumb} />
      <ApartmentSmall apartmentName="Корал" thumbImg={coralThumb} />
      <ApartmentSmall apartmentName="Марина" thumbImg={marinaThumb} />
    </ApartmentDescriptionHolder>
  </MainContent>
)

export default IndexPage;
