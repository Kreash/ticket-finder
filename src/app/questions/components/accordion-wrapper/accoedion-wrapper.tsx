'use client';

import { MenuAccordion } from '@/ui/accordion/accordion';

export function AccordionWrapper() {
  return (
    <MenuAccordion>
      <MenuAccordion.Group title="Что такое Билетопоиск?">
        <MenuAccordion.Item text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Какой компании принадлежит Билетопоиск?">
        <MenuAccordion.Item text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, distinctio." />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Как купить билет на Билетопоиск?">
        <MenuAccordion.Item text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, distinctio." />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Как оставить отзыв на Билетопоиск?">
        <MenuAccordion.Item text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, distinctio." />
      </MenuAccordion.Group>
    </MenuAccordion>
  );
}
