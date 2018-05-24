import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import corner from "../images/menu_corner.png";

const NavStyle = styled.nav`

    padding: 20px 0;
    .dropdown {
        display: inline-block;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    a {
        text-decoration: none;
        margin: 0 33px;
        color: #746e5d;
        transition: 0.8s;
        font-size: 18px;

         &.active {
            color: #9fcb00;
        }

        &:hover {
            color: #9fcb00;
        }
    }

    .dropdown-content {
        display: none;
        margin-top: 31px;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        background: #a39b8d;

        &:before {
            background: url(${corner}) no-repeat 0% 0%;
            display: block;
            width: 14px;
            height: 7px;
            overflow: hidden;
            position: absolute;
            top: -7px;
            right: 50%;
            margin: 0 -7px 0 0;
            content: '';
        }

        a {
            padding: 8px 0 7px 0;
            border: none;
            line-height: 20px;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            color: #ffffff;
            float: none;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;

            &:hover {
                color: #fdffcd;
            }
        }
    }
`;

const Dropdown = () => (
    <NavStyle>
        <Link activeClassName="active" className="" exact to="/">Home</Link>
        <div className="dropdown">
            <Link activeClassName="active" exact to="/apartments">Apartments</Link>
            <div className="dropdown-content">
            <Link to="/classic">Classic</Link>
            <Link to="/comfort">Comfort</Link>
            <Link to="/coral">Coral</Link>
            </div>
        </div>

        <Link activeClassName="active" exact to="prices">Prices</Link>
        <Link activeClassName="active" exact to="history">History</Link>
        <Link activeClassName="active" exact to="contacts">Contacts</Link>
    </NavStyle>
);

export default Dropdown;