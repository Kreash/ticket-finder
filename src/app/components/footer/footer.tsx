import React, { ComponentElement } from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} href='/questions'>Вопросы и ответы</Link>
      <Link className={styles.link} href='/about'>О нас</Link>
      {/* <a className={styles.link}>Вопросы и ответы</a>
      <a className={styles.link}>О нас</a> */}
    </footer>
  );
}
