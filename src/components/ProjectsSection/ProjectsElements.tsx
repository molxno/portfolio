import styled, {css, keyframes} from "styled-components";

interface HeadingProps {
  lightText?: boolean;
}

const marquee = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const ProjectsContainer = styled.section`
  background: transparent;
  padding: 30px 16px 0;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 30px 24px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 6rem;
  background: transparent;
`;

export const Heading = styled.h1<HeadingProps>`
  text-align: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? "#fff" : "#010606")};
  margin-bottom: 1.25rem;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const PauseButton = styled.button<{$pressed: boolean}>`
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${({$pressed}) => ($pressed ? "#f3f4f6" : "#ffffff")};
  color: #374151;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  cursor: pointer;

  &:hover {
    color: #b71b25;
  }

  &:focus-visible {
    outline: 2px solid #df2935;
    outline-offset: 3px;
  }
`;

export const Viewport = styled.div<{$reduced: boolean}>`
  overflow: hidden;
  width: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  padding-block: 28px;
  margin-block: -28px;
  mask-image: linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%);

  ${({$reduced}) =>
    $reduced &&
    css`
      overflow-x: auto;
      overflow-y: hidden;
      mask-image: none;
      -webkit-mask-image: none;
      scroll-snap-type: x mandatory;
    `}

  &:focus-within [data-marquee-track] {
    animation-play-state: paused;
  }
`;

export const Track = styled.div<{$duration: number; $paused: boolean; $reduced: boolean}>`
  display: flex;
  width: max-content;
  background: transparent;
  border: none;
  box-shadow: none;
  will-change: transform;
  contain: layout;
  animation: ${marquee} ${({$duration}) => $duration}s linear infinite;
  animation-play-state: ${({$paused}) => ($paused ? "paused" : "running")};

  ${({$reduced}) =>
    $reduced &&
    css`
      animation: none;
      will-change: auto;
    `}
`;

export const Set = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: stretch;
  background: transparent;
`;

export const CardSlot = styled.div`
  --card-width: 300px;
  --card-height: 360px;
  flex: 0 0 auto;
  width: calc(var(--card-width) + 1.5rem);
  padding-right: 1.5rem;
  background: transparent;
  scroll-snap-align: start;

  @media screen and (min-width: 768px) {
    --card-width: 320px;
    --card-height: 372px;
  }
`;

export const Card = styled.article`
  width: var(--card-width);
  height: var(--card-height);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(1, 6, 6, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Media = styled.div`
  flex: 0 0 auto;
  aspect-ratio: 16 / 10;
  width: 100%;
  height: auto;
  background: #f6f7f6;
  overflow: hidden;

  picture,
  img[data-cover-shot] {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[data-cover-shot] {
    object-fit: cover;
    object-position: top center;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.1rem 1.15rem;
  flex: 1;
  min-height: 0;
`;

export const Origin = styled.p`
  margin: 0 0 0.35rem;
  height: 0.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 0.9rem;
  text-transform: uppercase;
  color: #4b5563;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectName = styled.h2`
  margin: 0 0 0.35rem;
  height: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #010606;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #4b5563;
  min-height: calc(1.5em * 3);
  max-height: calc(1.5em * 3);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin-top: auto;
  min-height: 1.25rem;
`;

export const TextLink = styled.a`
  color: #374151;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.25rem;
  text-decoration: none;
  border-radius: 4px;
  white-space: nowrap;

  &:hover {
    color: #b71b25;
  }

  &:focus-visible {
    outline: 2px solid #df2935;
    outline-offset: 3px;
  }
`;
