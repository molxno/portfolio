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
import {useI18n} from "../../i18n";

interface InfoSectionProps {
    Route?: string;
    lightBg?: boolean;
    imgStart?: boolean;
    lightText?: boolean;
    darkText?: boolean;
    img?: string;
    primary?: boolean;
    dark?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
                                                     Route,
                                                     lightBg = false,
                                                     imgStart = false,
                                                     lightText = false,
                                                     darkText = false,
                                                     img,
                                                     primary = false,
                                                     dark = false,
                                                 }) => {
    const {t} = useI18n();
    const sectionId = t.sections.about;

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "SantiagoMolanoCV.pdf";
        link.click();
    };

    return (
        <InfoContainer lightBg={lightBg} id={sectionId}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{t.about.topLine}</TopLine>
                            <Heading lightText={lightText}>{t.about.headline}</Heading>
                            <Subtitle darkText={darkText}>{t.about.description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to={Route || ""}
                                    primary={primary}
                                    dark={dark}
                                    onClick={handleDownload}
                                >
                                    {t.about.buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={t.about.photoAlt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
