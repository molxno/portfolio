import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
} from "./HeroElements";

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({id}) => {
  return (
    <HeroContainer id={id}>
      <HeroContent>
        <HeaderText>
          <HeaderTitle>Molano</HeaderTitle>
          <HeaderSubtitle>Portfolio</HeaderSubtitle>
        </HeaderText>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
