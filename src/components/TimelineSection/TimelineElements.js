import styled from "styled-components";

export const TimelineContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 30px;
  height: auto;
  position: relative;
  z-index: 1;
`;

export const TimelineWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  margin-bottom: 10rem;
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
  }
`;

export const Company = styled.h3``;

export const Position = styled.h5``;

export const Description = styled.p`
  margin: 1.5em 0 2em 0;
  text-align: left;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0 0 0;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#b71b25" : "#df2935")};
  white-space: nowrap;
  padding: 12px 30px;
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#df2935" : "#b71b25")};
    color: ${({ dark }) => (dark ? "#d9dcd9" : "#fff")};
  }
`;
