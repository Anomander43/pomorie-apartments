import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import corner from "../images/menu_corner.png";

const Description = styled.div`
    display: inline-block;
    width: 100%;
    /* background-color: white; */

    h2 {
        margin-top: 60px;
        margin-bottom: 30px;
    }

    h2 a {
        text-decoration: none;
        color: #584a3e;
        font-size: 45px;
        transition: 0.8s;
        outline: none;
        font-weight: 300 !important;

        &:hover {
            color: #aacc2f;
        }
    }
    
    figure {
        margin-bottom: 35px;
        position: relative;
        display: inline-block;

        img {
            margin: 0;
        }
    }

    a.featured-thumbnail {
        position: relative;
        display: block;
    }

    a.btn-info {
        background: none;
        position: relative;
        margin: 0;
        padding: 12px 22px 12px 22px;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        line-height: 20px;
        font-family: "Open Sans", sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-shadow: none;
        text-transform: uppercase;
        text-decoration: none;
        color: #fffffe;
        z-index: 9;

        &:hover {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            -webkit-transition: 0.4s;
            -moz-transition: 0.4s;
            -o-transition: 0.4s;
            transition: 0.4s;
            color: #6b5f53;  
            text-decoration: none;
            background-position: 0 -15px;
            outline: 0;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25); 

            &:after {
                top: 0;
                -webkit-transition: 0.4s;
                -moz-transition: 0.4s;
                -o-transition: 0.4s;
                transition: 0.4s;
            }           
        }

        &:before {
            background: #6b5f53;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            content: '';
        }

        &:after {
            background: #fdfdfd;
            display: block;
            position: absolute;
            top: 100%;
            right: 0;
            bottom: 0;
            left: 0;
            -webkit-transition: 0.8s;
            -moz-transition: 0.8s;
            -o-transition: 0.8s;
            transition: 0.8s;
            z-index: -1;
            content: '';
        }

        
    }
`;

const ApartmentMedium = (props) => (
    <Description>
        <h2>
            <Link to={props.apartmentLink}>
                {props.apartmentName}
            </Link>
        </h2>
        <figure>
            <Link to={props.apartmentLink} className="featured-thumbnail">
                <img src={props.thumbImg} />
            </Link>
        </figure>
        <p>
            {props.descriptionText}
        </p>
        <Link to={props.apartmentLink} className="btn-info">Read More</Link>
    </Description>
);

export default ApartmentMedium;