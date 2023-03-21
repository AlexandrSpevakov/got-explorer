import Link from 'next/link';

import { ICharacter } from '@/app/types/ICharacter';

interface CharacterCardProps {
  character: ICharacter;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const title = character.title.split(',')[0];
  const pageName = character.fullName.split(' ').join('_');

  return (
    <div key={character.id} className="rounded-sm bg-black">
      <div
        className="mx-auto mb-6 h-64 w-full rounded-t-sm bg-cover bg-center bg-no-repeat sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96"
        style={{
          backgroundImage: `url(${character.imageUrl})`,
        }}
      />

      <h3 className="block pb-3 text-center text-lg sm:text-base md:text-lg lg:text-xl xl:pb-4 xl:text-2xl 2xl:pb-5 2xl:text-3xl">
        {character.fullName}
      </h3>

      <div className="flex h-[70px] border-t-[3px] border-stone-600 p-3 sm:text-sm md:h-20 md:border-t-4 lg:text-base xl:h-24 xl:py-4 xl:text-xl 2xl:h-28 2xl:py-5 2xl:text-2xl">
        <span className="mr-1.5 text-stone-400 md:mr-2 lg:mr-3 xl:mr-3">
          Title:
        </span>
        <span className="">{title}</span>
      </div>

      <div className="flex border-y-[3px] border-stone-600 p-3 sm:text-sm md:border-y-4 lg:text-base xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-1.5 text-stone-400 md:mr-2 lg:mr-3 xl:mr-3">
          Family:
        </span>
        <span className="">{character.family}</span>
      </div>

      <Link
        href={`/characters/${pageName}`}
        className="mx-auto my-6 block w-fit rounded-md bg-zinc-700 py-2 px-4 outline-none outline-3 duration-300 hover:bg-orange-600 focus:outline-offset-0 focus:outline-orange-600 sm:text-sm md:my-7 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl"
      >
        View More
      </Link>
    </div>
  );
}
