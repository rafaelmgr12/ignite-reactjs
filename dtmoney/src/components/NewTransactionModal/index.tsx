import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img src={closeImg} alt="Fechar modal" onClick={onRequestClose}  className= "react-modal-close" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Título" />
        <input placeholder="Valor" type="Number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
