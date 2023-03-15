import heroBg from '../../public/houses/hero-bg.webp';
import MainContent from './components/MainContent';

async function getHouses() {
  const houses = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/houses',
  );
  return houses.json();
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
        <h2 className="pt-40 text-center font-cardo text-9xl">Houses</h2>
        <MainContent houses={houses} />
      </section>
    </main>
  );
}
