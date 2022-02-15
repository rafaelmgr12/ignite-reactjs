import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Content>
      {" "}
      <Container>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Container>
    </Content>
  );
}
