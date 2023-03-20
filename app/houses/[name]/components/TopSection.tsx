import Image from 'next/image';

import { housesImages } from '../../data/housesImages';

interface TopSectionProps {
  houseName: string;
  id: string;
}

export default function TopSection({ houseName, id }: TopSectionProps) {
  return (
    <section className="h-screen">
      <h2 className="pt-28 text-center font-cardo text-6xl lg:text-7xl xl:pt-28 xl:text-8xl 2xl:pt-36 2xl:text-9xl">
        House {houseName}
      </h2>
      <Image
        src={housesImages[+id - 1]}
        alt={houseName}
        className="mx-auto mt-12 h-4.5/10 w-auto xs:mt-8 xs:h-5.5/10 sm:h-3/5 md:mt-6 md:h-4/6 lg:mt-8 xl:mt-10 xl:h-3/5 2xl:mt-14"
      />
    </section>
  );
}
