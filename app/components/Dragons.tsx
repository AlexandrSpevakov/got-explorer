import Image from 'next/image';
import Link from 'next/link';

import dragonsImg from '../../public/home/dragonsImg.webp';
import dragonsBg from '../../public/home/dragonsBg.webp';

export default function Dragons() {
  return (
    <article id="dragons">
      <section className="mx-auto w-11/12">
        <h2 className="pt-16 text-center font-cardo text-5.5xl md:text-7xl xl:text-7.5xl 2xl:pt-20 2xl:text-8.5xl">
          Dragons
        </h2>
        <section className="mt-6 2xl:mt-10">
          <Image
            src={dragonsImg}
            alt="dragon"
            className="float-right ml-5 mb-3 w-4/12 rounded-md 2xl:w-3/12"
          />
          <p className="text-2xl md:text-3xl">
            Dragons, the powerful mythical beasts of the world of ice and fire,
            were massive winged reptiles that once roamed the skies and lands of
            Westeros and Essos, feared and revered for their sharp teeth, claws,
            and fire-breathing abilities, inspiring awe-inspiring legends of
            dragon-riders who tamed and rode these fearsome creatures, and still
            capturing the imagination of many who wonder if they may still exist
            in some distant corner of the world.
          </p>{' '}
          <p className="mt-8 text-3xl">
            The dragons of this world are intelligent, and can form strong bonds
            with their riders. They are capable of following commands, such as
            attacking enemy armies or defending their riders from harm. They
            also have a strong sense of self-preservation and will flee from
            danger if they feel threatened.
          </p>
          <p className="mt-4 text-2xl md:mt-8 md:text-3xl">
            In the past, dragons were the dominant species of the world of ice
            and fire. They were ridden by the Targaryen family, who conquered
            and ruled over the Seven Kingdoms for many years. However, the last
            known dragons died out many years before the events of the series.
          </p>{' '}
          <p className="mt-4 text-2xl 2xl:mt-8 2xl:text-3xl">
            While dragons can be tamed and trained, they remain unpredictable
            wild beasts with a dangerous nature. Although their formidable
            abilities can be a great asset in battle, it also poses great risks.
            Dragon riders must have the knowledge and skill to command these
            creatures and withstand their fiery temperament, or face
            catastrophic consequences.
          </p>
        </section>
      </section>
      <Link
        href="/dragons"
        className="group relative mt-8 flex h-60 w-screen items-center justify-center bg-black md:h-72 xl:h-80 2xl:mt-10 2xl:h-96"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-30 duration-700 group-hover:opacity-15"
          style={{
            backgroundImage: `url(${dragonsBg.src})`,
          }}
        />
        <h3 className="absolute top-1/3 right-1/2 w-4/6 translate-x-1/2 text-center font-cardo text-5xl opacity-100 duration-500 group-hover:text-orange-600 md:text-6xl xl:text-7xl 2xl:text-8xl">
          Explore Dragons
        </h3>
      </Link>
    </article>
  );
}
