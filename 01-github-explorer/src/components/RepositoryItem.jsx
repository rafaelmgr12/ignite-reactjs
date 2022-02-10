export function RepositoryItem(props) {
  return (
    <ul>
      <li>
        <strong>{props.repository?.name ?? 'Default'}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.link}>{props.repository.link}</a>
      </li>
    </ul>
  );
}
