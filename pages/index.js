import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindfulness & Stresshantering Kurser</title>
        <meta name="description" content="Hitta verktyg för att hantera stress med vår kursportal för mindfulness." />
        <meta name="keywords" content="mindfulness kurs, hantera stress, online stressterapi" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hitta Din Inre Frid</h1>
        <p className={styles.description}>
          Utforska våra kurser idag och starta din resa mot bättre välmående.
        </p>
        <Link href="/checkout">
          <a className={styles.cta}>Starta Din Resa</a>
        </Link>
      </main>
    </div>
  );
}