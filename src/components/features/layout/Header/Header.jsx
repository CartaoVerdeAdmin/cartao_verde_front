import { Container, City } from "./Styles";
import { LogoCidade } from "../../../../assets/index";
import { HamburgerMenu } from "../../../index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, LoginSocialArea } from "../../../../components";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../../../Stores/auth";

export default function Header() {
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();

  return (
    <Container>
      <City src={LogoCidade} onClick={() => navigate("/")}></City>
      <Link to="/historia">História</Link>
      <Link to="/minhas-arvores">Árvores</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/suporte"> Apoiar</Link>
      {isAdmin ? (
        <React.Fragment>
          <Link to={"/gerenciar-usuarios"}>Usuários</Link>
          <Link to={"/gerenciar-arvores"}>Arquivos</Link>
        </React.Fragment>
      ) : null}
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
