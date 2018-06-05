import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import originalImage01 from '../images/apartment-coral/01.jpg'
import originalImage02 from '../images/apartment-coral/02.jpg'
import originalImage03 from '../images/apartment-coral/03.jpg'
import originalImage04 from '../images/apartment-coral/04.jpg'
import originalImage05 from '../images/apartment-coral/05.jpg'
import originalImage06 from '../images/apartment-coral/06.jpg'
import originalImage07 from '../images/apartment-coral/07.jpg'
import originalImage08 from '../images/apartment-coral/08.jpg'
import originalImage09 from '../images/apartment-coral/09.jpg'
import originalImage10 from '../images/apartment-coral/10.jpg'
import originalImage11 from '../images/apartment-coral/11.jpg'
import originalImage12 from '../images/apartment-coral/12.jpg'
import originalImage13 from '../images/apartment-coral/13.jpg'
import originalImage14 from '../images/apartment-coral/14.jpg'
import originalImage15 from '../images/apartment-coral/15.jpg'
import originalImage16 from '../images/apartment-coral/16.jpg'
import originalImage17 from '../images/apartment-coral/17.jpg'
import originalImage18 from '../images/apartment-coral/18.jpg'
import originalImage19 from '../images/apartment-coral/19.jpg'
import originalImage20 from '../images/apartment-coral/20.jpg'
import originalImage21 from '../images/apartment-coral/21.jpg'
import originalImage22 from '../images/apartment-coral/22.jpg'
import originalImage23 from '../images/apartment-coral/23.jpg'
import originalImage24 from '../images/apartment-coral/24.jpg'
import originalImage25 from '../images/apartment-coral/25.jpg'
import originalImage26 from '../images/apartment-coral/26.jpg'
import thumbnailImage01 from '../images/apartment-coral/thumbnails/01.jpg'
import thumbnailImage02 from '../images/apartment-coral/thumbnails/02.jpg'
import thumbnailImage03 from '../images/apartment-coral/thumbnails/03.jpg'
import thumbnailImage04 from '../images/apartment-coral/thumbnails/04.jpg'
import thumbnailImage05 from '../images/apartment-coral/thumbnails/05.jpg'
import thumbnailImage06 from '../images/apartment-coral/thumbnails/06.jpg'
import thumbnailImage07 from '../images/apartment-coral/thumbnails/07.jpg'
import thumbnailImage08 from '../images/apartment-coral/thumbnails/08.jpg'
import thumbnailImage09 from '../images/apartment-coral/thumbnails/09.jpg'
import thumbnailImage10 from '../images/apartment-coral/thumbnails/10.jpg'
import thumbnailImage11 from '../images/apartment-coral/thumbnails/11.jpg'
import thumbnailImage12 from '../images/apartment-coral/thumbnails/12.jpg'
import thumbnailImage13 from '../images/apartment-coral/thumbnails/13.jpg'
import thumbnailImage14 from '../images/apartment-coral/thumbnails/14.jpg'
import thumbnailImage15 from '../images/apartment-coral/thumbnails/15.jpg'
import thumbnailImage16 from '../images/apartment-coral/thumbnails/16.jpg'
import thumbnailImage17 from '../images/apartment-coral/thumbnails/17.jpg'
import thumbnailImage18 from '../images/apartment-coral/thumbnails/18.jpg'
import thumbnailImage19 from '../images/apartment-coral/thumbnails/19.jpg'
import thumbnailImage20 from '../images/apartment-coral/thumbnails/20.jpg'
import thumbnailImage21 from '../images/apartment-coral/thumbnails/21.jpg'
import thumbnailImage22 from '../images/apartment-coral/thumbnails/22.jpg'
import thumbnailImage23 from '../images/apartment-coral/thumbnails/23.jpg'
import thumbnailImage24 from '../images/apartment-coral/thumbnails/24.jpg'
import thumbnailImage25 from '../images/apartment-coral/thumbnails/25.jpg'
import thumbnailImage26 from '../images/apartment-coral/thumbnails/26.jpg'

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

const Coral = () => (
  <ApartmentsStyle>
    <h2>Coral</h2>

    <ImageGallery items={images} />

    <p>Apartment Coral is in new building with an elevator, in the newest part of Pomorie, called Russian neighborhood, in place of Salt Lake. It's only 100 m of the city center and 100 m from beautiful beaches.

       It's for 5 people, has two rooms, furnished kitchen, bathroom with WC and two balconies. The apartment has air conditioner, laundry, microwave oven, hot plates, refrigerator, hot pot jug, iron, TV in both rooms and free Wi-Fi.
    </p>

    <ul className="available-items">
        <li>air conditioner</li>
        <li>washing machine</li>
        <li>microwave oven</li>
        <li>refrigerator</li>
        <li>hot plates</li>
        <li>hot pot jug</li>
        <li>iron</li>
        <li>TV with a cable tv</li>
        <li>free Wi-Fi</li>
    </ul>
    <p className="baby-cot">On a request we can provide baby cot and baby high chair, subject to availability at the time.</p>
  </ApartmentsStyle>
)

export default Coral;