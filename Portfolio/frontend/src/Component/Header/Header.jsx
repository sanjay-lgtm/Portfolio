import React from 'react'
import {ReactNavbar} from 'overlay-navbar';
import logo from '../../Images/logo.png'
import { FaUserAlt } from "react-icons/fa";
import './Header.css'
const Header = () => {
  return (
    <ReactNavbar navColor1="white"
    navColor2="black"
    burgerColor="hs1(250,100%,75%)"
    burgerColorHover="hs1(250,100%,75%)"
    logoWidth="250px"
    logo={logo}
    logoHoverColor="hs1(250,100%,75%)"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="white"
    link1Color="#HSL(250,100%,75%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColorHover="white"
    />
  )
}

export default Header