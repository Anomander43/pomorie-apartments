import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from "../../images/logo_small.jpg";
import header from "../../images/header.jpg";
import Dropdown from "../Dropdown";

const HeaderStyle = styled.header`
  margin: 0 auto;
  //padding: 0px 1.0875rem 1.45rem;
  padding-top: 70px;
  z-index: 99;
  background: none;
  position: relative;

  &:before {
    background: url(${header}) no-repeat 50% 0%;
    background-attachment: fixed;
    background-size: cover;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: auto;
    z-index: -1;
    content: '';
  }

  a {
    text-decoration: none;
  }

  .logo, .main-header {
    display: inline-block;
  }

  .logo {
    margin: 0;
    margin-right: 25px;
  }

  .main-header {
    a {
      color: #6B5F53;
    }
  }
`;

const HeaderBlock = styled.div`
  width: 1170px;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  padding: 97px 0 43px 0;
  border-top: 5px solid #bce623;
`

const Header = () => (
  <HeaderStyle>
    <HeaderBlock>
      <img src={logo} className="logo" />
      <h1 style={{ margin: 0 }} className="main-header">
        <Link to="/">Pomorie Apartments</Link>
      </h1>
      <Dropdown />
    </HeaderBlock>
  </HeaderStyle>
);

export default Header;
