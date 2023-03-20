import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/home/logo.webp';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex w-fit items-center rounded outline-none focus:outline-offset-4 focus:outline-orange-600"
    >
      <Image
        src={logo}
        alt="Logo"
        className="mr-3 w-10 sm:w-14 md:w-12 lg:w-14 2xl:w-16"
      />
      <h1 className="w-fit font-cardo text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        Game of Thrones Explorer
      </h1>
    </Link>
  );
}
