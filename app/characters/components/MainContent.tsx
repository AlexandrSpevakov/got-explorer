'use client';

import { useState } from 'react';

import CharactersGrid from './CharactersGrid';
import Search from './Search';
import Filter from './Filter';
import { ICharacter } from '@/app/types/ICharacter';

export default function MainContent({
  characters,
}: {
  characters: ICharacter[];
}) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('All');

  return (
    <>
      <section className="mt-14 block items-center justify-around sm:mt-16 sm:flex sm:flex-row md:mt-20 lg:mt-28 xl:mt-36 2xl:mt-48">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      </section>
      <CharactersGrid
        characters={characters}
        searchValue={searchValue}
        filterValue={filterValue}
      />
    </>
  );
}
