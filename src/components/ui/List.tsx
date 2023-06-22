import { ReactNode } from 'react';

import classes from './List.module.scss';

type Props<T> = {
  children: (item: T) => ReactNode,
  emptyItem: ReactNode,
  items: T[],
  className?: string,
};

function List({
  children,
  emptyItem,
  items,
  className = '',
}: Props<any>) {
  const rootClasses = [
    'list',
    items.length ? '' : 'list--empty',
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={rootClassName}>
      {
        items.length > 0
          ? items.map((item) => <li key={item.id}>{ children(item) }</li>)
          : <li>{ emptyItem }</li>
      }
    </ul>
  );
}

export default List;
