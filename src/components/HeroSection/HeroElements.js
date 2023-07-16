import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #000000;
  padding: 200px 30px 200px 30px;
  height: auto;
  z-index: 1;
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1199px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 5rem;
  }
`

export const HeaderText = styled.div`
  width: 50%;
  font-size: 125px;
  text-align: center;
  line-height: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  @media screen and (max-width: 1350px) {
    font-size: 100px;
  }

  @media screen and (max-width: 1199px) {
    font-size: 75px;
    width: 100%;
  }

  @media screen and (max-width: 810px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const HeaderTitle = styled.h1`
  color: #df2935;
  text-transform: uppercase;
  font-family: 'Unica One', cursive;
  font-weight: lighter;
`

export const HeaderSubtitle = styled.h2`
  color: #d9dcd9;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
`

export const HeaderLogo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`

export const Logo = styled.img`
  width: 380px;

  @media screen and (max-width: 1199px) {
    width: 80%
  }
`