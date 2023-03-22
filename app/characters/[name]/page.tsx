import { Metadata } from 'next';

import { charactersNames } from './data/charactersNames';
import { ICharacter } from '@/app/types/ICharacter';
import TopSection from './components/TopSection';
import Card from './components/Card';
import Quotes from './components/Quotes';

export async function generateStaticParams() {
  const data = await fetch('https://thronesapi.com/api/v2/Characters');
  const characters = await data.json();

  return characters.map((character: ICharacter) => ({
    name: character.fullName,
  }));
}

async function getCharacter(id: number) {
  const data = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
  const character: ICharacter = await data.json();
  return character;
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const character: ICharacter = await getCharacter(
    charactersNames[params.name],
  );
  return {
    title: `GOT | ${character.fullName}`,
    description: `Description of ${character.fullName} in of Game of Thrones`,
    keywords: [
      character.fullName,
      character.title,
      `Game of Thrones ${character.fullName}`,
      `Game of Thrones ${character.title}`,
      `Song of Ice and Fire ${character.fullName}`,
      `Song of Ice and Fire ${character.title}`,
    ],
  };
}

export default async function Character({
  params,
}: {
  params: { name: string };
}) {
  const character: ICharacter = await getCharacter(
    charactersNames[params.name],
  );

  return (
    <main className="m-auto w-11/12">
      <TopSection fullName={character.fullName} imageUrl={character.imageUrl} />

      <Card title={character.title} family={character.family} />

      {/* @ts-expect-error Async Server Component */}
      <Quotes fullName={character.fullName} />
    </main>
  );
}
