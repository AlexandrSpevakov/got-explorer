'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const path = usePathname();

  return (
    <ul className="hidden gap-x-5 text-xl md:flex lg:gap-x-8 lg:text-2xl 2xl:gap-x-12 2xl:text-3xl">
      <li>
        <Link
          href="/"
          className={`duration-300 ${
            path === '/' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/houses"
          className={`duration-300 ${
            path === '/houses' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Houses
        </Link>
      </li>
      <li>
        <Link
          href="/characters"
          className={`duration-300 ${
            path === '/characters' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Characters
        </Link>
      </li>
      <li>
        <Link
          href="/dragons"
          className={`duration-300 ${
            path === '/dragons' ? 'text-orange-600' : 'hover:text-orange-600'
          }`}
        >
          Dragons
        </Link>
      </li>
    </ul>
  );
}
