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
import logo from "../../images/logo.png";

// Define the type for the props
interface HeroSectionProps {
    id?: string; // id is optional
}

const HeroSection: React.FC<HeroSectionProps> = ({id}) => {
    return (
        <HeroContainer id={id}>
            <HeroContent>
                <HeaderText>
                    <HeaderTitle>
                        Molano
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
