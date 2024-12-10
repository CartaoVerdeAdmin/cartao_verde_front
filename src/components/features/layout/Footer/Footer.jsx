import {
  Container,
  Logo,
  Info,
  SocialMedias,
  Column,
  ContainerLogo,
  Line,
} from "./Styles";
import {
  LogoCartaoV,
  Instagram,
  Facebook,
  Whatsapp,
  Twitter,
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
      <SocialMedias>
        <Column>
          <a href="http://wa.me/+31992740294">
            <img src={Whatsapp} alt="Logo Whatsapp" width="80%"></img>
          </a>
          <a href="https://www.instagram.com/prefeiturabd/">
            <img src={Instagram} alt="Logo Instagram" width="80%"></img>
          </a>
        </Column>
        <Column>
          <a href="https://www.facebook.com/prefeiturabd/?locale=pt_BR">
            <img src={Facebook} alt="Logo Facebook" width="80%"></img>
          </a>
          <a href="/">
            <img src={Twitter} alt="Logo twitter" width="110%"></img>
          </a>
        </Column>
      </SocialMedias>
    </Container>
  );
}
