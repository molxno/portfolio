import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #000000;
    height: 100vh; /* Ocupa toda la pantalla */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const HeaderText = styled.div`
    font-size: 125px;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.8em;

    @media screen and (max-width: 1350px) {
        font-size: 100px;
    }

    @media screen and (max-width: 1199px) {
        font-size: 75px;
    }

    @media screen and (max-width: 810px) {
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeaderTitle = styled.h1`
    color: #df2935;
    text-transform: uppercase;
    font-family: 'Unica One', cursive;
    font-weight: lighter;
`;

export const HeaderSubtitle = styled.h2`
    color: #d9dcd9;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
`;
