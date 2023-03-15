import Image from 'next/image';
import Link from 'next/link';

import { housesNames } from '@/app/data/houses';
import { images } from '../data/images/images';
import { bgs } from '../data/bgs/bgs';
// import bg from '../../../public/houses/bgs/Blackwood.jpeg';
import { House as IHouse } from '@/app/types/House';

// export async function generateStaticParams() {
//   const houses = await fetch(
//     'https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection',
//   ).then((res) => res.json());

//   return houses.map((house: IHouse) => ({
//     name: house.name,
//   }));
// }
//

async function getHouse(id: string) {
  const house = await fetch(
    `https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection/${id}`,
  );
  return house.json();
}

export default async function House({ params }: { params: { name: string } }) {
  const house: IHouse = await getHouse(housesNames[params.name].toString());

  return (
    <main className="m-auto w-11/12">
      <div
        className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-7"
        style={{
          backgroundImage: `url(${bgs[+house.id - 1].src})`,
        }}
        // style={{
        //   backgroundImage: `url(${bg.src})`,
        // }}
      />
      <section className="h-screen">
        <h2 className="pt-28 text-center font-cardo text-9xl">
          House {house.name}
        </h2>
        <Image
          src={images[+house.id - 1]}
          alt={house.name}
          className="mx-auto mt-12 h-3/5 w-auto"
        />
      </section>

      <section className="mx-auto mt-16 grid w-4/6 grid-cols-card items-center justify-items-center gap-y-10 rounded-md bg-black/40 py-10 px-14 text-center text-4xl">
        <div className="flex  w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
          <span className="">Seat</span>
        </div>
        <span className="w-full border-b-4 border-stone-600 pb-4">
          {house.seat}
        </span>
        <div className="flex  w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
          <span className="">Region</span>
        </div>
        <div className="w-full border-b-4 border-stone-600 pb-4">
          {house.region}
        </div>
        <div className="flex  w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
          <span className="">Words</span>
        </div>
        <span className="w-full border-b-4 border-stone-600 pb-4">
          &quot;{house.words}&quot;
        </span>
        <div className="flex  w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
          <span className="">Religion</span>
        </div>
        <span className="w-full border-b-4 border-stone-600 pb-4">
          {house.religion}
        </span>
        <div className="flex  h-full w-full text-zinc-400">
          <span className="self-center">
            {house.titles.length > 2 ? 'Titles' : 'Title'}
          </span>
        </div>
        <div className="flex w-full flex-col text-3xl">
          {house.titles.map((title, i) => (
            <span key={i}>{title}</span>
          ))}
        </div>
      </section>
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
          className="mx-auto mt-44 mb-24 block w-fit rounded-md bg-zinc-700 py-5 px-10 text-5xl duration-300 hover:bg-orange-600"
        >
          Back to Houses
        </Link>
      </section>
    </main>
  );
}
