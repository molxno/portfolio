import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background: #ffffff;
  padding: 0 30px;
  height: auto;
  z-index: 1;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-bottom: 10rem;
  padding: 0px 30px 0px 30px;
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
