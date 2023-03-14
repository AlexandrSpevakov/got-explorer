'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import { GiCrossMark } from 'react-icons/gi';

const regionsArr: string[] = [
  'All',
  'Reach',
  'Riverlands',
  'Stormlands',
  'Dorne',
  'Westerlands',
  'Vale of Arryn',
  'North',
  'Iron Islands',
];

export default function Filter({
  filterValue,
  setFilterValue,
}: {
  filterValue: string;
  setFilterValue: (region: string) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const handleDivClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDivKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') setIsOpen(!isOpen);
  };

  const handleLiClick = (region: string) => {
    setFilterValue(region);
    setIsOpen(false);
  };

  const handleLiKeyDown = (e: KeyboardEvent<HTMLElement>, region: string) => {
    if (e.code === 'Enter') handleLiClick(region);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isOpen]);

  return (
    <section ref={sortRef} className="relative pr-16">
      <div
        onClick={() => handleDivClick()}
        onKeyDown={(e) => handleDivKeyDown(e)}
        className="relative z-10 flex cursor-pointer items-center text-3xl"
        role="button"
        tabIndex={0}
      >
        {isOpen ? (
          <HiChevronDoubleUp className="pt-2 text-4xl text-stone-400" />
        ) : (
          <HiChevronDoubleDown className="pt-2 text-4xl text-stone-400" />
        )}
        <span className="mr-3 select-none text-stone-400">Region:</span>
        <div className="absolute left-full w-44 duration-200 hover:text-orange-500">
          {filterValue}
        </div>
      </div>
      <ul
        className={
          isOpen
            ? 'absolute top-12 left-9 w-52 rounded bg-neutral-800 py-2 shadow-lg duration-200'
            : 'invisible absolute top-0 left-9 w-52 rounded bg-neutral-800 py-2 opacity-0 shadow-lg duration-200'
        }
        aria-hidden={!isOpen}
      >
        {regionsArr.map((region) => (
          <li
            className={
              filterValue === region
                ? 'flex cursor-pointer items-center justify-between py-2 px-4 text-2xl text-orange-500 duration-200 hover:bg-neutral-900'
                : 'flex cursor-pointer items-center justify-between py-2 px-4 text-2xl duration-200 hover:bg-neutral-900'
            }
            onClick={() => handleLiClick(region)}
            onKeyDown={(e) => handleLiKeyDown(e, region)}
            role="option"
            aria-selected={filterValue === region}
            key={region}
          >
            {region}
            <GiCrossMark
              className={
                filterValue === region
                  ? 'text-orange-500'
                  : 'text-neutral-700 duration-100 hover:text-neutral-500'
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
