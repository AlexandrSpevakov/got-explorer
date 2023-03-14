import Image from 'next/image';
import Link from 'next/link';

import { House } from '@/app/types/House';
import { images } from '../images/images';

interface HouseCardProps {
  house: House;
  index: number;
}

export default function HousesCard({ house, index }: HouseCardProps) {
  return (
    <div key={house.id} className="w-full rounded-md bg-black p-10">
      <Image
        src={images[index]}
        alt={house.name}
        width={160}
        height={176}
        className="m-auto mb-10 h-44 w-auto"
      />

      <h3 className="block pb-4 text-center text-2xl">House {house.name}</h3>
      <div className="flex border-t-4 border-stone-600 py-4 text-xl">
        <span className="mr-5 text-stone-400">Seat:</span>
        <span className="">{house.seat}</span>
      </div>
      <div className="flex border-y-4 border-stone-600 py-4 text-xl">
        <span className="mr-5 text-stone-400">Region:</span>
        <span className="">{house.region}</span>
      </div>
      <div className="flex h-24 items-center justify-center border-b-4 border-stone-600 py-2">
        <span className="text-center text-xl">&quot;{house.words}&quot;</span>
      </div>
      <Link
        href={`/houses/${house.name}`}
        className="mx-auto mt-10 block w-fit rounded-md bg-zinc-700 py-2 px-4 text-xl duration-300 hover:bg-orange-600"
      >
        Read More
      </Link>
    </div>
  );
}
