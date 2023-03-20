interface CardProps {
  seat: string;
  region: string;
  words: string;
  religion: string;
  titles: string[];
}

export default function Card({
  seat,
  region,
  words,
  religion,
  titles,
}: CardProps) {
  return (
    <section className="mx-auto mt-6 grid w-4/6 grid-cols-card items-center justify-items-center gap-y-10 rounded-md bg-black/40 py-10 px-14 text-center text-base sm:mt-8 sm:text-lg md:mt-10 md:text-xl lg:mt-12 lg:text-2xl xl:mt-14 xl:text-3xl 2xl:mt-16 2xl:text-4xl">
      <div className="flex w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
        <span className="">Seat</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-4">{seat}</span>
      <div className="flex w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
        <span className="">Region</span>
      </div>
      <div className="w-full border-b-4 border-stone-600 pb-4">{region}</div>
      <div className="flex w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
        <span className="">Words</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-4">
        &quot;{words}&quot;
      </span>
      <div className="flex w-full border-b-4 border-stone-600 pb-4 text-zinc-400">
        <span className="">Religion</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-4">
        {religion}
      </span>
      <div className="flex h-full w-full text-zinc-400">
        <span className="self-center">
          {titles.length > 2 ? 'Titles' : 'Title'}
        </span>
      </div>
      <div className="flex w-full flex-col text-3xl">
        {titles.map((title, i) => (
          <span key={i}>{title}</span>
        ))}
      </div>
    </section>
  );
}
