import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Success() {
  return (
    <div className={styles.container}>
      <h1>Tack för ditt köp!</h1>
      <p>Du har framgångsrikt anmält dig till våra kurser.</p>
      <Link href="/">
        <a className={styles.cta}>Tillbaka till startsidan</a>
      </Link>
    </div>
  );
}