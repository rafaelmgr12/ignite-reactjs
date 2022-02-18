import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions").then((data) => console.log(data));
  });

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
            <td className="withdraw">R$ - 1.000,00</td>
            <td>Desevolvimento</td>
            <td>12/12/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
