'use client';

import { useState } from 'react';

import HousesGrid from './HousesGrid';
import Search from './Search';
import { IHouse } from '@/app/types/IHouse';
import Filter from './Filter';

export default function MainContent({ houses }: { houses: IHouse[] }) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('All');

  return (
    <>
      <section className="mt-14 block items-center justify-around sm:mt-18 sm:flex sm:flex-row md:mt-20 lg:mt-28 xl:mt-36 2xl:mt-48">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      </section>
      <HousesGrid
        houses={houses}
        searchValue={searchValue}
        filterValue={filterValue}
      />
    </>
  );
}
