import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, useSession,signOut } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <button type="button" className={styles.signInButton} onClick = {()=>signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closedIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" onClick={() => signIn('github')} />
      Sign in with GitHub
    </button>
  );
}
