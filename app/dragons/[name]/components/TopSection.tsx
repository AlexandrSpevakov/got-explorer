import Image from 'next/image';

import { dragonsImages } from '../../data/dragonsImages';

interface TopSectionProps {
  dragonName: string;
  id: string;
}

export default function TopSection({ dragonName, id }: TopSectionProps) {
  return (
    <section className="h-screen">
      <h2 className="pt-28 text-center font-cardo text-6xl lg:text-7xl xl:pt-28 xl:text-8xl 2xl:pt-36 2xl:text-9xl">
        {dragonName}
      </h2>
      <Image
        src={dragonsImages[+id - 1]}
        alt={dragonName}
        className="mx-auto mt-12 h-1/4 w-auto rounded xs:mt-8 xs:h-2/5 sm:h-1/2 md:mt-6 md:h-4/6 lg:mt-8 xl:mt-10 xl:h-3/5 2xl:mt-14"
      />
    </section>
  );
}
