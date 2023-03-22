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
      <div className="grid grid-cols-2 gap-x-44">
        {quotes.map((quote, i) => (
          <div key={i} className="quotes-grid my-14 grid">
            <RiDoubleQuotesL className="block w-20 self-start justify-self-end text-5xl" />
            <span className="block text-[2.6rem] xs:text-5xl lg:text-6xl xl:text-4xl 2xl:text-6xl">
              {quote}
            </span>
            <RiDoubleQuotesR className="block w-20 self-end text-5xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
