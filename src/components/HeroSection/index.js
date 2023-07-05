import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeaderText,
  HeaderLogo,
  HeaderTitle,
  HeaderSubtitle,
  Logo
} from "./HeroElements";
import logo from "../../images/logo.png"

const HeroSection = ({id}) => {

  return (
    <HeroContainer>
      <HeroContent>
        <HeaderText>
          <HeaderTitle>
            molxno
          </HeaderTitle>
          <HeaderSubtitle>
            Portfolio
          </HeaderSubtitle>
        </HeaderText>
        <HeaderLogo>
          <Logo src={logo} alt="Logo"/>
        </HeaderLogo>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
