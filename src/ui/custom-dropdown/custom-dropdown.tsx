'use client';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import styles from './custom-dropdown.module.css';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export interface CustomDropdownProps {
  title: string;
  options: DropDownItem[];
  valueChanged?: (id: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface DropDownItem {
  id: string;
  title: string;
}

export function CustomDropdown({ title, options, valueChanged, placeholder, disabled }: CustomDropdownProps) {
  const inputRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showValue, setShowValue] = useState<string>('');

  const isOpenHandler = () => {
    if (disabled) {
      return;
    }
    setIsDropdownOpen((isOpen) => !isOpen);
  };

  const position = useDropDownPosition({ ref: inputRef, isOpen: isDropdownOpen });

  const optionSelectHundler = (option: DropDownItem) => {
    setShowValue(option.title);
    setIsDropdownOpen(false);
    valueChanged?.(option.id);
  };

  return (
    <div className={styles.container}>
      <label ref={inputRef} className={styles.label}>
        {title}
        <input readOnly={true} onClick={isOpenHandler} value={showValue} className={styles.input} type="text" placeholder={placeholder ?? ''} />
        <Image
          className={styles['input-icon'] + (isDropdownOpen ? ' ' + styles.open : '')}
          src="/arrow-square-down.svg"
          alt="show dropdown icon"
          height={20}
          width={20}
        ></Image>
      </label>
      {isDropdownOpen && createPortal(<DropDown items={options} position={position} clickHandler={optionSelectHundler} />, document.body)}
    </div>
  );
}

interface DropDownProps {
  items: DropDownItem[];
  position: { top: number; left: number; width: number };
  clickHandler: (option: DropDownItem) => void;
}

function DropDown({ items, position, clickHandler }: DropDownProps) {
  return (
    <div style={{ top: position.top, left: position.left, width: position.width }} className={styles['dropdown-container']}>
      {items.map((item) => (
        <div onClick={() => clickHandler(item)} tabIndex={0} className={styles['dropdown-item']} key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

interface DropDownPositionProps {
  ref: MutableRefObject<HTMLLabelElement | null>;
  isOpen: boolean;
}

function useDropDownPosition({ ref, isOpen }: DropDownPositionProps) {
  let [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const boundingRect = ref.current?.getBoundingClientRect();
    if (!boundingRect) {
      return;
    }

    setPosition({ top: boundingRect?.bottom + 4 ?? 0, left: boundingRect?.left ?? 0, width: ref.current?.offsetWidth ?? 0 });
  }, [ref, isOpen]);

  return position;
}
