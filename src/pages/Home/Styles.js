import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";

export const ContainerCarousel = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  font-size: 1.2rem;
`;

export const Overlay = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
    gap: 2 rem;
  }
`;

export const Button = styled.button`
  width: 10rem;
  border-radius: 7px;
  background-color: #f19709;
  border: none;
  color: white;
  height: 2.5rem;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${colors.font.title};
  border-bottom: 2px solid ${colors.font.title};
  padding-bottom: 10px;
  margin: 0;
  width: 51%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.7em;
    width: 80%;
  }

  /* text-align: ${(props) => (props.align === "right" ? "right" : "left")}; */
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
  }
`;

export const StyledSponsors = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.biggerScreen}) {
    max-width: 100%;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  > img {
    width: 20rem;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }
`;
