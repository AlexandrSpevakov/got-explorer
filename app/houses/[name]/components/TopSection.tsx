import Image from 'next/image';

import { images } from '../../data/images/images';

interface TopSectionProps {
  houseName: string;
  id: string;
}

export default function TopSection({ houseName, id }: TopSectionProps) {
  return (
    <section className="h-screen">
      <h2 className="pt-28 text-center font-cardo text-9xl">
        House {houseName}
      </h2>
      <Image
        src={images[+id - 1]}
        alt={houseName}
        className="mx-auto mt-12 h-3/5 w-auto"
      />
    </section>
  );
}
