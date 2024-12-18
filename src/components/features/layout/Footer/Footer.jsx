import {
  Container,
  Logo,
  Info,
  ContainerLogo,
  Line,
} from "./Styles";
import {
  LogoCartaoV,
} from "../../../../assets/index";

export default function Footer() {
  return (
    <Container>
      <ContainerLogo>
        <Logo src={LogoCartaoV}></Logo>
      </ContainerLogo>
      <Info>
        <Line>CNPJ: 57.741.400/0001-75</Line>
        <Line>Razão Social: CARTAO VERDE FLORESTA EM PE LTDA</Line>
        <Line>Data de criação do site: 2024</Line>
      </Info>
    </Container>
  );
}
