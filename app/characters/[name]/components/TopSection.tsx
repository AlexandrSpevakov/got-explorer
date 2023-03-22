import Image from 'next/image';

interface TopSectionProps {
  fullName: string;
  imageUrl: string;
}

export default function TopSection({ fullName, imageUrl }: TopSectionProps) {
  return (
    <section id="characters-top" className="h-screen">
      <h2 className="pt-28 text-center font-cardo text-6xl lg:text-7xl xl:pt-28 xl:text-8xl 2xl:pt-36 2xl:text-9xl">
        {fullName}
      </h2>
      <Image
        src={imageUrl}
        alt={fullName}
        className="mx-auto mt-4 h-2/6 w-auto rounded sm:h-1/2 md:mt-6 lg:mt-8 lg:h-3/5 xl:mt-10 2xl:mt-14"
        width={500}
        height={300}
      />
    </section>
  );
}
