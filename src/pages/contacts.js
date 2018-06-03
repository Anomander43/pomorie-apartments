import React, { Component } from 'react'
import Link from "gatsby-link";
import styled from "styled-components";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
import Form from '../components/Form/Form';
import { media } from '../layouts/style-utils';

const ContactsStyle = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  padding-bottom: 65px;

  h2 {
    margin: 12px 0;
    margin-bottom: 36px;
    font-weight: 300;
    font-size: 45px;
    color: #584a3e;
  }

  ${media.ereader`
    padding-left: 20px;
    padding-right: 20px;
  `}
`
const MapContainer = styled.div`
  padding-top: 40px;
`

const ContactInfo = styled.div`
  display: inline-block;
  width: 30%;
  padding-right: 25px;
  vertical-align: top;

  p {
    text-align: justify;
  }

  address {
    display: block;
    margin-bottom: 24px;
    font-style: normal;
    line-height: 24px;
    font-size: 16px;

    a{
      color: #9fcb00;
      text-decoration: none;
    }
  }

  ${media.ereader`
    display: block;
    width: 100%;
  `}
`
const ContactFormHolder = styled.div`
  display: inline-block;
  width: 70%;
  vertical-align: top;

  input {
    margin: 0;
    width: 40%;
    height: 30px;
    line-height: 15px;
    box-sizing: border-box;
    padding: 4px 8px;
    font-size: 14px;
    background: #f1f1e6;
    min-height: 24px;
    border: 1px solid #cdc8b1;
    border-radius: 0;
    box-shadow: none;
    resize: none;
    font-weight: 400;
    color: #9a9683;
    margin-bottom: 15px;

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #999;
      font-size: 16px;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #999;
      font-size: 16px;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #999;
      font-size: 16px;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #999;
      font-size: 16px;
    }
  }

  textarea {
    width: 100%;
    padding: 4px 8px;
    font-size: 14px;
    background: #f1f1e6;
    min-height: 24px;
    margin: 0;
    border-radius: 0;
    border: 1px solid #cdc8b1;
    color: #9a9683;
    
    height: 200px;
    line-height: 15px;
    box-sizing: border-box;
    overflow: auto;
    outline: none;

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #999;
      font-size: 14px;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #999;
      font-size: 14px;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #999;
      font-size: 14px;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #999;
      font-size: 14px;
    }
  }

  input.submitButton {
    background: #bce623;
    height: 58px;
    margin: 0 15px 0 0;
    padding: 0 32px 0 32px;
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transition: 0.8s;
    -moz-transition: 0.8s;
    -o-transition: 0.8s;
    transition: 0.8s;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    font-weight: 400;
    text-shadow: none;
    color: #fff;
    cursor: pointer;
    -webkit-appearance: button;
    display: inline-block;
    line-height: 24px;
    text-align: center;
    width: 120px;
  }

  ${media.ereader`
    display: block;
    width: 100%;
  `}
`

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 42.5590797, lng: 27.6442387 }}
  >
    <MarkerWithLabel 
      position={{ lat: 42.5590797, lng: 27.6442387 }} 
      labelAnchor={new google.maps.Point(0, 60)}
      labelStyle={{backgroundColor: "Turquoise", fontSize: "16px", padding: "5px"}}
    >
      <div>Classic</div>
    </MarkerWithLabel>

    <MarkerWithLabel 
      position={{ lat: 42.5623669, lng: 27.639295 }} 
      labelAnchor={new google.maps.Point(0, 60)}
      labelStyle={{backgroundColor: "Moccasin", fontSize: "16px", padding: "5px"}}
    >
      <div>Coral</div>
    </MarkerWithLabel>

    <MarkerWithLabel 
      position={{ lat: 42.5592861, lng: 27.6436035 }} 
      labelAnchor={new google.maps.Point(0, 60)}
      labelStyle={{backgroundColor: "Lavender", fontSize: "16px", padding: "5px"}}
    >
      <div>Comfort</div>
    </MarkerWithLabel>

    <MarkerWithLabel 
      position={{ lat: 42.5580638, lng: 27.6464544 }} 
      labelAnchor={new google.maps.Point(0, 60)}
      labelStyle={{backgroundColor: "Plum", fontSize: "16px", padding: "5px"}}
    >
      <div>Marina</div>
    </MarkerWithLabel>

  </GoogleMap>
))


export default class About extends Component {
  render() {
    return (
      <ContactsStyle>
        <MapContainer>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MapContainer>
        <ContactInfo>
          <h2>Contact Info</h2>
          <p>
          Please write us an email and specify the period you’d like to book the apartment for and we’ll get back to you. After our confirmation via email or phone, you’ll have to pay a reservation fee equal to three nights via bank account, Western Union or Money Gram.
          </p>
          <address>
          Contact Person: Mariya Yaneva
          <br/>
          Telephone: +359 889 555 063
          <br/>
          Telephone: +359 899 79 78 79
          <br/>
          E-mail: <a href="mailto:mariyag43@abv.bg">mariyag43@abv.bg</a>
          </address>
        </ContactInfo>
        <ContactFormHolder>
          <h2>Contact Form</h2>
          <Form />
        </ContactFormHolder>
      </ContactsStyle>
    )
  }
}
