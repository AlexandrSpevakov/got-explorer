import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/home/logo.webp';

export default function Logo() {
  return (
    <Link href="/" className="flex w-fit items-center">
      <Image src={logo} alt="Logo" className="mr-3 w-12 lg:w-14 2xl:w-16" />
      <h1 className="font-cardo text-2xl lg:text-3xl 2xl:text-4xl">
        Game of Thrones Explorer
      </h1>
    </Link>
  );
}
