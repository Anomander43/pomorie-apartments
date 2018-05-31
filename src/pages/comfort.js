import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import originalImage01 from '../images/apartment-comfort/01.jpg'
import originalImage02 from '../images/apartment-comfort/02.jpg'
import originalImage03 from '../images/apartment-comfort/03.jpg'
import originalImage04 from '../images/apartment-comfort/04.jpg'
import originalImage05 from '../images/apartment-comfort/05.jpg'
import originalImage06 from '../images/apartment-comfort/06.jpg'
import originalImage07 from '../images/apartment-comfort/07.jpg'
import originalImage08 from '../images/apartment-comfort/08.jpg'
import originalImage09 from '../images/apartment-comfort/09.jpg'
import originalImage10 from '../images/apartment-comfort/10.jpg'
import originalImage11 from '../images/apartment-comfort/11.jpg'
import originalImage12 from '../images/apartment-comfort/12.jpg'
import originalImage13 from '../images/apartment-comfort/13.jpg'
import originalImage14 from '../images/apartment-comfort/14.jpg'
import originalImage15 from '../images/apartment-comfort/15.jpg'
import originalImage16 from '../images/apartment-comfort/16.jpg'
import originalImage17 from '../images/apartment-comfort/17.jpg'
import originalImage18 from '../images/apartment-comfort/18.jpg'
import originalImage19 from '../images/apartment-comfort/19.jpg'
import originalImage20 from '../images/apartment-comfort/20.jpg'
import originalImage21 from '../images/apartment-comfort/21.jpg'
import originalImage22 from '../images/apartment-comfort/22.jpg'
import originalImage23 from '../images/apartment-comfort/23.jpg'
import originalImage24 from '../images/apartment-comfort/24.jpg'
import originalImage25 from '../images/apartment-comfort/25.jpg'
import originalImage26 from '../images/apartment-comfort/26.jpg'
import originalImage27 from '../images/apartment-comfort/27.jpg'
import originalImage28 from '../images/apartment-comfort/28.jpg'
import thumbnailImage01 from '../images/apartment-comfort/thumbnails/01.jpg'
import thumbnailImage02 from '../images/apartment-comfort/thumbnails/02.jpg'
import thumbnailImage03 from '../images/apartment-comfort/thumbnails/03.jpg'
import thumbnailImage04 from '../images/apartment-comfort/thumbnails/04.jpg'
import thumbnailImage05 from '../images/apartment-comfort/thumbnails/05.jpg'
import thumbnailImage06 from '../images/apartment-comfort/thumbnails/06.jpg'
import thumbnailImage07 from '../images/apartment-comfort/thumbnails/07.jpg'
import thumbnailImage08 from '../images/apartment-comfort/thumbnails/08.jpg'
import thumbnailImage09 from '../images/apartment-comfort/thumbnails/09.jpg'
import thumbnailImage10 from '../images/apartment-comfort/thumbnails/10.jpg'
import thumbnailImage11 from '../images/apartment-comfort/thumbnails/11.jpg'
import thumbnailImage12 from '../images/apartment-comfort/thumbnails/12.jpg'
import thumbnailImage13 from '../images/apartment-comfort/thumbnails/13.jpg'
import thumbnailImage14 from '../images/apartment-comfort/thumbnails/14.jpg'
import thumbnailImage15 from '../images/apartment-comfort/thumbnails/15.jpg'
import thumbnailImage16 from '../images/apartment-comfort/thumbnails/16.jpg'
import thumbnailImage17 from '../images/apartment-comfort/thumbnails/17.jpg'
import thumbnailImage18 from '../images/apartment-comfort/thumbnails/18.jpg'
import thumbnailImage19 from '../images/apartment-comfort/thumbnails/19.jpg'
import thumbnailImage20 from '../images/apartment-comfort/thumbnails/20.jpg'
import thumbnailImage21 from '../images/apartment-comfort/thumbnails/21.jpg'
import thumbnailImage22 from '../images/apartment-comfort/thumbnails/22.jpg'
import thumbnailImage23 from '../images/apartment-comfort/thumbnails/23.jpg'
import thumbnailImage24 from '../images/apartment-comfort/thumbnails/24.jpg'
import thumbnailImage25 from '../images/apartment-comfort/thumbnails/25.jpg'
import thumbnailImage26 from '../images/apartment-comfort/thumbnails/26.jpg'
import thumbnailImage27 from '../images/apartment-comfort/thumbnails/27.jpg'
import thumbnailImage28 from '../images/apartment-comfort/thumbnails/28.jpg'

