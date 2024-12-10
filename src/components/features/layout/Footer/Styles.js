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
    width: 150px;
    height: 84px;
  }
`;

export const Info = styled.div`
  justify-content: center;
  text-align: center;
  margin-right: 2rem;
  color: #FFFFFF;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8em;
    display: block;
  }
`;

export const Line = styled.p`
  margin: 0; 
  padding: 0; 
  line-height: 1.2; 
  text-align: left;
`;

export const SocialMedias = styled.div`
  padding: 25px;
  border-left: 2px solid white;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
  @media (max-width: ${breakpoints.biggerScreen}) {
    display: none;
  }
  @media (min-width: ${breakpoints.biggerScreen}) {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 10px;
`;
