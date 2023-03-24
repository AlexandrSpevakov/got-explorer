import heroBg from '../../public/characters/heroBg.webp';
import MainContent from './components/MainContent';
import { ICharacter } from '../types/ICharacter';

export const metadata = {
  title: 'GOT | Characters',
  description: 'Information about characters in the world of Game of Thrones',
  keywords: [
    'Characters in Game of Thrones',
    'Characters of Game of Thrones descriptions',
    'Characters of the world of ice and fire',
    'Characters of Westeros',
  ],
};

async function getCharacters() {
  const data = await fetch('https://thronesapi.com/api/v2/Characters');
  const characters: ICharacter[] = await data.json();
  return characters;
}

export default async function Characters() {
  const characters: ICharacter[] = await getCharacters();

  return (
    <main>
      <section className="m-auto mb-32 w-11/12">
        <div
          className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}
        />
        <h2 className="pt-32 text-center font-cardo text-5xl sm:text-6xl md:text-7xl lg:pt-40 lg:text-8xl xl:text-9xl 2xl:pt-52">
          Characters
        </h2>
        <MainContent characters={characters} />
      </section>
    </main>
  );
}
