import { useEffect, useRef, useState } from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '@/hooks/outside-click/outside-click';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  outsideClickHandler?: () => void;
}

export function Modal({ children, isOpen, outsideClickHandler }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const handleCloseModal = () => {
    outsideClickHandler?.();
  };

  useOutsideClick(modalRef, handleCloseModal);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <div className={styles.backdrop}>
            <div ref={modalRef} className={styles.modal + ' card-container'}>
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
