import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import originalImage01 from '../images/apartment-marina/01.jpg'
import originalImage02 from '../images/apartment-marina/02.jpg'
import originalImage03 from '../images/apartment-marina/03.jpg'
import originalImage04 from '../images/apartment-marina/04.jpg'
import originalImage05 from '../images/apartment-marina/05.jpg'
import originalImage06 from '../images/apartment-marina/06.jpg'
import originalImage07 from '../images/apartment-marina/07.jpg'
import originalImage08 from '../images/apartment-marina/08.jpg'
import originalImage09 from '../images/apartment-marina/09.jpg'
import originalImage10 from '../images/apartment-marina/10.jpg'
import originalImage11 from '../images/apartment-marina/11.jpg'
import originalImage12 from '../images/apartment-marina/12.jpg'
import originalImage13 from '../images/apartment-marina/13.jpg'
import originalImage14 from '../images/apartment-marina/14.jpg'
import originalImage15 from '../images/apartment-marina/15.jpg'
import originalImage16 from '../images/apartment-marina/16.jpg'
import originalImage17 from '../images/apartment-marina/17.jpg'
import originalImage18 from '../images/apartment-marina/18.jpg'
import originalImage19 from '../images/apartment-marina/19.jpg'
import originalImage20 from '../images/apartment-marina/20.jpg'
import originalImage21 from '../images/apartment-marina/21.jpg'
import originalImage22 from '../images/apartment-marina/22.jpg'
import thumbnailImage01 from '../images/apartment-marina/thumbnails/01.jpg'
import thumbnailImage02 from '../images/apartment-marina/thumbnails/02.jpg'
import thumbnailImage03 from '../images/apartment-marina/thumbnails/03.jpg'
import thumbnailImage04 from '../images/apartment-marina/thumbnails/04.jpg'
import thumbnailImage05 from '../images/apartment-marina/thumbnails/05.jpg'
import thumbnailImage06 from '../images/apartment-marina/thumbnails/06.jpg'
import thumbnailImage07 from '../images/apartment-marina/thumbnails/07.jpg'
import thumbnailImage08 from '../images/apartment-marina/thumbnails/08.jpg'
import thumbnailImage09 from '../images/apartment-marina/thumbnails/09.jpg'
import thumbnailImage10 from '../images/apartment-marina/thumbnails/10.jpg'
import thumbnailImage11 from '../images/apartment-marina/thumbnails/11.jpg'
import thumbnailImage12 from '../images/apartment-marina/thumbnails/12.jpg'
import thumbnailImage13 from '../images/apartment-marina/thumbnails/13.jpg'
import thumbnailImage14 from '../images/apartment-marina/thumbnails/14.jpg'
import thumbnailImage15 from '../images/apartment-marina/thumbnails/15.jpg'
import thumbnailImage16 from '../images/apartment-marina/thumbnails/16.jpg'
import thumbnailImage17 from '../images/apartment-marina/thumbnails/17.jpg'
import thumbnailImage18 from '../images/apartment-marina/thumbnails/18.jpg'
import thumbnailImage19 from '../images/apartment-marina/thumbnails/19.jpg'
import thumbnailImage20 from '../images/apartment-marina/thumbnails/20.jpg'
import thumbnailImage21 from '../images/apartment-marina/thumbnails/21.jpg'
import thumbnailImage22 from '../images/apartment-marina/thumbnails/22.jpg'


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
    }
]

const Marina = () => (
  <ApartmentsStyle>
    <h2>Марина</h2>

    <ImageGallery items={images} />

    <p>Апартамент Марина се намира на най-атрактивния плаж на град Поморие - в Стария град, на самата улица Крайбрежна, в непосредствена близост до ресторанти и на 5мин пеша от автобусната спирка и сградата на Община Поморие. Разположен е на 3-ти жилищен етаж, което предлага невероятна гледка от всички стаи към морето и плажовете. Съвременно обзаведен апартамент за 4-7 човека с три стаи, оборудван кухненски бокс, баня с тоалетна.
    </p>

    <ul className="available-items">
        <li>климатик в хола</li>
        <li>пералня</li>
        <li>микровълнова печка</li>
        <li>хладилник</li>
        <li>печка с фурна</li>
        <li>кана за гореща вода</li>
        <li>ютия</li>
        <li>телевизор</li>
        <li>безплатен Wi-Fi.</li>
    </ul>
    <p className="baby-cot">При запитване може да се осигури детска кошара и детско високо столче за хранене, при наличност към момента.</p>
  </ApartmentsStyle>
)

export default Marina;