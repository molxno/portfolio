import React from "react";
import {Button} from "../ButtonElements";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from "./InfoElements";

import CV from "../../data/SantiagoMolanoCV.pdf";

// Define the types for the props
interface InfoSectionProps {
    Route?: string;
    lightBg?: boolean;
    id?: string;
    imgStart?: boolean;
    topLine?: string;
    lightText?: boolean;
    headline?: string;
    darkText?: boolean;
    description?: string;
    buttonLabel?: string;
    img?: string;
    alt?: string;
    primary?: boolean;
    dark?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
                                                     Route,
                                                     lightBg = false,
                                                     id,
                                                     imgStart = false,
                                                     topLine,
                                                     lightText = false,
                                                     headline,
                                                     darkText = false,
                                                     description,
                                                     buttonLabel,
                                                     img,
                                                     alt,
                                                     primary = false,
                                                     dark = false,
                                                 }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "SantiagoMolanoCV.pdf";
        link.click();
    };

    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to={Route || ""}
                                    primary={primary}
                                    dark={dark}
                                    onClick={handleDownload}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;