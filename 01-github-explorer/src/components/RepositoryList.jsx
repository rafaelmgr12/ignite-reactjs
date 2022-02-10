import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  linkName: "Acesar repositório",
  link: 'https://github.com/unform/unform"',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de Repositórios</h1>
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
    </section>
  );
}
