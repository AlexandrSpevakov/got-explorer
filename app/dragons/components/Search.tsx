interface SearchProps {
  nameValue: string;
  setNameValue: (str: string) => void;
  titleValue: string;
  setTitleValue: (str: string) => void;
  searchValue: string;
  setSearchValue: (str: string) => void;
}

export default function Search({
  titleValue,
  nameValue,
  searchValue,
  setNameValue,
  setTitleValue,
  setSearchValue,
}: SearchProps) {
  const handleInputChange = (val: string) => {
    if (searchValue === 'name') {
      setNameValue(val);
    } else if (searchValue === 'title') {
      setTitleValue(val);
    }
  };

  return (
    <section className="mx-auto mt-14 flex w-5/6 sm:mt-16 sm:w-4/6 md:mt-20 md:w-3/6 lg:mt-28 xl:mt-36 2xl:mt-48">
      <input
        type="text"
        value={searchValue === 'name' ? nameValue : titleValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={
          searchValue === 'name' ? 'Search by name...' : 'Search by title...'
        }
        className="w-full rounded-l-md bg-black py-1.5 px-4 text-lg focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white lg:py-2 lg:px-5 lg:text-xl xl:py-3 xl:px-6 xl:text-2xl 2xl:py-4 2xl:px-7 2xl:text-3xl"
      />

      <button
        className={
          searchValue === 'name'
            ? ' bg-orange-600 px-1.5 text-base focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:px-2 md:text-base lg:px-3 lg:text-lg xl:text-xl 2xl:text-2xl'
            : ' bg-zinc-700 px-1.5 text-base focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:px-2 md:text-base lg:px-3 lg:text-lg xl:text-xl 2xl:text-2xl'
        }
        onClick={() => setSearchValue('name')}
        type="button"
      >
        name
      </button>

      <button
        className={
          searchValue === 'title'
            ? ' rounded-r-md bg-orange-600 px-2 text-base focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:px-3 md:text-base lg:px-4 lg:text-lg xl:text-xl 2xl:text-2xl'
            : ' rounded-r-md bg-zinc-700 px-2 text-base focus-visible:outline-none focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:px-3 md:text-base lg:px-4 lg:text-lg xl:text-xl 2xl:text-2xl'
        }
        onClick={() => setSearchValue('title')}
        type="button"
      >
        title
      </button>
    </section>
  );
}
