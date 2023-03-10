import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo.webp';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center bg-black">
      <Image src={logo} alt="Logo" width={85} className="mr-4" />
      <h1 className="font-cardo text-4xl text-white w-2/6">
        Game of Thrones Explorer
      </h1>
    </Link>
  );
}
