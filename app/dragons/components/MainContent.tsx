'use client';

import { useState } from 'react';

import DragonsGrid from './DragonsGrid';
import Search from './Search';
import { IDragon } from '@/app/types/IDragon';

export default function MainContent({ dragons }: { dragons: IDragon[] }) {
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
      <DragonsGrid
        dragons={dragons}
        nameValue={nameValue}
        titleValue={titleValue}
        searchValue={searchValue}
      />
    </>
  );
}
