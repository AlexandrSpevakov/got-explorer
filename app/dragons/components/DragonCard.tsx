'use client';

/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { dragonsImages } from '../data/dragonsImages';
import { IDragon } from '@/app/types/IDragon';

interface DragonCardProps {
  dragon: IDragon;
}

export default function DragonCard({ dragon }: DragonCardProps) {
  const [opacity, setOpacity] = useState<string>('opacity-100');

  return (
    <div className="rounded bg-black">
      <Image
        src={dragonsImages[+dragon.id - 1]}
        alt={dragon.name}
        className={`h-[170px] w-full rounded-t duration-300 xs:h-[220px] sm:h-[300px] md:h-[370px] lg:h-[350px] xl:h-[400px] 2xl:h-[530px] ${opacity}`}
      />

      <Link
        href={`/dragons/${dragon.name}`}
        className="block rounded-b border-4 border-black outline-none focus:border-orange-600"
      >
        <h3
          className="block cursor-pointer py-2  text-center text-xl duration-300 hover:text-orange-600 sm:py-4 sm:text-2xl md:py-6 md:text-3xl lg:text-4xl xl:py-8 xl:text-5xl"
          onMouseOver={() => setOpacity('opacity-40')}
          onMouseLeave={() => setOpacity('opacity-100')}
        >
          {dragon.name}
        </h3>
      </Link>
    </div>
  );
}
