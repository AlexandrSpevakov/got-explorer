import Image from 'next/image';

import { housesImages } from '../../data/housesImages';

interface TopSectionProps {
  houseName: string;
  id: string;
}

export default function TopSection({ houseName, id }: TopSectionProps) {
  return (
    <section className="h-screen">
      <h2 className="pt-12 text-center font-cardo text-4xl sm:text-5xl md:pt-16 md:text-6xl lg:pt-20 lg:text-7xl xl:pt-28 xl:text-8xl 2xl:pt-36 2xl:text-9xl">
        House {houseName}
      </h2>
      <Image
        src={housesImages[+id - 1]}
        alt={houseName}
        className="mx-auto mt-4 w-auto sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 xl:h-[22rem] 2xl:mt-14 2xl:h-3/5 "
      />
    </section>
  );
}
