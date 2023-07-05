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
} from "./NavBarElements";
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
    scroll.scrollToTop({duration: 500})
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#b71b25' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              molxno.dev
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='aboutme' smooth={true} duration={900} spy={true} exact='true' offset={0}>Who is Molxno?</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="experience" smooth={true} duration={700} spy={true} exact='true' offset={0}>Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="projects" smooth={true} duration={600} spy={true} exact='true' offset={0}>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={0}>Skills</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
