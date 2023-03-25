import Link from 'next/link';

interface DescriptionProps {
  description: string[];
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="mx-auto mt-10 w-11/12 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 lg:w-10/12 xl:mt-24 2xl:mt-28">
      <h3 className="mb-2 text-center text-[2.6rem] xs:text-5xl sm:mb-3 md:mb-2 lg:mb-3 lg:text-6xl xl:mb-4 xl:text-7xl 2xl:mb-5 2xl:text-8xl">
        Description
      </h3>
      {description.map((par, i) => (
        <p
          key={i}
          className="mb-3 text-base md:text-lg lg:mb-4 lg:text-xl xl:mb-6 xl:text-2xl 2xl:mb-8 2xl:text-3xl"
        >
          {par}
        </p>
      ))}
      <Link
        href="/dragons"
        className="mx-auto mb-8 mt-12 block w-fit rounded-md bg-zinc-700 py-1.5 px-4 text-xl outline-none outline-3 duration-300 hover:bg-orange-600 focus:outline-offset-0 focus:outline-orange-600 sm:mt-10 md:mb-10 md:py-3 md:px-6 md:text-2xl lg:mt-16 lg:mb-14 xl:mt-24 xl:mb-16 xl:py-4 xl:px-8 xl:text-3xl 2xl:mt-32 2xl:mb-20 2xl:py-5 2xl:px-10 2xl:text-4xl"
      >
        Back to Dragons
      </Link>
    </section>
  );
}
