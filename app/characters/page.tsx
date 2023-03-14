import Image from 'next/image';

export default async function Characters() {
  const characters = await (
    await fetch('https://thronesapi.com/api/v2/Characters')
  ).json();

  return (
    <main>
      <section className="m-auto w-11/12">
        <h2 className="pt-32 text-center font-cardo text-8xl">Characters</h2>
        <section className="mt-28 flex items-center justify-around text-2xl">
          <input
            type="text"
            placeholder="search..."
            className="w-1/4 rounded-md bg-black py-2 px-4 "
          />
          <span>Sort by</span>
        </section>
        <section className="flex flex-wrap">
          {characters.map((character: any) => (
            <span key={character.id}>characher</span>
            // <Image
            //   src={character.imageUrl}
            //   alt={character.fullName}
            //   key={character.id}
            //   width={250}
            //   height={150}
            // />
          ))}
        </section>
      </section>
    </main>
  );
}
