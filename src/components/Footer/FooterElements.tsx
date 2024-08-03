import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #000000;
    padding: 0 30px;
    height: auto;
    z-index: 1;

    @media screen and (max-width: 820px) {
        margin-top: 3rem;
    }
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        // flex-direction: column;
        display: flex;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterText = styled.section`
    max-width: 1000px;
    width: 100%;
    text-align: center;
`;

export const FooterTextWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #b71b25;
    }
`;
