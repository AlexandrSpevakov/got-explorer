'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <AiOutlineClose
          className="cursor-pointer select-none text-3xl duration-200 hover:text-orange-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <AiOutlineMenu
          className="cursor-pointer select-none text-3xl duration-200 hover:text-orange-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <section className="absolute top-full left-0 h-screen w-screen bg-black pt-5">
          <ul className="flex flex-col gap-y-2 text-xl sm:text-3xl">
            <li
              className={`group cursor-pointer duration-200 ${
                path === '/' ? 'bg-orange-600/10' : 'hover:bg-orange-600/10'
              }`}
            >
              <Link
                href="/"
                className={`block w-full py-6 pl-12 duration-200 ${
                  path === '/'
                    ? 'text-orange-600'
                    : 'group-hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li
              className={`group cursor-pointer duration-200 ${
                path === '/houses'
                  ? 'bg-orange-600/10'
                  : 'hover:bg-orange-600/10'
              }`}
            >
              <Link
                href="/houses"
                className={`block py-6 pl-12 duration-200 ${
                  path === '/houses'
                    ? 'text-orange-600'
                    : 'group-hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Houses
              </Link>
            </li>
            <li
              className={`group cursor-pointer duration-200 ${
                path === '/characters'
                  ? 'bg-orange-600/10'
                  : 'hover:bg-orange-600/10'
              }`}
            >
              <Link
                href="/characters"
                className={`block py-6 pl-12 duration-200 ${
                  path === '/characters'
                    ? 'text-orange-600'
                    : 'group-hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Characters
              </Link>
            </li>
            <li
              className={`group cursor-pointer duration-200 ${
                path === '/dragons'
                  ? 'bg-orange-600/10'
                  : 'hover:bg-orange-600/10'
              }`}
            >
              <Link
                href="/dragons"
                className={`block py-6 pl-12 duration-200 ${
                  path === '/dragons'
                    ? 'text-orange-600'
                    : 'group-hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Dragons
              </Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}
