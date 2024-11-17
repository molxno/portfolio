import styled from "styled-components";

interface InfoContainerProps {
  lightBg?: boolean;
}

interface InfoRowProps {
  imgStart?: boolean;
}

interface HeadingProps {
  lightText?: boolean;
}

interface SubtitleProps {
  darkText?: boolean;
}

export const InfoContainer = styled.div<InfoContainerProps>`
    background: ${({lightBg}) => (lightBg ? "#fff" : "#000")};
    padding: 30px 30px;
    height: auto;
    z-index: 1;

    @media screen and (max-width: 810px) {
        padding: 150px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    height: auto;
`;

export const InfoRow = styled.div<InfoRowProps>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) =>
            imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 810px) {
        grid-template-areas: ${({imgStart}) =>
                imgStart ? `'col2' 'col1'` : `'col1' 'col2'`};
        justify-items: center;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 10px 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 10px 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 40px;

    @media screen and (max-width: 768px) {
        padding-bottom: 20px;
    }
`;

export const TopLine = styled.p`
    color: #b71b25;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1<HeadingProps>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? "#fff" : "#010606")};

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

export const Subtitle = styled.p<SubtitleProps>`
    max-width: 440px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    color: ${({darkText}) => (darkText ? "#000" : "#fff")};

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    margin: 0;
    padding-right: 0;
    object-fit: cover;
    border-radius: 20px;
`;
