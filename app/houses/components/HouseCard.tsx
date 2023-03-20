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
      className="w-64 rounded-md bg-black px-6 py-5 xs:w-72 sm:w-full sm:py-6 sm:px-8 md:p-6 lg:p-4 lg:py-6 xl:p-8 2xl:p-10"
    >
      <Image
        src={housesImages[+house.id - 1]}
        alt={house.name}
        className="m-auto mb-3 h-24 w-auto xs:h-28 sm:h-24 md:mb-4 md:h-28 lg:mb-6 lg:h-32 xl:mb-10 xl:h-44 2xl:h-52"
      />

      <h3 className="block pb-3 text-center text-lg md:text-lg lg:text-xl xl:pb-4 xl:text-2xl 2xl:pb-5 2xl:text-3xl">
        House {house.name}
      </h3>
      <div className="flex border-t-[3px] border-stone-600 py-3 text-base md:border-t-4 lg:text-lg xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Seat:</span>
        <span className="">{house.seat}</span>
      </div>
      <div className="flex border-y-[3px] border-stone-600 py-3 text-base md:border-y-4 lg:text-lg xl:py-4 xl:text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Region:</span>
        <span className="">{house.region}</span>
      </div>
      <div className="flex h-20 items-center justify-center border-b-[3px] border-stone-600 md:border-b-4 xl:h-24 2xl:h-32">
        <span className="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          &quot;{house.words}&quot;
        </span>
      </div>
      <Link
        href={`/houses/${house.name}`}
        className="mx-auto mt-8 block w-fit rounded-md bg-zinc-700 py-2 px-4 text-base duration-300 hover:bg-orange-600 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl"
      >
        Read More
      </Link>
    </div>
  );
}
