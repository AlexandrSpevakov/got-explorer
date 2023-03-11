import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.webp';

export default function Logo() {
  return (
    <Link href="/" className="flex w-fit items-center">
      <Image src={logo} alt="Logo" width={60} className="mr-2" />
      <h1 className="font-cardo text-3xl text-white">
        Game of Thrones Explorer
      </h1>
    </Link>
  );
}
