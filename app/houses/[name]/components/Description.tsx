import Link from 'next/link';

interface DescriptionProps {
  description: string[];
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="mx-auto mt-12 w-11/12 sm:mt-14 md:mt-16 lg:mt-20 lg:w-10/12 xl:mt-24 2xl:mt-28">
      <h3 className="mb-1 text-center text-4xl sm:text-5xl md:mb-1.5 lg:mb-4 lg:text-6xl xl:mb-6 xl:text-7xl 2xl:mb-8 2xl:text-8xl">
        Description
      </h3>
      {description.map((par, i) => (
        <p
          key={i}
          className={
            i !== 0
              ? 'mb-3 text-base md:text-lg lg:mb-4 lg:text-xl xl:mb-6 xl:text-2xl 2xl:mb-8 2xl:text-3xl'
              : 'mb-3 text-base first-letter:font-cardo first-letter:text-3xl first-letter:leading-3 sm:first-letter:text-4xl md:text-lg md:first-letter:text-5xl lg:mb-4 lg:text-xl lg:first-letter:text-6xl xl:mb-6 xl:text-2xl xl:first-letter:text-6xl 2xl:mb-8 2xl:text-3xl 2xl:first-letter:text-7xl'
          }
        >
          {par}
        </p>
      ))}
      <Link
        href="/houses"
        className="mx-auto mt-8 mb-6 block w-fit rounded-md bg-zinc-700 py-1 px-2 text-base duration-300 hover:bg-orange-600 sm:mt-10 sm:mb-8 sm:py-1.5 sm:px-4 sm:text-xl md:mt-12 md:mb-10 md:py-3 md:px-6 md:text-2xl lg:mt-16 lg:mb-14 xl:mt-24 xl:mb-16 xl:py-4 xl:px-8 xl:text-3xl 2xl:mt-32 2xl:mb-20 2xl:py-5 2xl:px-10 2xl:text-4xl"
      >
        Back to Houses
      </Link>
    </section>
  );
}
