import React from "react"
import styled from "styled-components"
import Light from "./Light"
import Dark from "./Dark"

import { 
  SearchOutline,
  MoonOutline,
  MenuOutline,
  ArrowBackOutline,
  ChevronDownOutline } from 'react-ionicons'

import {
  FormGroup,
  InputGroupAddon,
  InputGroup,
  Article,
  Navbar,
  NavbarBrand,
  DropdownToggle,
  ButtonDropdown,
  Row,
  Button,
  NavbarToggler,
  Card,
  Container,
  Input,
  Ul,
  Form,
  DropdownMenu,
  StyledComponent
} from "@bootstrap-styled/v4"

import {
  Link
} from "react-router-dom"

var Loader: any = require('react-loaders').Loader;

import "loaders.css/loaders.css"

import { createGlobalStyle } from "styled-components"

export const FontStyles: any = createGlobalStyle`

  @font-face {
    font-family: "Nunito Sans";
    src: url("../fonts/NunitoSans-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Nunito Sans";
    src: url("../fonts/NunitoSans-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Nunito Sans";
    src: url("../fonts/NunitoSans-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
  }
`;

export const GlobalStyles: any = createGlobalStyle`
`;

export const Wrapper: any = styled(Container)`
  ${(props) => `
    @media (max-width: 576px) {
      max-width: 375px!important;
    };
    @media (min-width: 1200px) {
      max-width: 1440px!important;
    }
  `};
`
const OverlayBase: any = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: hsla(100, 100%, 100%, .7);
`

const OverlayElement: any = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100vw;
`

export const Overlay = ({ children }) => (
  <OverlayBase>
    <OverlayElement>
      {children}
    </ OverlayElement>
  </OverlayBase>
)

export const Section: any = styled(Wrapper)`
  ${(props) => `
    background-color: ${props.theme["$background-color"]};
    padding: 50px 0;
    @media(max-width: 992px) {
      padding: 35px 0;
    }
  `};
`;

export const Top: any = styled(Navbar)`
  ${(props) => `
    background-color: ${props.theme["$navbar-bg"]};
    box-shadow: ${props.theme["$nav-box-shadow"]};
    padding: 0 32px;
    height: 80px;
  `};
`;

export const Logo: any = styled.h1`
  ${(props) => `
    a {
      color: ${props.theme["$title-color"]};
      font-size: ${props.theme["$h1-text-size"]};
      font-weight: ${props.theme["$font-weight-bolder"]};
      padding: 15px 0!important;
      margin: 0;
      font-size: 18px;
      &:hover,
      &:focus {
        cursor: pointer;
        text-decoration: none;
      }
      @media(min-width: 992px) {
        font-size: 24px;
      }
    }
  `};
`

export const Brand: any = styled(NavbarBrand)`
  ${(props) => `
    font-weight: 800;
  `};
`;

export const Block: any = styled(Row)`
  ${(props) => `
    margin-left: -35px!important;
    margin-right: -35px!important;
  `};
`;

export const Stage: any = styled(Block)`
  ${(props) => `
    margin-bottom: 35px!important;
  `};
`;

export const Box: any = styled.div`
  ${(props) => `
    background-color: ${props.theme["$box-bg"]};
    box-shadow: ${props.theme["$box-shadow"]};
    border-radius: ${props.theme["$border-radius"]};
    margin-bottom: 45px;
    text-size: ${props.theme["$body-text-size"]};
    &:hover,
    &:focus {
      margin-top: -1%;
      cursor: pointer;
    };
    @media(max-width: 992px) {
      margin-left: 35px;
      margin-right: 35px;
    }
  `};
`

export const BoxDetailed: any = styled.div`
  ${(props) => `
    text-size: ${props.theme["$body-text-size"]};
    margin: 0 -35px!important;
  `};
`

export const Flag: any = styled.div`
  ${(props) => `
    background-image: url(${props.src});
    border-top-left-radius: ${props.theme["$border-radius"]};
    border-top-right-radius: ${props.theme["$border-radius"]};
    background-position: center;
    background-size: cover;
    height: 160px;
    background-repeat: no-repeat;
    background-position: top;
    &.detailed {
      background-position: top left;
      background-size: contain;
      border-radius: 0;
      height: 400px;
    };
    @media(max-width: 992px) {
      height: 215px!important;
    };
    &.detailed {
      height: autoimportant!;
    }
  `};
`

