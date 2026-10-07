import React from "react";
import {DownloadButton} from "../ButtonElements";
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
import {cvFiles, useI18n} from "../../i18n";

interface InfoSectionProps {
    lightBg?: boolean;
    imgStart?: boolean;
    lightText?: boolean;
    darkText?: boolean;
    img?: string;
    primary?: boolean;
    dark?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
                                                     lightBg = false,
                                                     imgStart = false,
                                                     lightText = false,
                                                     darkText = false,
                                                     img,
                                                     primary = false,
                                                     dark = false,
                                                 }) => {
    const {language, t} = useI18n();
    const cv = cvFiles[language];

    return (
        <InfoContainer lightBg={lightBg} id={t.sections.about}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{t.about.topLine}</TopLine>
                            <Heading lightText={lightText}>{t.about.headline}</Heading>
                            <Subtitle darkText={darkText}>{t.about.description}</Subtitle>
                            <BtnWrap>
                                <DownloadButton
                                    href={cv.href}
                                    download={cv.download}
                                    rel="noopener"
                                    aria-label={t.about.cvAria}
                                    primary={primary}
                                    dark={dark}
                                >
                                    {t.about.buttonLabel}
                                </DownloadButton>
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
