import { Metadata } from 'next';
import Link from 'next/link';

import { charactersNames } from './data/charactersNames';
import { ICharacter } from '@/app/types/ICharacter';
import TopSection from './components/TopSection';
import Card from './components/Card';
import Quotes from './components/Quotes';

export async function generateStaticParams() {
  const data = await fetch('https://thronesapi.com/api/v2/Characters');
  const characters = await data.json();

  return characters.map((character: ICharacter) => ({
    name:
      character.fullName !== 'Jamie Lannister'
        ? character.fullName.split(' ').join('_')
        : 'Jaime_Lannister',
    // name: character.fullName.split(' ').join('_'),
  }));
}

async function getCharacter(id: number) {
  const data = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
  const characterInitial: ICharacter = await data.json();

  const character: ICharacter =
    characterInitial.fullName !== 'Jamie Lannister'
      ? characterInitial
      : { ...characterInitial, fullName: 'Jaime Lannister' };
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

      <Link
        href="/characters"
        className="mx-auto mb-8 mt-12 block w-fit rounded-md bg-zinc-700 py-1.5 px-4 text-xl outline-none outline-3 duration-300 hover:bg-orange-600 focus:outline-offset-0 focus:outline-orange-600 sm:mt-10 md:mb-10 md:py-3 md:px-6 md:text-2xl lg:mt-16 lg:mb-14 xl:mt-24 xl:mb-16 xl:py-4 xl:px-8 xl:text-3xl 2xl:mt-32 2xl:mb-20 2xl:py-5 2xl:px-10 2xl:text-4xl"
      >
        Back to Characters
      </Link>
    </main>
  );
}
