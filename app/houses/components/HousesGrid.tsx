import { House } from '@/app/types/House';
import HousesCard from './HouseCard';

interface HouseGridProps {
  houses: House[];
  searchValue: string;
  filterValue: string;
}

export default function HousesGrid({
  houses,
  searchValue,
  filterValue,
}: HouseGridProps) {
  const filteredHousesBySearch = houses.filter((house: House) =>
    `house ${house.name.toLowerCase()}`.includes(
      searchValue.trim().toLowerCase(),
    ),
  );

  const filteredHouses = filteredHousesBySearch.filter((house: House) =>
    filterValue === 'All' ? true : filterValue === house.region,
  );

  return (
    <section
      className={
        searchValue.length >= 1 && filteredHouses.length < 1
          ? 'mx-auto mt-16'
          : 'mx-auto mt-16 grid grid-cols-4 gap-y-12 gap-x-10'
      }
    >
      {filteredHouses.length >= 1 ? (
        filteredHouses.map((house: House, index) => (
          <HousesCard key={house.id} house={house} index={index} />
        ))
      ) : (
        <h3 className="my-60 text-center text-5xl">
          No houses with that name were found...
        </h3>
      )}
    </section>
  );
}
