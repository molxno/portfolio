import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({id}) => {
  const [hover, setHover] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Marketing Digital</HeroTitle>
        <HeroP>
          Haz crecer la cantidad de clientes potenciales y transforma tu marca en algo trascendental
        </HeroP>
        <HeroBtnWrapper>
          <Button to="/Servicio" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' darkText='true'>
            Cómo empezar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
