import { useEffect, useState } from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export function Modal({ children, isOpen }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <div className={styles.backdrop}>
            <div className={styles.modal + ' card-container'}>{children}</div>
          </div>,
          document.body,
        )}
    </>
  );
}
