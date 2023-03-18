import Link from 'next/link';

interface DescriptionProps {
  description: string[];
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="mx-auto mt-20 w-10/12">
      <h3 className="mb-16 text-center text-7xl">Description</h3>
      {description.map((par, i) => (
        <p
          key={i}
          className={
            i !== 0
              ? 'mb-12 text-2xl'
              : 'mb-12 text-2xl first-letter:font-cardo first-letter:text-7xl first-letter:leading-3'
          }
        >
          {par}
        </p>
      ))}
      <Link
        href="/houses"
        className="mx-auto mt-44 mb-24 block w-fit rounded-md bg-zinc-700 py-4 px-8 text-4xl duration-300 hover:bg-orange-600"
      >
        Back to Houses
      </Link>
    </section>
  );
}
