import styled, {keyframes} from "styled-components";

interface HeadingProps {
  lightText?: boolean;
}

const pulse = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.28);
  }
`;

export const TimelineContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 16px 0;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 30px 24px 0;
  }
`;

export const Heading = styled.h1<HeadingProps>`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TimelineList = styled.ol`
  list-style: none;
  position: relative;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 6rem;
  padding: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 12px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(223, 41, 53, 0) 0%,
      #df2935 14%,
      #df2935 86%,
      rgba(223, 41, 53, 0) 100%
    );
    pointer-events: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1120px;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const TimelineItem = styled.li<{$side: "left" | "right"; $visible: boolean}>`
  position: relative;
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  column-gap: 0.85rem;
  width: 100%;
  margin: 0 0 3.25rem;
  opacity: ${({$visible}) => ($visible ? 1 : 0)};
  transform: translate3d(0, ${({$visible}) => ($visible ? 0 : 14)}px, 0);
  transition: opacity 0.45s ease, transform 0.45s ease;
  transition-delay: var(--stagger, 0ms);

  @media screen and (min-width: 768px) {
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 48px minmax(0, 1fr);
    column-gap: 0;
    align-items: start;
    margin-bottom: 4rem;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const TimelineNode = styled.span<{$current?: boolean}>`
  grid-column: 1;
  justify-self: center;
  width: 12px;
  height: 12px;
  margin-top: 0.35rem;
  border-radius: 50%;
  background: #df2935;
  box-shadow: 0 0 0 3px #ffffff, 0 0 10px rgba(223, 41, 53, 0.28);
  pointer-events: none;
  animation: ${({$current}) => ($current ? pulse : "none")} 2s ease-in-out infinite;

  @media screen and (min-width: 768px) {
    margin-top: 0.2rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2;
    width: 14px;
    height: 14px;
    margin-top: 1.35rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const OppositeDate = styled.p<{$side: "left" | "right"}>`
  display: none;
  font-family: "Unica One", cursive;
  font-size: 1.35rem;
  line-height: 1.2;
  color: #4b5563;
  margin: 0;
  padding-top: 1.25rem;

  @media screen and (min-width: 1024px) {
    display: block;
    grid-column: ${({$side}) => ($side === "left" ? 3 : 1)};
    text-align: ${({$side}) => ($side === "left" ? "left" : "right")};
    padding-left: ${({$side}) => ($side === "left" ? "1.5rem" : "0")};
    padding-right: ${({$side}) => ($side === "right" ? "1.5rem" : "0")};
  }
`;

export const CompanyCard = styled.article<{$side: "left" | "right"}>`
  grid-column: 2;
  width: 100%;
  min-width: 0;
  background: #ffffff;
  color: #010606;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(1, 6, 6, 0.06);
  padding: 1.15rem 1.1rem 1.2rem;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 14px 32px rgba(1, 6, 6, 0.1);
  }

  @media screen and (min-width: 768px) {
    padding: 1.5rem 1.75rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column: ${({$side}) => ($side === "left" ? 1 : 3)};
    justify-self: ${({$side}) => ($side === "left" ? "end" : "start")};
    width: 100%;
    max-width: 520px;
    margin-right: ${({$side}) => ($side === "left" ? "1.25rem" : "0")};
    margin-left: ${({$side}) => ($side === "right" ? "1.25rem" : "0")};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const CardDate = styled.p`
  display: block;
  margin: 0 0 0.45rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #4b5563;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 0.75rem;
  margin-bottom: 0.55rem;
`;

export const CompanyName = styled.h2`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 600;
  color: #010606;
  margin: 0;
`;

export const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  color: #b71b25;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const CurrentDot = styled.span`
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background: #df2935;
  animation: ${pulse} 2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const RoleList = styled.div`
  margin: 0 0 0.85rem;
`;

export const RoleLine = styled.p`
  margin: 0 0 0.2rem;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: #111827;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const RoleMeta = styled.span`
  display: inline;
  font-weight: 600;
  color: #4b5563;
`;

export const AchievementList = styled.ul`
  margin: 0 0 1rem;
  padding-left: 1.1em;
  color: #4b5563;
`;

export const AchievementItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.4rem;
  color: #4b5563;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ChipRow = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 0.95rem;
  padding: 0;
`;

export const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  background: #f3f4f6;
  border-radius: 999px;
  padding: 0.22em 0.6em 0.22em 0.4em;
  font-size: 0.8125rem;
  line-height: 1.3;
  color: #111827;
`;

export const ChipIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

export const LinkedInLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  color: #374151;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 4px;

  svg {
    width: 1em;
    height: 1em;
  }

  &:hover {
    color: #b71b25;
  }

  &:focus-visible {
    outline: 2px solid #df2935;
    outline-offset: 3px;
  }
`;
