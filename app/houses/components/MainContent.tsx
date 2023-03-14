'use client';

import { useState } from 'react';

import HousesGrid from './HousesGrid';
import Search from './Search';
import { House } from '@/app/types/House';
import Filter from './Filter';

export default function MainContent({ houses }: { houses: House[] }) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('All');

  return (
    <>
      <section className="mt-40 flex items-center justify-around">
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
