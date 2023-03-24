import heroBg from '../../public/dragons/heroBg.webp';
import MainContent from './components/MainContent';
import { IDragon } from '../types/IDragon';

export const metadata = {
  title: 'GOT | Dragons',
  description: 'Information about dragons in the world of Game of Thrones',
  keywords: [
    'Dragons in Game of Thrones',
    'Dragons of Game of Thrones descriptions',
    'Dragons of the world of ice and fire',
    'Dragons of Westeros',
  ],
};

async function getDragons() {
  const data = await fetch(
    'https://641bfd411f5d999a446e679b.mockapi.io/dragons',
  );
  const dragons: IDragon[] = await data.json();
  return dragons;
}

export default async function Dragons() {
  const dragons: IDragon[] = await getDragons();

  return (
    <main>
      <section className="m-auto mb-32 w-11/12">
        <div
          className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}
        />
        <h2 className="pt-32 text-center font-cardo text-5xl sm:text-6xl md:text-7xl lg:pt-40 lg:text-8xl xl:text-9xl 2xl:pt-52">
          Dragons
        </h2>
        <MainContent dragons={dragons} />
      </section>
    </main>
  );
}
