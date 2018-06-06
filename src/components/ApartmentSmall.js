import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import corner from "../images/menu_corner.png";

const Description = styled.div`
    display: inline-block;
    margin: 0 15px 30px;
    width: calc(100% * (1/3) - 30px);
    background-color: white;

    figure {
        text-align: center;

        img {
            margin: 0;
            /* width: 100%; */
        }
    }

    h5, p {
        text-align: center;
    }

    h5 a {
        text-decoration: none;
        color: #d2c970;
        font-size: 30px
        transition: 0.8s;
        font-weight: 400;

        &:hover {
            color: #aacc2f;
        }
    }
`;

const ApartmentSmall = (props) => (
    <Description>
        <figure className="featured-thumbnail">
            <Link exact to={props.apartmentLink}>
                <img src={props.thumbImg} />
            </Link>
        </figure>
        <h5>
            <Link exact to={props.apartmentLink}>
                {props.apartmentName}
            </Link>
        </h5>
    </Description>
);

export default ApartmentSmall;