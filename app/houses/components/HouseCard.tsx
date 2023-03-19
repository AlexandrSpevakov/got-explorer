import Image from 'next/image';
import Link from 'next/link';

import { IHouse } from '@/app/types/IHouse';
import { housesImages } from '../data/housesImages';

interface HouseCardProps {
  house: IHouse;
}

export default function HousesCard({ house }: HouseCardProps) {
  return (
    <div key={house.id} className="w-full rounded-md bg-black p-8 2xl:p-10">
      <Image
        src={housesImages[+house.id - 1]}
        alt={house.name}
        className="m-auto mb-10 h-44 w-auto 2xl:h-52"
      />

      <h3 className="block pb-4 text-center text-2xl 2xl:pb-5 2xl:text-3xl">
        House {house.name}
      </h3>
      <div className="flex border-t-4 border-stone-600 py-4 text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Seat:</span>
        <span className="">{house.seat}</span>
      </div>
      <div className="flex border-y-4 border-stone-600 py-4 text-xl 2xl:py-5 2xl:text-2xl">
        <span className="mr-5 text-stone-400">Region:</span>
        <span className="">{house.region}</span>
      </div>
      <div className="flex h-24 items-center justify-center border-b-4 border-stone-600 py-2 2xl:py-3">
        <span className="text-center text-xl 2xl:text-2xl">
          &quot;{house.words}&quot;
        </span>
      </div>
      <Link
        href={`/houses/${house.name}`}
        className="mx-auto mt-10 block w-fit rounded-md bg-zinc-700 py-2 px-4 text-xl duration-300 hover:bg-orange-600 2xl:text-2xl"
      >
        Read More
      </Link>
    </div>
  );
}
