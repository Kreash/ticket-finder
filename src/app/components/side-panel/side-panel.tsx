'use client';

import styles from './side-panel.module.css';
import { CustomInput } from '@/ui/custom-input/custom-input';
import { CustomDropdown, DropDownItem } from '@/ui/custom-dropdown/custom-dropdown';

const mockItems: DropDownItem[] = [
  {
    id: 1,
    title: 'item 1',
  },
  {
    id: 2,
    title: 'item 2',
  },
  {
    id: 3,
    title: 'item 3',
  },
];

export function SidePanel({}) {
  const inputHandler = (value: string) => {
    console.log('inputHandler', value);
  };

  return (
    <div className={styles['side-panel-wrapper']}>
      <aside className={styles['side-panel'] + ' card-container'}>
        <div className={styles.title}>Фильтр поиска</div>
        <div className={styles.filters}>
          <CustomInput valueChanged={inputHandler} title="Название" placeholder="Введите название"></CustomInput>
          <CustomDropdown title="Жанр" options={mockItems} />
          <CustomDropdown title="Кинотеатр" options={mockItems} />
        </div>
      </aside>
    </div>
  );
}
