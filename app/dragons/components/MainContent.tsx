'use client';

import { useState } from 'react';

import CharactersGrid from './CharactersGrid';
import Search from './Search';
import { ICharacter } from '@/app/types/ICharacter';

export default function MainContent({
  characters,
}: {
  characters: ICharacter[];
}) {
  const [nameValue, setNameValue] = useState<string>('');
  const [titleValue, setTitleValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('name');

  return (
    <>
      <Search
        searchValue={searchValue}
        nameValue={nameValue}
        titleValue={titleValue}
        setSearchValue={setSearchValue}
        setNameValue={setNameValue}
        setTitleValue={setTitleValue}
      />
      <CharactersGrid
        characters={characters}
        nameValue={nameValue}
        titleValue={titleValue}
        searchValue={searchValue}
      />
    </>
  );
}
