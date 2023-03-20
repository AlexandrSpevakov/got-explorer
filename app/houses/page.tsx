import heroBg from '../../public/houses/heroBg.webp';
import MainContent from './components/MainContent';

export const metadata = {
  title: 'GOT | Houses',
  description: 'Information about noble houses in the world of Game of Thrones',
  keywords: [
    'Noble houses of Westeros descriptions',
    'Noble houses of Westeros information',
    'Noble houses of Westeros',
    'Noble houses in Game of Thrones',
    'Noble houses of Game of Thrones descriptions',
  ],
};

async function getHouses() {
  const data = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/houses',
  );
  const houses = await data.json();
  return houses;
}

export default async function Houses() {
  const houses = await getHouses();

  return (
    <main>
      <section className="m-auto mb-32 w-11/12">
        <div
          className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}
        />
        <h2 className="pt-28 text-center font-cardo text-5xl sm:text-6xl md:pt-32 md:text-7xl lg:pt-40 lg:text-8xl xl:text-9xl 2xl:pt-52">
          Houses
        </h2>
        <MainContent houses={houses} />
      </section>
    </main>
  );
}
