import Link from 'next/link';

import { ICharacter } from '@/app/types/ICharacter';

interface CharacterCardProps {
  character: ICharacter;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div key={character.id} className="rounded-sm bg-black">
      <div
        className="mx-auto mb-6 w-full rounded-t-sm bg-cover bg-center bg-no-repeat sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96"
        style={{
          backgroundImage: `url(${character.imageUrl})`,
        }}
      />

      <h3 className="block pb-3 text-center text-lg md:text-lg lg:text-xl xl:pb-4 xl:text-2xl 2xl:pb-5 2xl:text-3xl">
        {character.fullName}
      </h3>

      <div className="flex h-16 border-t-[3px] border-stone-600 p-3 text-base sm:h-20 md:h-24 md:border-t-4 lg:h-28 lg:text-lg xl:h-32 xl:py-4 xl:text-xl 2xl:h-36 2xl:py-5 2xl:text-2xl">
        <span className="mr-1.5 text-stone-400 md:mr-2 lg:mr-3">Title:</span>
        <span className="">{character.title}</span>
      </div>

      <div className="flex border-y-[3px] border-stone-600 p-3 text-base md:border-y-4 lg:text-lg xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-1.5 text-stone-400 md:mr-2 lg:mr-3">Family:</span>
        <span className="">{character.family}</span>
      </div>

      <Link
        href={`/houses/${character.fullName}`}
        className="mx-auto my-7 block w-fit rounded-md bg-zinc-700 py-2 px-4 text-base outline-none outline-3 duration-300 hover:bg-orange-600 focus:outline-offset-0 focus:outline-orange-600 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl"
      >
        View More
      </Link>
    </div>
  );
}
