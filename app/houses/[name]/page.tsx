import { housesNames } from '@/app/data/houses';
import { bgs } from '../data/bgs/bgs';
import { House as IHouse } from '@/app/types/House';
import TopSection from './components/TopSection';
import Card from './components/Card';
import Description from './components/Description';

export async function generateStaticParams() {
  const data = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/houses',
  );
  const houses = await data.json();

  return houses.map((house: IHouse) => ({
    name: house.name,
  }));
}

async function getHouse(id: number) {
  const data = await fetch(
    `https://6344adb1dcae733e8fe3067a.mockapi.io/houses/${id}`,
  );
  const house = await data.json();
  return house;
}

export default async function House({ params }: { params: { name: string } }) {
  const house: IHouse = await getHouse(housesNames[params.name]);

  return (
    <main className="m-auto w-11/12">
      <div
        className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-7"
        style={{
          backgroundImage: `url(${bgs[+house.id - 1].src})`,
        }}
      />

      <TopSection houseName={house.name} id={house.id} />

      <Card
        seat={house.seat}
        region={house.region}
        words={house.words}
        religion={house.religion}
        titles={house.titles}
      />

      <Description description={house.description} />
    </main>
  );
}
