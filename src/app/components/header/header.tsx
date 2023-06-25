import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Билетопоиск
      </Link>
      <div className={styles.basket}>
        <Link href="/basket">
          <Image src="/basket.svg" alt="Basket icon" height={32} width={32}></Image>
        </Link>
      </div>
    </header>
  );
}
