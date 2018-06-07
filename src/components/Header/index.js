import React, { Component } from 'react'
import Link from "gatsby-link";
import styled from "styled-components";
import logo from "../../images/logo_small.jpg";
import header from "../../images/header.jpg";
import Dropdown from "../Dropdown";
import SelectLanguage from '../SelectLanguage';

import { media } from '../../layouts/style-utils';

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

  ${media.ereader`
    padding: 20px 20px 0 20px;
  `}
`

const HeaderBlock = styled.div`
  max-width: 1170px;
  width: 100%
  margin: 0 auto;
  text-align: center;
  background: #fff;
  padding: 97px 0 43px 0;
  border-top: 5px solid #bce623;
  position: relative;

  ${media.ereader`
    padding: 20px 0;
  `}
`

export default class Header extends Component {
  constructor(props) {
      super(props);
      // this.onLanguageChange = this.onLanguageChange.bind(this);
      this.state = {
        currentLanguage: "bg"
      };
  }

  onLanguageChange(language) {
    console.log('тест1' + language);
    this.setState({
      currentLanguage: language
    })
  }

  render() {
    console.log(this.state.currentLanguage);
    const currentLanguage = this.state.currentLanguage;
    console.log(currentLanguage);

    return (
      <HeaderStyle>
        <HeaderBlock>
          <Link to="/"><img src={logo} className="logo" /></Link>
          <h1 style={{ margin: 0 }} className="main-header">
            <Link to="/">Pomorie Apartments</Link>
          </h1><SelectLanguage langs={this.props.langs} onLanguageChange={this.onLanguageChange.bind(this)} />
          <Dropdown langs={this.props.langs} currentLanguage={currentLanguage} />
          
        </HeaderBlock>
      </HeaderStyle>
    )
  }
}
