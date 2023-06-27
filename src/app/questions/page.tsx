import styles from './page.module.css';
import { AccordionWrapper } from './components/accordion-wrapper/accoedion-wrapper';

export default function Questions() {
  return (
    <div className={styles.questions}>
      <div className={styles['header-card'] + ' card-container'}>Вопросы-ответы</div>

      <AccordionWrapper />
    </div>
  );
}
