import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";
import logo from '../../images/logo2.png'
import { animateScroll as scroll} from "react-scroll";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nosotros</FooterLinkTitle>
              <FooterLink to="/Colaboraciones">Testimonios</FooterLink>
              <FooterLink to="/Colaboraciones">Aliados</FooterLink>
              <FooterLink to="/Servicio">
                Términos y condiciones del servicio
              </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Comunícate</FooterLinkTitle>
              <FooterLink to="/Contacto">Contacto</FooterLink>
              <FooterLink to="/Contacto">Soporte</FooterLink>
              <FooterLink to="/Contacto">Ubicación</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}><img src={logo} alt="Logo" width="190px" height="190px"/></SocialLogo>
            <WebsiteRights>
              Origen © {new Date().getFullYear()} Todos los derechos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.tiktok.com"
                target="_blank"
                aria-label="TikTok"
              >
                <FaTiktok />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
