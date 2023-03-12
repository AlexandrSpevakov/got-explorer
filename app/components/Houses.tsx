import Image from 'next/image';
import Link from 'next/link';

import map2 from '../../public/map2.jpeg';
import bg5 from '../../public/houses5.jpeg';

export default function Houses() {
  return (
    <article>
      <section id="houses" className="mx-auto w-11/12">
        <h2 className="pt-32 text-center font-cardo text-[84px] 2xl:text-8xl">
          The Noble Houses of Westeros
        </h2>
        <section className="mt-16">
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
            Before the Targaryen Conquest, each of the Seven Kingdoms was ruled
            independently by a powerful royal family. During the Conquest these
            families were either destroyed, replaced, or defeated and made to
            swear allegiance to King Aegon, who reigned from the Iron Throne in
            King&apos;s Landing.
          </p>
          <p className="mt-8 text-2xl">
            The War of the Five Kings, along with Daenerys Targaryen&apos;s war
            for Westeros, has seen changes amongst the Great Houses. House
            Baratheon is no longer the royal house, and two of it&apos;s
            branches have become extinct, House Tyrell is also extinct, and has
            been succeeded by Bronn&apos;s unnamed house. The Riverlands and the
            titles of House Tully, which is also near extinction, defeated in
            the war and exiled, have been given to its usurping former vassals
            House Frey, though the other Tully vassals remain opposed to the
            Freys, whose male line has, meanwhile, been effectively wiped out,
            allowing the Tullys to reclaim their position
          </p>{' '}
          <p className="mt-4 text-2xl">
            With the coronation of Queen Cersei Lannister, the Crownlands was
            held by House Lannister, the new royal house after the legal
            extinction of the Baratheons (though after the legitimization of
            Gendry Baratheon by Queen Daenerys Targaryen, House Baratheon has
            been restored). Although scattered early in the war and stripped of
            lands and titles, House Stark has regained control of the North
            through the defeat of its usurping vassals House Bolton, and later
            gained independence. After the battle of King&apos;s Landing, the
            Lannisters&apos; brief reign as Royal House ended, and once again,
            they only rule the Westerlands. However, the Lannisters face an
            uncertain future, with all but one of them dead, and their gold
            mines depleted.
          </p>
        </section>
      </section>
      <Link
        href="/houses"
        className="group relative mt-28 flex h-96 w-screen items-center justify-center bg-black 2xl:mt-44"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-15 duration-500 group-hover:opacity-8"
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
