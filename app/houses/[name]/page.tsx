import Image from 'next/image';

import { housesNames } from '@/app/data/houses';
import { House as IHouse } from '@/app/types/House';

export async function generateStaticParams() {
  const houses = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection',
  ).then((res) => res.json());

  return houses.map((house: IHouse) => ({
    name: house.name,
  }));
}

async function getHouse(id: string) {
  const house = await fetch(
    `https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection/${id}`,
  );
  return house.json();
}

export default async function House({ params }: { params: { name: string } }) {
  const house: IHouse = await getHouse(housesNames[params.name].toString());
  const img = await import(`../../../public/houses/${house.name}.webp`);

  return (
    <main>
      <section className="m-auto mb-32 w-11/12">
        {/* <div
          className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}
        /> */}
        <h2 className="pt-40 text-center font-cardo text-9xl">
          Single {house.name}
        </h2>
        <p className="text-center text-3xl">{house.titles}</p>
        <Image
          src={img}
          alt={house.name}
          width={160}
          height={176}
          className="m-auto mb-10 h-44 w-auto"
        />
      </section>
    </main>
  );
}
