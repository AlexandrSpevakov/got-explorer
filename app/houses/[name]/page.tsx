import Link from 'next/link';

import { housesNames } from '@/app/data/houses';
import { bgs } from '../data/bgs/bgs';
import { House as IHouse } from '@/app/types/House';
import TopSection from './components/TopSection';
import Card from './components/Card';

export async function generateStaticParams() {
  const data = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/houses',
  );
  const houses = await data.json();

  return houses.map((house: IHouse) => ({
    name: house.name,
  }));
}

async function getHouse(id: number) {
  const data = await fetch(
    `https://6344adb1dcae733e8fe3067a.mockapi.io/houses/${id}`,
  );
  const house = await data.json();
  return house;
}

export default async function House({ params }: { params: { name: string } }) {
  const house: IHouse = await getHouse(housesNames[params.name]);

  return (
    <main className="m-auto w-11/12">
      <div
        className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-7"
        style={{
          backgroundImage: `url(${bgs[+house.id - 1].src})`,
        }}
      />

      <TopSection houseName={house.name} id={house.id} />

      <Card
        seat={house.seat}
        region={house.region}
        words={house.words}
        religion={house.religion}
        titles={house.titles}
      />
      <section className="mx-auto mt-20 w-10/12">
        <h3 className="mb-16 text-center text-7xl">Description</h3>
        {house.description?.map((par, i) => (
          <p
            key={i}
            className={
              i !== 0
                ? 'mb-12 text-2xl'
                : 'mb-12 text-2xl first-letter:font-cardo first-letter:text-7xl first-letter:leading-3'
            }
          >
            {par}
          </p>
        ))}
        <Link
          href="/houses"
          className="mx-auto mt-44 mb-24 block w-fit rounded-md bg-zinc-700 py-4 px-8 text-4xl duration-300 hover:bg-orange-600"
        >
          Back to Houses
        </Link>
      </section>
    </main>
  );
}
