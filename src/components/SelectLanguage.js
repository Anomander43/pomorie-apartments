import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const LanguagesStyle = styled.section`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 50%;
  /* bottom: 0; */

  ul {
    list-style-type: none;
    margin: 0;

    li {
      display: inline-block;
      text-transform: uppercase;
      margin: 5px;
      padding: 0px 10px;
    }

    a {
      &:not(:last-child) {
        li {
          border-right: 1px solid black;
          /* &:after {
            content: ' | '
          } */
        }
      }
    }
  }
`
export default class SelectLanguage extends Component {
  constructor(props) {
    super(props);
}

  onChangeLanguage(e) {
    console.log(e);
      if(e.selected) {
        this.props.onLanguageChange(e.langKey);
      }
  }

  render() {
    console.log(this.props.langs);
    const links = this.props.langs.map(lang =>
      <Link to={lang.link} key={lang.langKey} onClick={this.onChangeLanguage.bind(this, lang)}>
        <li selected={lang.selected}>
          {lang.langKey}
        </li>
      </Link>
    );

    return (
      <LanguagesStyle>
        <ul>
          {links}
        </ul>
      </LanguagesStyle>
    );
  }
};