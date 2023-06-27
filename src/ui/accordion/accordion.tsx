'use client';

import React, { useCallback, useContext } from 'react';
import styles from './accordion.module.css';
import Image from 'next/image';

export interface AccordionProps {
  children: React.ReactNode;
}

const MenuContext = React.createContext<{ activeGroup: string | undefined; setActiveGroup: (value: string | undefined) => void }>({
  activeGroup: undefined,
  setActiveGroup: () => {},
});

export function MenuAccordion({ children }: AccordionProps) {
  const [activeGroup, setActiveGroup] = React.useState<string>();

  const switchGroup = useCallback((title: string | undefined) => {
    setActiveGroup((activeTitle) => (activeTitle === title ? undefined : title));
  }, []);

  return <MenuContext.Provider value={{ activeGroup, setActiveGroup: switchGroup }}>{children}</MenuContext.Provider>;
}

MenuAccordion.Group = function AccordionGroup({ children, title }: { children: React.ReactNode; title: string }) {
  const { activeGroup, setActiveGroup } = useContext(MenuContext);
  return (
    <div className={styles.group + ' card-container'}>
      <div className={styles['group-title']} onClick={() => setActiveGroup(title)}>
        <h4>{title}</h4>
        <Image
          className={styles['group-icon'] + (activeGroup ? ' ' + styles.active : '')}
          src="/arrow-square-down.svg"
          alt="show accordion icon"
          height={32}
          width={32}
        ></Image>
      </div>

      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

MenuAccordion.Item = function AccordionItem({ text }: { text: string }) {
  return <p className={styles.item}>{text}</p>;
};
