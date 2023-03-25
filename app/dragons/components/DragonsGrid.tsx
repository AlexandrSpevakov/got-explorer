import { IDragon } from '@/app/types/IDragon';
import DragonCard from './DragonCard';

interface DragonsGridProps {
  dragons: IDragon[];
  searchValue: string;
}

export default function DragonsGrid({
  dragons,
  searchValue,
}: DragonsGridProps) {
  const filteredDragons: IDragon[] = dragons.filter((dragon: IDragon) =>
    dragon.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
  );

  return (
    <section
      className={
        searchValue.length >= 1 && filteredDragons.length < 1
          ? 'mx-auto mt-16 2xl:mt-24'
          : 'mx-auto mt-10 grid justify-center gap-y-6 sm:mt-12 sm:gap-8 sm:gap-y-12 sm:px-0 md:gap-10 md:gap-y-16 lg:mt-16 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 xl:mt-20 xl:gap-x-8 xl:gap-y-14 2xl:mt-24 2xl:gap-y-16 2xl:gap-x-10'
      }
    >
      {filteredDragons.length >= 1 ? (
        filteredDragons.map((dragon: IDragon) => (
          <DragonCard key={dragon.id} dragon={dragon} />
        ))
      ) : (
        <h3 className="mt-16 mb-8 text-center text-xl sm:my-24 sm:text-2xl md:my-36 md:text-3xl lg:my-48 lg:text-4xl xl:my-60 xl:text-5xl 2xl:my-72 2xl:text-6xl">
          No characters with that name were found...
        </h3>
      )}
    </section>
  );
}
