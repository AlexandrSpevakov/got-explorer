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
    <section className="mx-auto mt-10 w-11/12 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 lg:w-10/12 xl:mt-24 2xl:mt-28">
      <h3 className="mb-2 text-center text-[2.6rem] xs:text-5xl sm:mb-3 md:mb-2 lg:mb-3 lg:text-6xl xl:mb-4 xl:text-7xl 2xl:mb-5 2xl:text-8xl">
        Quotes
      </h3>
      {quotes.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {/* {description.map((par, i) => (
        <p
          key={i}
          className={
            i !== 0
              ? 'mb-3 text-base md:text-lg lg:mb-4 lg:text-xl xl:mb-6 xl:text-2xl 2xl:mb-8 2xl:text-3xl'
              : 'mb-3 text-base first-letter:font-cardo first-letter:text-2xl first-letter:leading-3 sm:first-letter:text-3xl md:text-lg md:first-letter:text-4xl lg:mb-4 lg:text-xl lg:first-letter:text-5xl xl:mb-6 xl:text-2xl xl:first-letter:text-6xl 2xl:mb-8 2xl:text-3xl 2xl:first-letter:text-7xl'
          }
        >
          {par}
        </p>
      ))} */}
    </section>
  );
}
