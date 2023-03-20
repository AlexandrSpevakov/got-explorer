export default function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: (str: string) => void;
}) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search..."
      className="w-2/6 rounded-md bg-black py-1 px-3 text-base focus:outline-none focus:outline-3 focus:outline-orange-600 sm:text-3xl md:px-4 md:py-1.5 md:text-lg lg:py-2 lg:px-5 lg:text-xl xl:py-3 xl:px-6 xl:text-2xl 2xl:py-4 2xl:px-7 2xl:text-3xl"
    />
  );
}
