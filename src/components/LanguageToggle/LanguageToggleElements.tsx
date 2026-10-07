import styled from "styled-components";

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
`;

export const LangButton = styled.button<{ $pressed: boolean }>`
  background: transparent;
  border: 0;
  color: ${({$pressed}) => ($pressed ? "#fff" : "#df2935")};
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  font-weight: ${({$pressed}) => ($pressed ? 700 : 600)};
  letter-spacing: 0.04em;
  line-height: 1;
  cursor: pointer;
  padding: 0.4rem 0.45rem;
  border-radius: 4px;
  transition: color 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid #df2935;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const LangSeparator = styled.span`
  color: #df2935;
  font-weight: 600;
  user-select: none;
`;
