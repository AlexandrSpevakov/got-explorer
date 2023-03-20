import Image from 'next/image';

import { housesImages } from '../../data/housesImages';

interface TopSectionProps {
  houseName: string;
  id: string;
}

export default function TopSection({ houseName, id }: TopSectionProps) {
  return (
    <section className="h-screen">
      <h2 className="pt-36 text-center font-cardo text-9xl">
        House {houseName}
      </h2>
      <Image
        src={housesImages[+id - 1]}
        alt={houseName}
        className="mx-auto mt-14 h-3/5 w-auto"
      />
    </section>
  );
}