const ApartmentsStyle = styled.div`
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

  ul.available-items {
    list-style-type: none;
    margin: 0;

    li {
        position: relative;
        margin: 16px 0 0 0;
        padding: 0 0 0 25px;
        list-style: none;
        line-height: 24px;
        font-size: 16px;

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
    }
  }

  .image-gallery-image {
      img {
          margin: 0;
      }
  }

  p.baby-cot {
    margin: 15px 0;
  }

  .image-gallery-image {
      text-align: center;
      background-color: #f1f1e6;
  }
  .image-gallery-slide img {
      width: auto;
  }

  .image-gallery-thumbnails-container {
    .image-gallery-thumbnail {
        width: auto;
    }
    
    img {
        margin-bottom: 0;
    }
  }
`


const images = [
    {
        original: `${originalImage01}`,
        thumbnail: `${thumbnailImage01}`
    },
    {
        original: `${originalImage02}`,
        thumbnail: `${thumbnailImage02}`
    },
    {
        original: `${originalImage03}`,
        thumbnail: `${thumbnailImage03}`
    },
    {
        original: `${originalImage04}`,
        thumbnail: `${thumbnailImage04}`
    },
    {
        original: `${originalImage05}`,
        thumbnail: `${thumbnailImage05}`
    },
    {
        original: `${originalImage06}`,
        thumbnail: `${thumbnailImage06}`
    },
    {
        original: `${originalImage07}`,
        thumbnail: `${thumbnailImage07}`
    },
    {
        original: `${originalImage08}`,
        thumbnail: `${thumbnailImage08}`
    },
    {
        original: `${originalImage09}`,
        thumbnail: `${thumbnailImage09}`
    },
    {
        original: `${originalImage10}`,
        thumbnail: `${thumbnailImage10}`
    },
    {
        original: `${originalImage11}`,
        thumbnail: `${thumbnailImage11}`
    },
    {
        original: `${originalImage12}`,
        thumbnail: `${thumbnailImage12}`
    },
    {
        original: `${originalImage13}`,
        thumbnail: `${thumbnailImage13}`
    },
    {
        original: `${originalImage14}`,
        thumbnail: `${thumbnailImage14}`
    },
    {
        original: `${originalImage15}`,
        thumbnail: `${thumbnailImage15}`
    },
    {
        original: `${originalImage16}`,
        thumbnail: `${thumbnailImage16}`
    },
    {
        original: `${originalImage17}`,
        thumbnail: `${thumbnailImage17}`
    },
    {
        original: `${originalImage18}`,
        thumbnail: `${thumbnailImage18}`
    },
    {
        original: `${originalImage19}`,
        thumbnail: `${thumbnailImage19}`
    },
    {
        original: `${originalImage20}`,
        thumbnail: `${thumbnailImage20}`
    },
    {
        original: `${originalImage21}`,
        thumbnail: `${thumbnailImage21}`
    },
    {
        original: `${originalImage22}`,
        thumbnail: `${thumbnailImage22}`
    },
    {
        original: `${originalImage23}`,
        thumbnail: `${thumbnailImage23}`
    },
    {
        original: `${originalImage24}`,
        thumbnail: `${thumbnailImage24}`
    },
    {
        original: `${originalImage25}`,
        thumbnail: `${thumbnailImage25}`
    },
    {
        original: `${originalImage26}`,
        thumbnail: `${thumbnailImage26}`
    }
]

const Comfort = () => (
  <ApartmentsStyle>
    <h2>Comfort</h2>

    <ImageGallery items={images} />

    <p>Apartment Comfort is situated in the most attractive part of town Pomorie - in the Old town, it is only 50 m from the building of Municipality Pomorie and only 50 m from the beach. It is situated on the first floor in new co-operation with elevator. It’s a modern furnished apartment for 4-6 people with two rooms, furnished kitchen, bathroom with WC. The apartment has an air-conditioner in the dining room, laundry, microwave oven, refrigerator, cooker, hot water jug, iron, TVs in both rooms, two terraces and free Wi-Fi.
    </p>

    <ul className="available-items">
        <li>air conditioner in the dining room</li>
        <li>laundry</li>
        <li>microwave oven</li>
        <li>refrigerator</li>
        <li>cooker</li>
        <li>hot pot jug</li>
        <li>iron</li>
        <li>TV in each room</li>
        <li>free Wi-Fi</li>
    </ul>
    <p className="baby-cot">On a request we can provide baby cot and baby high chair, subject to availability at the time.</p>
  </ApartmentsStyle>
)

export default Comfort;