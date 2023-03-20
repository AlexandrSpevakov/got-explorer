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
    <section className="mx-auto mt-8 grid w-full grid-cols-card items-center justify-items-center gap-y-6 rounded-md bg-black/40 py-6 px-8 text-center text-xl sm:w-8.5/10 sm:text-xl md:w-4/6 md:px-10 lg:mt-10 lg:gap-y-8 lg:py-8 lg:px-12 lg:text-2xl xl:mt-12 xl:gap-y-10 xl:py-10 xl:px-14 xl:text-3xl 2xl:mt-14 2xl:text-4xl">
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-2 lg:pb-4">
        <span className="">Seat</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-2 lg:pb-4">
        {seat}
      </span>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-2 lg:pb-4">
        <span className="">Region</span>
      </div>
      <div className="w-full border-b-4 border-stone-600 pb-1 sm:pb-2 lg:pb-4">
        {region}
      </div>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-2 lg:pb-4">
        <span className="">Words</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-2 lg:pb-4">
        &quot;{words}&quot;
      </span>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-2 lg:pb-4">
        <span className="">Religion</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-2 lg:pb-4">
        {religion}
      </span>
      <div className="flex h-full w-full text-zinc-400">
        <span className="self-center">
          {titles.length > 2 ? 'Titles' : 'Title'}
        </span>
      </div>
      <div className="flex w-full flex-col text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {titles.map((title, i) => (
          <span key={i}>{title}</span>
        ))}
      </div>
    </section>
  );
}
