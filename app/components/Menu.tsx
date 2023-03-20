'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const path = usePathname();

  return (
    <ul className="hidden gap-x-5 text-xl md:flex lg:gap-x-8 lg:text-2xl 2xl:gap-x-12 2xl:text-3xl">
      <li className="relative">
        <Link
          href="/"
          className={`outline-none duration-300 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-orange-600 lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1 ${
            path === '/' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Home
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/houses"
          className={`outline-none duration-300 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-orange-600 lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1 ${
            path === '/houses' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Houses
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/characters"
          className={`outline-none duration-300 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-orange-600 lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1 ${
            path === '/characters' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Characters
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/dragons"
          className={`outline-none duration-300 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-orange-600 lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1 ${
            path === '/dragons' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Dragons
        </Link>
      </li>
    </ul>
  );
}
