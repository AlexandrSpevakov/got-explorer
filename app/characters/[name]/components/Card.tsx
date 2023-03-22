interface CardProps {
  title: string;
  family: string;
}

export default function Card({ title, family }: CardProps) {
  const titleSplited = title.split(',')[0];

  return (
    <section className="mx-auto grid w-full grid-cols-card items-center justify-items-center gap-y-4 rounded-md bg-black/40 py-4 px-6 text-center text-base xs:gap-y-6 xs:py-6 xs:px-8 xs:text-xl sm:w-8.5/10 sm:text-xl md:w-4/6 md:px-10 lg:gap-y-8 lg:py-8 lg:px-12 lg:text-2xl xl:gap-y-10 xl:py-10 xl:px-14 xl:text-3xl 2xl:text-4xl">
      <div className="flex w-full border-b-[3px] border-stone-600 pb-1 text-zinc-400 xs:border-b-4 sm:pb-2 lg:pb-4">
        <span className="">Title</span>
      </div>
      <span className="w-full border-b-[3px] border-stone-600 pb-1 xs:border-b-4 sm:pb-2 lg:pb-4">
        {titleSplited}
      </span>

      <div className="flex w-full border-b-[3px] border-stone-600 pb-1 text-zinc-400 xs:border-b-4 sm:pb-2 lg:pb-4">
        <span className="">Family</span>
      </div>
      <div className="w-full border-b-[3px] border-stone-600 pb-1 xs:border-b-4 sm:pb-2 lg:pb-4">
        {family}
      </div>
    </section>
  );
}
