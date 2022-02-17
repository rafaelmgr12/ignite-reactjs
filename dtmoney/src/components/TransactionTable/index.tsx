import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desevolvimento</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className = "withdraw">R$ - 1.000,00</td>
            <td>Desevolvimento</td>
            <td>12/12/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
