import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";
import Modal from "react-modal";

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
