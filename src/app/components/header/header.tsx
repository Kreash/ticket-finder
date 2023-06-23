import styles from './header.module.css';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo}>Билетопоиск</a>
      <div className={styles.basket}>
        <a href="">
          <Image src="/basket.svg" alt="Basket icon" height={32} width={32}></Image>
        </a>
      </div>
    </header>
  );
}
