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
    <section className="mx-auto mt-4 grid w-4/6 grid-cols-card items-center justify-items-center gap-y-4 rounded-md bg-black/40 py-2 px-6 text-center text-base sm:mt-6 sm:py-4 sm:px-8 sm:text-lg md:mt-8 md:gap-y-6 md:py-6 md:px-10 md:text-xl lg:mt-10 lg:gap-y-8 lg:py-8 lg:px-12 lg:text-2xl xl:mt-12 xl:gap-y-10 xl:py-10 xl:px-14 xl:text-3xl 2xl:mt-14 2xl:text-4xl">
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-1.5 md:pb-2 lg:pb-4">
        <span className="">Seat</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-1.5 md:pb-2 lg:pb-4">
        {seat}
      </span>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-1.5 md:pb-2 lg:pb-4">
        <span className="">Region</span>
      </div>
      <div className="w-full border-b-4 border-stone-600 pb-1 sm:pb-1.5 md:pb-2 lg:pb-4">
        {region}
      </div>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-1.5 md:pb-2 lg:pb-4">
        <span className="">Words</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-1.5 md:pb-2 lg:pb-4">
        &quot;{words}&quot;
      </span>
      <div className="flex w-full border-b-4 border-stone-600 pb-1 text-zinc-400 sm:pb-1.5 md:pb-2 lg:pb-4">
        <span className="">Religion</span>
      </div>
      <span className="w-full border-b-4 border-stone-600 pb-1 sm:pb-1.5 md:pb-2 lg:pb-4">
        {religion}
      </span>
      <div className="flex h-full w-full text-zinc-400">
        <span className="self-center">
          {titles.length > 2 ? 'Titles' : 'Title'}
        </span>
      </div>
      <div className="flex w-full flex-col text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {titles.map((title, i) => (
          <span key={i}>{title}</span>
        ))}
      </div>
    </section>
  );
}