export const ShortTitle: any = styled.h3`
  ${(props) => `
    color: ${props.theme["$title-color"]};
    font-size: ${props.theme["$h3-text-size"]};
    font-weight: ${props.theme["$font-weight-bolder"]};
    padding: 15px 0!important;
    margin: 0 0 0 ${props.theme["$spacer-x"]}px;
  `};
`

export const DetailedTitle: any = styled.h2`
  ${(props) => `
    color: ${props.theme["$title-color"]};
    font-size: ${props.theme["$h1-text-size"]};
    font-weight: ${props.theme["$font-weight-bolder"]};
    margin-left: ${props.theme["$spacer-x"]}px;
    margin-bottom: 30px;
  `};
`

export const Header: any = styled.header`
  ${(props) => `
    padding-top: 80px;
  `};
`;

export const Content: any = styled.header`
  ${(props) => `
    padding: 15px;
  `};
`;

export const DTerm: any= styled.strong`
  ${(props) => `
    padding: 15px;
    font-weight: ${props.theme["$font-weight-bold"]};
  `};
`;

export const SearchForm: any = styled(Form)`
  ${(props) => `
    .form-group {
      margin-bottom: 0!important;
    }
    @media(max-width: 992px) {
      margin-bottom: 55px!important;
    }
  `};
`;

export const SearchFormGroup: any = styled(FormGroup)`
  flex: 1!important;
  background-color: transparent;
`

export const SearchInputGroup: any = styled(InputGroup)`
  ${(props) => `
    flex: 1!important;
    box-shadow: ${props.theme["$box-shadow"]};
    border-radius: ${props.theme["$border-radius"]}!important;
  `};
`;

export const SearchField: any = styled.input`
  ${(props) => `
    width: 100;
    vertical-align: middle;
    padding: 13.5px 15px;
    position: relative;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    z-index: 2;
    margin-bottom: 0;
    font-size: 14px!important;
    line-height: 28px;
    color: ${props.theme["$input-color"]};
    background-color: ${props.theme["$input-bg"]};
    background-image: none;
    background-clip: padding-box;
    font-weight: ${props.theme["$font-weight-light"]};
    border: 0;
    height: 55px;
    border-radius: 0 ${props.theme["$border-radius"]} ${props.theme["$border-radius"]} 0!important;
    &::-webkit-input-placeholder {
      color: ${props.theme["$placeholder-color"]};
    }
  `};
`;

export const SearchIcon: any = styled(SearchOutline)`
  ${(props) => `
    padding: 0;
    svg {
      color: ${props.theme["$icon-color"]};
    }
  `};
`;

export const ModeIcon: any = styled(MoonOutline)`
  ${(props) => `
    margin-right: 10px;
    svg {
      color: ${props.theme["$body-color"]};
    }
  `};
`;

export const CaretIcon: any = styled(MoonOutline)`
  ${(props) => `
    margin-right: 10px;
  `};
`;

export const MenuIcon: any = styled(MenuOutline)`
  ${(props) => `
   
  `};
`;

export const FilterMenu: any = styled(DropdownMenu)`
  ${(props) => `
    background-color: ${props.theme["$btn-primary-bg"]}!important;
    .dropdown-item {
      color: ${props.theme["$body-color"]}!important;
      background-color: ${props.theme["$btn-primary-bg"]}!important;
      &:hover,
      &:focus,
      &:active,
      &.active {
        cursor: pointer;
        background-color: ${props.theme["$highlight"]}!important;
      }
    }
  `};
`;

export const FilterButton: any = styled(ButtonDropdown)`
  ${(props) => `
    width: 200px;
    height: 55px;
    border: 0;
    box-shadow: ${props.theme["$box-shadow"]}!important;
    float: right;
    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: none!important;
    };
    @media (max-width: 992px) {
      float: left!important;
    };
    * {
      font-size: ${props.theme["$body-font-size"]}!important;
      font-weight: ${props.theme["$font-weight-light"]}!important;
    }

  `};
`;

