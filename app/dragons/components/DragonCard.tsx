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
        className={`h-[400px] rounded-t duration-300 ${opacity}`}
      />

      <Link href={`/dragons/${dragon.name}`}>
        <h3
          className="block cursor-pointer py-8 text-center text-lg duration-300 hover:text-orange-600 focus:ring-offset-orange-600 sm:text-base md:text-lg lg:text-3xl xl:text-5xl 2xl:text-5xl"
          onMouseOver={() => setOpacity('opacity-40')}
          onMouseLeave={() => setOpacity('opacity-100')}
        >
          {dragon.name}
        </h3>
      </Link>
    </div>
  );
}
