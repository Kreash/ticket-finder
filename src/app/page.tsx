import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const test = 'hello world';

  return (
    <>
      <header className={styles.header}></header>
      <main className={styles.main}>{test}</main>
      <footer className={styles.header}></footer>
    </>
  );
}

// <div className={styles.center}>
// <Image
//   className={styles.logo}
//   src="/next.svg"
//   alt="Next.js Logo"
//   width={180}
//   height={37}
//   priority
// />
// </div>
