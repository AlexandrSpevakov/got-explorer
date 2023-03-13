'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import bg2 from '../../public/houses/housesbg2.jpg';

// export default function Page() {}

export default function Houses() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        'https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection',
      ).then((res) => res.json());
      setHouses(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setFilteredHouses(
      houses.filter((house: any) =>
        `house ${house.name.toLowerCase()}`.includes(
          searchValue.trim().toLowerCase(),
        ),
      ),
    );
  }, [searchValue, houses]);

  return (
    <main>
      <section className="m-auto mb-32 w-11/12">
        <div
          className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url(${bg2.src})`,
          }}
        />
        <h2 className="pt-40 text-center font-cardo text-9xl">Houses</h2>
        <section className="mt-40 flex items-center justify-around">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search..."
            className="w-2/6 rounded-md bg-black py-3 px-6 text-2xl focus:outline-none focus:outline-3 focus:outline-orange-600"
          />
          <span className="text-3xl">Sort by</span>
        </section>
        <section
          className={
            searchValue.length >= 1 && filteredHouses.length < 1
              ? 'mx-auto mt-16'
              : 'mx-auto mt-16 grid grid-cols-4 gap-y-12 gap-x-10'
          }
        >
          {filteredHouses.length >= 1 ? (
            filteredHouses.map((house: any) => (
              <div key={house.id} className="w-full rounded-md bg-black p-10">
                <Image
                  src={`/../public/houses/${house.name}.webp`}
                  alt={house.name}
                  width={150}
                  height={160}
                  className="m-auto mb-10 h-44 w-auto"
                />

                <h3 className="block pb-4 text-center text-2xl">
                  House {house.name}
                </h3>
                <span className="block border-t-4 border-stone-600 py-4 text-xl">
                  Seat:&nbsp;&nbsp;{house.seat}
                </span>
                <span className="block border-y-4 border-stone-600 py-4 text-xl">
                  Region:&nbsp;&nbsp;{house.region}
                </span>
                <div className="flex h-24 items-center justify-center border-b-4 border-stone-600 py-2">
                  <span className="text-center text-xl">
                    &quot;{house.words}&quot;
                  </span>
                </div>
                <Link
                  href={`/houses/${house.name}`}
                  className="mx-auto mt-10 block w-fit rounded-md bg-stone-600 py-2 px-3 text-xl duration-300 hover:bg-orange-600"
                >
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <h3 className="text-5xl text-center my-60">
              No houses with that name were found...
            </h3>
          )}
        </section>
      </section>
    </main>
  );
}
