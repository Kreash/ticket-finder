'use client';

import styles from './ticket-modal.module.css';
import { Modal } from '@/ui/modal/modal';
import Image from 'next/image';
import { useState } from 'react';

export interface TicketModalProps {
  isOpen: boolean;
  id: string;
  completeHandler: (id: string) => void;
  closeHandler: () => void;
}

export function TicketModal({ isOpen, id, completeHandler, closeHandler }: TicketModalProps) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal isOpen={isOpen}>
      <div className={styles.modal}>
        <div className={styles['title-wrapper']}>
          <h3 className={styles.title}>Удаление билета</h3>
          <button className={styles.remove} onClick={() => closeHandler()}></button>
        </div>
        <p className={styles.text}>Вы уверены, что хотите удалить билет?</p>
        <div className={styles.buttons}>
          <button className={styles.button + ' ' + styles.agree} onClick={() => completeHandler(id)}>
            Да
          </button>
          <button className={styles.button + ' ' + styles.close} onClick={() => closeHandler()}>
            Нет
          </button>
        </div>
      </div>
    </Modal>
  );
}
