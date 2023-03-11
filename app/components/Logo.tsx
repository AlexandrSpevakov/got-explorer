import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.webp';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logo} alt="Logo" width={60} className="mr-2" />
      <h1 className="w-2/6 font-cardo text-2xl text-white">
        Game of Thrones Explorer
      </h1>
    </Link>
  );
}
