'use client';

import { useState } from 'react';

import HousesGrid from './HousesGrid';
import Search from './Search';

export default function MainContent({ houses }: { houses: any }) {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <>
      <section className="mt-40 flex items-center justify-around">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <span className="text-3xl">Sort by</span>
      </section>
      <HousesGrid houses={houses} searchValue={searchValue} />
    </>
  );
}
