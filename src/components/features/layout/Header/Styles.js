import styled from "styled-components";
import { Menu, Modal } from "antd";
import { breakpoints, colors, fonts } from "../../../../styles/stylesVariables";
import { Menubar } from "primereact/menubar";

export const Container = styled.div`
  height: 7rem;
  display: flex;
  background-color: ${colors.background.secondary};
  align-items: center;
  justify-content: space-evenly;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.smallTablet}) {
    padding: 0 1 rem;
    width: auto;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    padding: 0rem;
  }
`;

export const Logo = styled.img`
  width: 100px;
  display: flex;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 15px;
  padding-right: 0;
  border-left: 2px solid white;
  @media (max-width: ${breakpoints.smallTablet}) {
    border-left: 0;
  }
`;

export const SocialMedias = styled.div`
  margin-left: 15px;
  width: 100%;

  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  @media (${breakpoints.smallTablet}) {
    width: 50%;

    margin-left: 10px;
  }
  @media (${breakpoints.mobile}) {
    margin-left: 5px;
    border-left: 0%;

    gap: 20px;
  }
`;

export const SocialImg = styled.a`
  display: flex;
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: center;
  width: auto;
  .socialLogo{
    display: none;
  }
  @media (max-width: 42 0px) {
    width: auto;
    .socialLogo{
      display: none;
    }
  }
`;

export const Hamburguer = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: ${colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    width: 8rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 6rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 4rem;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
`;

export const LoginSocial = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    min-width: 0;
    width: auto;
  }
`;

export const ConteinerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    min-width: 0;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 30px;
  border: 1px solid;
  border-radius: 10px;
  color: ${colors.accent.primary};
  background-color: ${colors.background.secondary};
  font-family: ${fonts.Cabin};
  font-weight: 400;
  word-wrap: break-word;
  font-size: 1rem;
  img {
    width: 25%;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    height: 20px;
    gap: 0;
    padding: auto;
    font-size: 0.99rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    height: 20px;
    padding: auto;
    font-size: 1rem;
    gap: 0;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: auto;
    padding: auto;
    height: 15px;
    font-size: 0.8rem;
    gap: 0;
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.background.primary};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;

export const PrimeHeader = styled(Menubar)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 700;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

export const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 1.9rem;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? "auto" : "0rem")};
  overflow-y: hidden;
  font-weight: 700;
  background-color: white;
  border-radius: 0.5rem;
  gap: 0.3rem;

  button {
    border: none;
    background-color: white;
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
    p {
      font-weight: 700;
      :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 0.2rem;
      }
    }
  }
`;
