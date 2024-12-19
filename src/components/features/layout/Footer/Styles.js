import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";

export const Container = styled.div`
  background-color: ${colors.background.secondary};
  display: flex;
  max-width: 100%;
  height: 10rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  max-width: 18%;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 0.5rem;
  align-self: flex-start;
  width: 250px;
  height: 140px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 112px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 135px;
    height: 76px;
  }
`;

export const Info = styled.div`
  justify-content: center;
  text-align: center;
  margin-right: 2rem;
  color: ${colors.background.primary};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.5em;
    display: block;
    max-width: 13em;
    margin-left: 1em;
    margin-right: 0.7em;
  }
`;

export const Line = styled.p`
  margin: 0; 
  padding: 0; 
  line-height: 1.2; 
  text-align: left;
`;



export const Column = styled.div`
  display: flex;
  gap: 10px;
`;
