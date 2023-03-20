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
      className="mb-4 w-5/6 rounded-md bg-black py-1.5 px-4 text-lg focus:outline-none focus:outline-2 focus:outline-orange-600 xs:w-4/6 sm:mb-0 sm:w-2/6 md:focus:outline-3 lg:py-2 lg:px-5 lg:text-xl xl:py-3 xl:px-6 xl:text-2xl 2xl:py-4 2xl:px-7 2xl:text-3xl"
    />
  );
}
