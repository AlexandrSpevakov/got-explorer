'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-8 text-2xl text-white">
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
              path === '/characters'
                ? 'text-orange-600'
                : 'hover:text-orange-600'
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
    </nav>
  );
}
