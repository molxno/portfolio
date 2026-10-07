import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileLanguage,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavBarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {useI18n} from '../../i18n';
import LanguageToggle from '../LanguageToggle';

type ToggleFunction = () => void;

interface NavbarProps {
  toggle: ToggleFunction;
}

const Navbar: React.FC<NavbarProps> = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);
  const {language, t} = useI18n();

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({duration: 500});
  };

  return (
    <>
      <IconContext.Provider value={{color: '#b71b25'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to={`/${language}`} onClick={toggleHome}>
              {t.nav.home}
            </NavLogo>
            <MobileLanguage>
              <LanguageToggle/>
            </MobileLanguage>
            <MobileIcon type="button" onClick={toggle} aria-label={t.nav.openMenu}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to={t.sections.about}
                  smooth={true}
                  duration={900}
                  spy={true}
                  hashSpy={true}
                  offset={-60}
                  href={`#${t.sections.about}`}
                >
                  {t.nav.about}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={t.sections.experience}
                  smooth={true}
                  duration={700}
                  spy={true}
                  hashSpy={true}
                  offset={-60}
                  href={`#${t.sections.experience}`}
                >
                  {t.nav.experience}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={t.sections.projects}
                  smooth={true}
                  duration={600}
                  spy={true}
                  hashSpy={true}
                  offset={-60}
                  href={`#${t.sections.projects}`}
                >
                  {t.nav.projects}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={t.sections.skills}
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                  offset={-60}
                  href={`#${t.sections.skills}`}
                >
                  {t.nav.skills}
                </NavLinks>
              </NavItem>
              <NavItem>
                <LanguageToggle/>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
