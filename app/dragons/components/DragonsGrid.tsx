import { IDragon } from '@/app/types/IDragon';
import DragonCard from './DragonCard';

interface DragonsGridProps {
  dragons: IDragon[];
  nameValue: string;
  titleValue: string;
  searchValue: string;
}

export default function DragonsGrid({
  dragons,
  nameValue,
  titleValue,
  searchValue,
}: DragonsGridProps) {
  const filteredDragons: IDragon[] = dragons.filter((dragon: IDragon) =>
    searchValue === 'name'
      ? dragon.name.toLowerCase().includes(nameValue.trim().toLowerCase())
      : dragon.name.toLowerCase().includes(nameValue.trim().toLowerCase()),
  );

  return (
    <section
      className={
        (nameValue.length >= 1 || titleValue.length >= 1) &&
        filteredDragons.length < 1
          ? 'mx-auto mt-16 2xl:mt-24'
          : 'characters-grid mx-auto mt-10 grid justify-center gap-y-6 sm:mt-10 sm:gap-8 sm:px-0 md:gap-10 lg:mt-12 lg:gap-x-6 lg:gap-y-12 xl:mt-16 xl:gap-x-8 xl:gap-y-14 2xl:mt-24 2xl:gap-y-16 2xl:gap-x-10'
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
