import Image from 'next/image';

export default async function Houses() {
  const houses = await (
    await fetch('https://6344adb1dcae733e8fe3067a.mockapi.io/photo-collection')
  ).json();

  return (
    <main>
      <section className="m-auto w-11/12">
        <h2 className="pt-32 text-center font-cardo text-8xl">Houses</h2>
        <section className="mt-28 flex items-center justify-around text-2xl">
          <input
            type="text"
            placeholder="search..."
            className="w-1/4 rounded-md bg-black py-2 px-4 "
          />
          <span>Sort by</span>
        </section>
        <section className="grid grid-cols-6 mt-16 mx-auto justify-center">
          {houses.map((house: any) => (
            <Image
              src={`/../public/houses/${house.name}.webp`}
              alt={house.name}
              key={house.id}
              width={150}
              height={400}
              className="justify-self-center"
            />
          ))}
        </section>
      </section>
    </main>
  );
}
