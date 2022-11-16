import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import logo from "../../images/espiral2.png";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll} from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#587cbc' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="Logo" width="90px" height="90px" />
              Origen
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='sobrenosotros' smooth={true} duration={500} spy={true} exact='true' offset={0}>Sobre nosotros</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="colaboraciones" smooth={true} duration={500} spy={true} exact='true' offset={0}>Colaboraciones</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="servicios" smooth={true} duration={500} spy={true} exact='true' offset={0}>Servicios</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contacto" smooth={true} duration={500} spy={true} exact='true' offset={0}>Contacto</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/Contacto">Cotizar</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
