import Image from 'next/image';
import Link from 'next/link';

import map2 from '../../public/home/map2.jpeg';
import bg5 from '../../public/home/houses5.jpeg';

export default function Houses() {
  return (
    <article>
      <section id="houses" className="mx-auto w-11/12">
        <h2 className="pt-32 text-center font-cardo text-[84px] 2xl:text-8xl">
          The Noble Houses of Westeros
        </h2>
        <section className="mt-0 2xl:mt-12">
          <Image
            src={map2}
            alt="map"
            className="float-right ml-5 w-4/12 rounded-md 2xl:w-2/12"
          />
          <p className="mt-8 text-3xl">
            The Great Houses are the most powerful of the noble houses of the
            Seven Kingdoms. They exercise immense authority and power over their
            vassals and territories and are answerable only to the King of the
            Andals, the Rhoynar, and the First Men, with the exception of House
            Stark, which rules over an independent kingdom.
          </p>{' '}
          <p className="mt-8 text-3xl">
            The Great Houses are often distinguished by their sigils, words, and
            notable members. House Stark, for example, is known for its direwolf
            sigil and the words &quot;Winter is Coming.&quot; House Lannister,
            on the other hand, is recognized by its golden lion sigil and the
            words &quot;Hear Me Roar!&quot; House Targaryen, the family of the
            former ruling dynasty, is identified by its three-headed dragon
            sigil and the words &quot;Fire and Blood.&quot;
          </p>
          <p className="mt-8 text-2xl">
            Each Great House also has its own distinct history and legacy. House
            Baratheon, for instance, rose to power after the Targaryen Conquest
            when Aegon&quot;s half-brother Orys Baratheon became his closest
            ally and friend. The house&quot;s most famous member, Robert
            Baratheon, was responsible for leading a rebellion against the
            Targaryens and becoming the first non-Targaryen king to sit on the
            Iron Throne in centuries.
          </p>{' '}
          <p className="mt-4 text-2xl">
            While the Great Houses hold immense power, they are not invincible.
            Throughout the history of the Seven Kingdoms, various houses have
            risen and fallen, either through war, political intrigue, or other
            means. House Tully, for example, once a powerful and wealthy house,
            lost much of its influence after the Red Wedding, a devastating
            massacre orchestrated by House Frey and House Bolton.
          </p>{' '}
          <p className="mt-4 text-2xl">
            As the story of the Seven Kingdoms continues to unfold, the fates of
            the Great Houses remain uncertain. New alliances will be formed, old
            enemies will be resurrected, and the balance of power will
            constantly shift as each house struggles to maintain its position of
            authority and influence.
          </p>
        </section>
      </section>
      <Link
        href="/houses"
        className="group relative mt-28 flex h-96 w-screen items-center justify-center bg-black 2xl:mt-44"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-10 duration-700 group-hover:opacity-7"
          style={{
            backgroundImage: `url(${bg5.src})`,
          }}
        />
        <h3 className="absolute top-1/4 right-1/2 w-4/6 translate-x-1/2 text-center font-cardo text-7xl opacity-100 duration-500 group-hover:text-orange-600 2xl:text-8xl">
          Explore The Houses of Westeros
        </h3>
      </Link>
    </article>
  );
}
