import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 5rem 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 0px 30px 0px 30px;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
  grid-row-gap: 2em;
  width: 70%;
  height: auto;
  justify-content: center;

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCardLong = styled.div`
  height: min-content;
  border: 1px solid transparent;
  background-color: #010606;
  box-shadow: 0 2px 7px gray;
  text-align: center;
  border-radius: 30px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 0 0 1em 0;

  @media screen and (max-width: 1120px) {
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;

export const SkillCard = styled.div`
  border: 1px solid transparent;
  background-color: #010606;
  box-shadow: 0 2px 7px gray;
  text-align: center;
  border-radius: 30px;
  text-align: center;
  padding: 0 0 1em 0;
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SkillIcon = styled.img`
  border-radius: 22px;
  width: 14%; /* Tamaño inicial para dispositivos de tamaño mediano */
  height: auto;
  transition: all 0.2s ease;
  padding: 1em 0;

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: 768px) {
    width: 15%; /* Reducir el tamaño en dispositivos más pequeños */
  }

  @media screen and (max-width: 480px) {
    width: 16%; /* Reducir aún más el tamaño en dispositivos móviles */
  }
`;

export const SkillTitle = styled.h2`
  font-size: 3rem;
  color: #df2935;
  text-align: left;
  padding: 5px 35px;
`;

export const SkillSubtitle = styled.p`
  color: #ffffff;
  text-align: left;
  padding: 5px 35px;
  font-size: 18px;
`;
