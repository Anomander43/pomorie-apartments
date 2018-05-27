import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import corner from "../images/menu_corner.png";

const Description = styled.div`
    display: inline-block;
    width: 370px;
    background-color: white;

    figure {
        text-align: center;
    }

    h5, p {
        text-align: center;
    }

    h5 a {
        text-decoration: none;
        color: #d2c970;
        font-size: 30px

        &:hover {
            color: #aacc2f;
        }
    }
`;

const ApartmentSmall = (props) => (
    <Description>
        <figure className="featured-thumbnail">
            <Link exact to={props.apartmentName}>
                <img src={props.thumbImg} />
            </Link>
        </figure>
        <h5>
            <Link exact to={props.apartmentName}>
                {props.apartmentName}
            </Link>
        </h5>
        <p>
            {props.descriptionText}
        </p>
    </Description>
);

export default ApartmentSmall;