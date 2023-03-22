import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

interface QuotesProps {
  fullName: string;
}

async function getQuotes(fullName: string) {
  const slug = fullName.split(' ')[0].toLowerCase();
  const data = await fetch(
    `https://api.gameofthronesquotes.xyz/v1/character/${slug}`,
  ).then((res) => res.json());

  const quotes: string[] | null = data[0] ? [...data[0].quotes] : null;
  return quotes;
}

export default async function Quotes({ fullName }: QuotesProps) {
  const quotes: string[] | null = await getQuotes(fullName);

  if (quotes === null) {
    return null;
  }

  return (
    <section className="mx-auto mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28">
      <h3 className="mb-2 text-center text-[2.6rem] xs:text-5xl sm:mb-3 md:mb-2 lg:mb-3 lg:text-6xl xl:mb-4 xl:text-7xl 2xl:mb-5 2xl:text-8xl">
        Quotes
      </h3>
      <div className="grid xs:px-10 md:grid-cols-2 md:gap-x-20 md:px-0 lg:gap-x-24 xl:gap-x-28">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className="quotes-grid my-8 grid sm:my-10 md:my-12 lg:my-14"
          >
            <RiDoubleQuotesL className="block w-auto self-start justify-self-end text-xl xs:w-14 sm:text-2xl md:w-20 lg:text-4xl xl:text-5xl 2xl:text-6xl" />
            <span className="block px-1.5 text-lg xs:px-0 sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {quote}
            </span>
            <RiDoubleQuotesR className="block w-auto self-end text-xl xs:w-14 sm:text-2xl md:w-20 lg:text-4xl xl:text-5xl 2xl:text-6xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
