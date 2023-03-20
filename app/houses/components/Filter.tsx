'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import { GiCrossMark } from 'react-icons/gi';

interface FilterProps {
  filterValue: string;
  setFilterValue: (region: string) => void;
}

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

export default function Filter({ filterValue, setFilterValue }: FilterProps) {
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
        className="relative z-10 flex w-fit cursor-pointer items-center text-base sm:w-[auto] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        role="button"
        tabIndex={0}
      >
        {isOpen ? (
          <HiChevronDoubleUp className="pt-1.5 text-2xl text-stone-400 md:pt-2 md:text-3xl lg:text-4xl 2xl:pt-3 2xl:text-5xl" />
        ) : (
          <HiChevronDoubleDown className="pt-1.5 text-2xl text-stone-400 md:pt-2 md:text-3xl lg:text-4xl 2xl:pt-3 2xl:text-5xl" />
        )}
        <span className=" mr-1 select-none text-stone-400 sm:mr-1.5 md:mr-2 lg:mr-3 2xl:mr-4">
          Region:
        </span>
        <div className="absolute left-full w-44 duration-200 hover:text-orange-500 2xl:w-52">
          {filterValue}
        </div>
      </div>
      <ul
        className={
          isOpen
            ? 'absolute top-6 left-5 w-36 rounded bg-neutral-800 py-1.5 shadow-lg duration-200 sm:top-8 sm:w-44 md:top-10 md:left-6 md:w-48 md:py-2 lg:top-12 lg:left-7 lg:w-52 xl:left-9 xl:w-56 2xl:left-11 2xl:top-14 2xl:w-72'
            : 'invisible absolute top-0 left-5 w-36 rounded bg-neutral-800 py-1.5 opacity-0 shadow-lg duration-200 sm:w-44 md:left-6 md:w-48 md:py-2 lg:left-7 lg:w-52 xl:left-9 xl:w-56 2xl:left-11 2xl:top-14 2xl:w-72'
        }
        aria-hidden={!isOpen}
      >
        {regionsArr.map((region) => (
          <li
            className={
              filterValue === region
                ? 'flex cursor-pointer items-center justify-between py-1.5 px-3 text-sm text-orange-500 duration-200 hover:bg-neutral-900 sm:text-base md:py-2 md:px-4 md:text-lg lg:text-xl xl:text-2xl 2xl:py-4 2xl:px-6 2xl:text-3xl'
                : 'flex cursor-pointer items-center justify-between py-1.5 px-3 text-sm duration-200 hover:bg-neutral-900 sm:text-base md:py-2 md:px-4 md:text-lg lg:text-xl xl:text-2xl 2xl:py-3 2xl:px-5 2xl:text-3xl'
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
