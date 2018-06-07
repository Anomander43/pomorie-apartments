import React, { Component } from 'react'
import Link from "gatsby-link"
import styled from "styled-components"
import $ from "jquery"

import { media } from '../layouts/style-utils';
import menu_corner from "../images/menu_corner.png";
import menu_line from "../images/menu_line.png";

const NavStyle = styled.nav`
    padding: 20px 0;

    .dropdown {
        display: inline-block;
    }

    .dropdown-content:hover a {
        /* opacity: 1; */
        display: block;
        /* transition: all .5s; */
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
        /* display: none; */
        /* opacity: 0; */
        margin: 5px 0 0;

        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        position: absolute;
        cursor: pointer;
        display: none;

        ul {
            list-style: none;
            margin: 0;
            padding: 12px 20px;
            background-color: #a39b8d;
        }

        li {
            background: url(${menu_line}) repeat-x 0% 0%;
            margin: 0;
            padding: 1px 0;

            &:first-child {
                background: none;
            }
        }


        &:before {
            background: url(${menu_corner}) no-repeat 0% 0%;
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
            background-color: #a39b8d;
            border: none;
            line-height: 20px;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            color: #ffffff;
            float: none;
            padding: 8px 29px 7px;
            text-decoration: none;
            display: block;
            text-align: left;
            margin: 0;

            &:hover {
                color: #fdffcd;
            }
        }
    }

    ${media.ereader`
        margin-top: 20px;

            a, .dropdown {
                text-decoration: none;
                display: inline-block;
                width: 100%;
                text-align: center;
                margin: 0;
                background-color: #a39b8d;
                color: white;
            }

            .dropdown {
                margin-bottom: 1px;
            }
    `}
`

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    toggleShow = () => {
        // $( ".dropdown" ).mouseover(function() {
            // clearTimeout($(this).data('timeoutId'));
            // $('.dropdown-content').show();
            $('.dropdown-content').slideDown();
    }

    toggleHide = () => {
        $('.dropdown-content').slideUp();    
        
        // setTimeout(function(){
        //     $('.dropdown-content').hide('slow', function(){
        //     });// or fade, css display however you'd like.
        // }, 3000); // set visible time
    }

  render() {
      console.log(this.props.currentLanguage);
    if (this.props.currentLanguage == 'bg') {
        return (
            <NavStyle>
                <Link activeClassName="active" className="" exact to="/">Начало</Link>
                <div className="dropdown" onMouseEnter={this.toggleShow} onMouseLeave={this.toggleHide}>
                <Link activeClassName="active" exact to="/bg/apartments">Апартаменти</Link>
                    <div className="dropdown-content">
                    <ul>
                        <li><Link to="/bg/classic">Класик</Link></li>
                        <li><Link to="/bg/comfort">Комфорт</Link></li>
                        <li><Link to="/bg/coral">Корал</Link></li>
                        <li><Link to="/bg/marina">Марина</Link></li>
                    </ul>
                    </div>
                </div>

                <Link activeClassName="active" exact to="/bg/prices">Цени</Link>
                <Link activeClassName="active" exact to="/bg/history">История</Link>
                <Link activeClassName="active" exact to="/bg/contacts">Контакти</Link>
            </NavStyle>
        )
    }

    return (
        <NavStyle>
            <Link activeClassName="active" className="" exact to="/">Home</Link>
            <div className="dropdown" onMouseEnter={this.toggleShow} onMouseLeave={this.toggleHide}>
            <Link activeClassName="active" exact to="/en/apartments">Apartments</Link>
                <div className="dropdown-content">
                <ul>
                    <li><Link to="/en/classic">Classic</Link></li>
                    <li><Link to="/en/comfort">Comfort</Link></li>
                    <li><Link to="/en/coral">Coral</Link></li>
                    <li><Link to="/en/marina">Marina</Link></li>
                </ul>
                </div>
            </div>

            <Link activeClassName="active" exact to="/en/prices">Prices</Link>
            <Link activeClassName="active" exact to="/en/history">History</Link>
            <Link activeClassName="active" exact to="/en/contacts">Contacts</Link>
        </NavStyle>
    )
  }
}