'use client';

import { useState } from 'react';

import DragonsGrid from './DragonsGrid';
import Search from './Search';
import { IDragon } from '@/app/types/IDragon';

export default function MainContent({ dragons }: { dragons: IDragon[] }) {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <DragonsGrid dragons={dragons} searchValue={searchValue} />
    </>
  );
}
