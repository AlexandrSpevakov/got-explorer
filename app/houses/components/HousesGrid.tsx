import { IHouse } from '@/app/types/IHouse';
import HousesCard from './HouseCard';

interface HouseGridProps {
  houses: IHouse[];
  searchValue: string;
  filterValue: string;
}

export default function HousesGrid({
  houses,
  searchValue,
  filterValue,
}: HouseGridProps) {
  const filteredHousesBySearch = houses.filter((house: IHouse) =>
    `house ${house.name.toLowerCase()}`.includes(
      searchValue.trim().toLowerCase(),
    ),
  );

  const filteredHouses = filteredHousesBySearch.filter((house: IHouse) =>
    filterValue === 'All' ? true : filterValue === house.region,
  );

  return (
    <section
      className={
        searchValue.length >= 1 && filteredHouses.length < 1
          ? 'mx-auto mt-16 2xl:mt-24'
          : 'mx-auto mt-8 grid grid-cols-4 gap-y-12 gap-x-8 md:mt-10 lg:mt-12 lg:gap-x-5 xl:mt-16 xl:gap-x-8 2xl:mt-24 2xl:gap-y-20 2xl:gap-x-16'
      }
    >
      {filteredHouses.length >= 1 ? (
        filteredHouses.map((house: IHouse) => (
          <HousesCard key={house.id} house={house} />
        ))
      ) : (
        <h3 className="my-60 text-center text-5xl 2xl:my-72 2xl:text-6xl">
          No houses with that name were found...
        </h3>
      )}
    </section>
  );
}
