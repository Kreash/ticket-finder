import React, { ComponentElement } from 'react';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link}>Вопросы и ответы</a>
      <a className={styles.link}>О нас</a>
    </footer>
  );
}
