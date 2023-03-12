import Image from 'next/image';
import Link from 'next/link';

import dragon from '../../public/dragon.webp';
import bg from '../../public/dragons.webp';

export default function Dragons() {
  return (
    <article>
      <section id="houses" className="mx-auto w-11/12">
        <h2 className="pt-20 text-center font-cardo text-[84px] 2xl:text-8xl">
          Dragons
        </h2>
        <section className="mt-0 2xl:mt-12">
          <Image
            src={dragon}
            alt="map"
            className="float-right ml-5 w-4/12 rounded-md 2xl:w-2/12"
          />
          <p className="mt-8 text-3xl">
            In the world of ice and fire, dragons are a mythical and powerful
            species that once roamed the land and skies of Westeros and Essos.
            These creatures are massive, winged reptiles with long, sharp teeth
            and claws, and can breathe fire, making them a fearsome and
            formidable foe.
          </p>{' '}
          <p className="mt-8 text-3xl">
            The dragons of this world are intelligent, and can form strong bonds
            with their riders. They are capable of following commands, such as
            attacking enemy armies or defending their riders from harm. They
            also have a strong sense of self-preservation and will flee from
            danger if they feel threatened.
          </p>
          <p className="mt-8 text-2xl">
            In the past, dragons were the dominant species of the world of ice
            and fire. They were ridden by the Targaryen family, who conquered
            and ruled over the Seven Kingdoms for many years. However, the last
            known dragons died out many years before the events of the series.
          </p>{' '}
          <p className="mt-4 text-2xl">
            Despite their power, dragons are not infallible. They can be tamed
            and trained, but they are still wild beasts with a dangerous and
            unpredictable nature. As such, their use in battle and warfare can
            be both a great advantage and a great risk.
          </p>
        </section>
      </section>
      <Link
        href="/characters"
        className="group relative mt-28 flex h-96 w-screen items-center justify-center bg-black 2xl:mt-44"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-35 duration-500 group-hover:opacity-20"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <h3 className="absolute top-1/3 right-1/2 w-4/6 translate-x-1/2 text-center font-cardo text-7xl opacity-100 duration-500 group-hover:text-orange-600 2xl:text-8xl">
          Explore Dragons
        </h3>
      </Link>
    </article>
  );
}
