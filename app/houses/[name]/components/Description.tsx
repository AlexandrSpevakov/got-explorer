import Link from 'next/link';

interface DescriptionProps {
  description: string[];
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="mx-auto mt-4 w-10/12 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-28">
      <h3 className="mb-1 text-center text-3xl sm:mb-1.5 sm:text-4xl md:mb-2 md:text-5xl lg:mb-4 lg:text-6xl xl:mb-6 xl:text-7xl 2xl:mb-8 2xl:text-8xl">
        Description
      </h3>
      {description.map((par, i) => (
        <p
          key={i}
          className={
            i !== 0
              ? 'mb-1 text-sm sm:mb-1.5 sm:text-base md:mb-2 md:text-lg lg:mb-4 lg:text-xl xl:mb-6 xl:text-2xl 2xl:mb-8 2xl:text-3xl'
              : 'mb-1 text-sm first-letter:font-cardo first-letter:text-3xl first-letter:leading-3 sm:mb-1.5 sm:text-base sm:first-letter:text-4xl md:mb-2 md:text-lg md:first-letter:text-5xl lg:mb-4 lg:text-xl lg:first-letter:text-6xl xl:mb-6 xl:text-2xl xl:first-letter:text-6xl 2xl:mb-8 2xl:text-3xl 2xl:first-letter:text-7xl'
          }
        >
          {par}
        </p>
      ))}
      <Link
        href="/houses"
        className="mx-auto mt-8 mb-6 block w-fit rounded-md bg-zinc-700 py-1 px-2 text-base duration-300 hover:bg-orange-600 sm:mt-10 sm:mb-8 sm:py-1.5 sm:px-3 sm:text-lg md:mt-12 md:mb-10 md:py-2 md:px-4 md:text-xl lg:mt-16 lg:mb-14 lg:py-3 lg:px-6 lg:text-2xl xl:mt-24 xl:mb-16 xl:py-4 xl:px-8 xl:text-3xl 2xl:mt-32 2xl:mb-20 2xl:py-5 2xl:px-10 2xl:text-4xl"
      >
        Back to Houses
      </Link>
    </section>
  );
}
