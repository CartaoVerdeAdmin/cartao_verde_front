import styled, { keyframes, css } from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";
import { Checkbox as AntCheckbox } from "antd";
import { Button } from "@components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
  text-align: justify;
  margin-top: 30px;
  p {
    font-size: 1.5rem;
    width: 75%;
    margin-bottom: 0;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 25rem;
    @media (max-width: ${breakpoints.mobile}) {
      width: 15rem;
    }
  }
`;

export const StyledCheckBox = styled(AntCheckbox)`
  &.custom-checkbox {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.background.secondary};
      border-color: ${colors.font.secondary};
    }
  }
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 17px;
  color: ${(props) => (props.alert ? "red" : colors.font.primary)};
  ${(props) =>
    props.alert &&
    css`
      animation: ${slideAnimation} 0.5s forwards;
    `}
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    font-weight: bold;
    gap: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  gap: 25px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
    gap: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
    gap: 10px;
  }
`;

export const ModalButton = styled(Button)`
  @media (max-width: ${breakpoints.tablet}) {
    width: 150px;
    height: 50px;
    font-size: 1.5rem;
    padding: 10px;
    gap: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 30px;
    font-size: 0.8rem;
    padding: 10px;
    gap: 5px;
  }
`;
