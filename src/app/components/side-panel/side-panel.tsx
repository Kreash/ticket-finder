import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './side-panel.module.css';
import Image from 'next/image';

export function SidePanel({}) {
  return (
    <div className={styles['side-panel-wrapper']}>
    <aside className={styles['side-panel'] + ' card-container'}>
      <div className={styles.title}>Фильтр поиска</div>
      <div className={styles.filters}></div>
      filters set
    </aside>
    </div>

  );
}


// export const SidePanel2: FunctionComponent = ({}) => {
//   return (
//     <aside className={styles['side-panel'] + ' card-container'}>
//       <div className={styles.title}>Фильтр поиска</div>
//       <div className={styles.filters}></div>
//       filters set
//     </aside>
//   );
// }
