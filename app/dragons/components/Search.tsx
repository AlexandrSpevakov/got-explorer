interface SearchProps {
  searchValue: string;
  setSearchValue: (str: string) => void;
}

export default function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <section className="mx-auto mt-14 flex w-5/6 sm:mt-16 sm:w-4/6 md:mt-56 md:w-3/6 lg:mt-64 xl:mt-72 2xl:mt-80">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="w-full rounded-md bg-black py-1.5 px-4 text-lg focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-orange-600 lg:py-2 lg:px-5 lg:text-xl xl:py-3 xl:px-6 xl:text-2xl 2xl:py-4 2xl:px-7 2xl:text-3xl"
      />
    </section>
  );
}
