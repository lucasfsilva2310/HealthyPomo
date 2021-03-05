import styled from "styled-components";

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;
  font-size: 1rem;

  div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 0.1rem;
    position: relative;
  }

  div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  /* Usar translate para centralizar um elemento que tem o position absolute */
  transform: translateX(-50%);
  transition: all 0.7s;
`;
