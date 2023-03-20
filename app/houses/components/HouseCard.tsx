import Image from 'next/image';
import Link from 'next/link';

import { IHouse } from '@/app/types/IHouse';
import { housesImages } from '../data/housesImages';

interface HouseCardProps {
  house: IHouse;
}

export default function HousesCard({ house }: HouseCardProps) {
  return (
    <div
      key={house.id}
      className="w-full rounded-md bg-black p-6 lg:p-4 lg:py-6 xl:p-8 2xl:p-10"
    >
      <Image
        src={housesImages[+house.id - 1]}
        alt={house.name}
        className="m-auto mb-3 h-20 w-auto md:mb-4 md:h-28 lg:mb-6 lg:h-32 xl:mb-10 xl:h-44 2xl:h-52"
      />

      <h3 className="block pb-1 text-center text-base md:pb-3 md:text-lg lg:text-xl xl:pb-4 xl:text-2xl 2xl:pb-5 2xl:text-3xl">
        House {house.name}
      </h3>
      <div className="flex border-t-4 border-stone-600 py-1 text-sm md:py-3 md:text-base lg:text-lg xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Seat:</span>
        <span className="">{house.seat}</span>
      </div>
      <div className="flex border-y-4 border-stone-600 py-1 text-sm md:py-3 md:text-base lg:text-lg xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Region:</span>
        <span className="">{house.region}</span>
      </div>
      <div className="flex h-16 items-center justify-center border-b-4 border-stone-600 md:h-20 xl:h-24 2xl:h-32">
        <span className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          &quot;{house.words}&quot;
        </span>
      </div>
      <Link
        href={`/houses/${house.name}`}
        className="mx-auto mt-4 block w-fit rounded-md bg-zinc-700 py-2 px-4 text-sm duration-300 hover:bg-orange-600 md:mt-8 md:text-base lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl"
      >
        Read More
      </Link>
    </div>
  );
}
