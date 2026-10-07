import styled from "styled-components";

interface HeadingProps {
  lightText?: boolean;
}

export const SkillsContainer = styled.div`
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1<HeadingProps>`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? "#fff" : "#010606")};

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
    grid-column: 1 / -1;
    padding: 1em 0 1em 0;
`;

export const SkillCardCompact = styled.div`
    border: 1px solid transparent;
    background-color: #010606;
    box-shadow: 0 2px 7px gray;
    text-align: center;
    border-radius: 30px;
    grid-column: 1 / -1;
    padding: 0.6em 0 0.4em 0;

    h2 {
        font-size: 2rem;
    }
`;

export const SkillCard = styled.div`
    border: 1px solid transparent;
    background-color: #010606;
    box-shadow: 0 2px 7px gray;
    text-align: center;
    border-radius: 30px;
    padding: 1em 0 1em 0;
`;

export const SkillIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22%;
    min-width: 4.5rem;

    @media screen and (max-width: 480px) {
        width: 42%;
    }
`;

export const SkillIcon = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    transition: transform 0.2s ease;
    padding: 0.8em 0 0.4em;

    &:hover {
        transform: scale(1.15);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        &:hover {
            transform: none;
        }
    }
`;

export const SkillName = styled.span`
    color: #ffffff;
    font-size: 0.8rem;
    line-height: 1.3;
    padding: 0 0.35rem 1em;
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