export const Toggle: any = styled(DropdownToggle)`
  ${(props) => `
    width: 200px!important;
    height: 55px;
    background-color: ${props.theme["$btn-primary-bg"]};
    border-radius: ${props.theme["$border-radius"]}!important;
    border: 0;
    background: ${props.theme["$btn-primary-bg"]};
    box-shadow: ${props.theme["$box-shadow"]};
    padding: 13.5px 15px!important;
    line-height: 28px!important;
    &:hover,
    &:active,
    &:focus,
    &:not(:disabled),
    :not(.disabled),
    .active.btn-primary {
      cursor: pointer;
      color: ${props.theme["$btn-primary-color"]}!important;
      background-color: ${props.theme["$btn-primary-bg"]}!important;
      border: 0;
    };
    svg {
      width: 14px;
    }
  `};
`;


export const DefaultButton: any = styled.button`
  ${(props) => `
     background-color: ${props.theme["$btn-primary-bg"]};
     color: ${props.theme["$btn-primary-color"]};
  `};
`

export const ModeButton: any = styled(Button)`
  ${(props) => `
    font-weight: ${props.theme["$font-weight-bold"]}!important;
    &:hover {
      cursor: pointer;
      color: ${props.theme["$primary-hover-color"]}!important;
      text-decoration: none!important;
      ouline: none!important;
      box-shadow: none!important;
    }
    &:focus,
    &:active {
      color: ${props.theme["$body-color"]}!important;
      text-decoration: none!important;
      ouline: none!important;
      box-shadow: none!important;
    }
    
  `};
`;

export const Addon: any = styled(InputGroupAddon)`
  ${(props) => `
    border-right: 0;
    border-radius: ${props.theme["$border-radius"]} 0 0 ${props.theme["$border-radius"]}!important;
    height: 55px;
    padding: 0 10px 0 30px!important;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 28px;
    color: hsl(200,15%,8%);
    text-align: center;
    background-color: ${props.theme["$input-bg"]};
    border: 0 solid rgba(0,0,0,0.15);
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
  `};
`;

export const Back: any = styled(Button)`
  ${(props) => `
    box-shadow: ${props.theme["$box-shadow"]};
    line-height: 26px!important;
    padding: 4px 25px!important; 
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:active,
    &:focus,
    &:not(:disabled),
    :not(.disabled),
    .active.btn-primary {
      cursor: pointer;
      color: ${props.theme["$btn-primary-color"]}!important;
      background-color: ${props.theme["$btn-primary-bg"]}!important;
      border: 0;
      box-shadow: ${props.theme["$box-shadow"]}!important;
    }
  `};
`;

export const BodyDetailed: any = styled(Ul)`
  ${(props) => `
    margin-bottom: 70px!important;
    @media (min-width: 992px) {
      column-count: 2;
    }
  `};
`;

export const BackIcon: any = styled(ArrowBackOutline)`
  ${(props) => `
    margin: 0 10px 0 0;
    svg {
      color: ${props.theme["$body-color"]}!important;
    }
    
  `};
`;

export const FilterIcon: any = styled(ChevronDownOutline)`
  ${(props) => `
    margin-left: 30px;
    box-shadow: none!important;
    svg {
      color: ${props.theme["$body-color"]}!important;
    },
  `};
`;

export const LoaderIcon: any = styled(Loader)`
  ${(props) => `
    @extend .ball-pulse;
    width: 50px;
    height: 20px;
    > div {
      > div {
        background-color: ${props.theme["$loader"]}!important;
      }
    }
  `};
`

export const Tag: any = styled(Link)`
  ${(props) => `
    border: 0!important;
    background-color: ${props.theme["$btn-primary-bg"]}!important;
    color: ${props.theme["$btn-primary-color"]}!important;
    font-size: 14px!important;
    box-shadow: ${props.theme["$box-shadow"]}!important;
    margin: 0 8px 10px 0;
    padding: 4px 15px;
    border-radius: 4px;
    display: inline-block;
    width: fit-content;
  `};
`;

export const ErrorBox: any = styled(Row)`
  ${(props) => `
    margin-top: -30px;
    @media(max-width: 992px) {
      margin-top: -20px;
    }
  `};
`

export const Copyright: any = styled.p`
  ${(props) => `
    @extend .py-5;
  `};
`
