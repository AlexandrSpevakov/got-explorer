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
      className="w-2/6 rounded-md bg-black py-3 px-6 text-2xl focus:outline-none focus:outline-3 focus:outline-orange-600"
    />
  );
}
