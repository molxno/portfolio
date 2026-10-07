import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
} from "./HeroElements";
import {useI18n} from "../../i18n";

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({id}) => {
  const {t} = useI18n();

  return (
    <HeroContainer id={id}>
      <HeroContent>
        <HeaderText>
          <HeaderTitle>{t.hero.title}</HeaderTitle>
          <HeaderSubtitle>{t.hero.subtitle}</HeaderSubtitle>
        </HeaderText>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
