import { Metadata } from 'next';

import { housesNames } from './data/housesNames';
import { housesBgs } from './data/housesBgs';
import { IHouse } from '@/app/types/IHouse';
import TopSection from './components/TopSection';
import Card from './components/Card';
import Description from './components/Description';

interface HouseParams {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const data = await fetch(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/houses',
  );
  const houses: IHouse[] = await data.json();

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

export async function generateMetadata({
  params,
}: HouseParams): Promise<Metadata> {
  const house: IHouse = await getHouse(housesNames[params.name]);

  return {
    title: `GOT | ${house.name}`,
    description: `Description of the House ${house.name} in of Game of Thrones`,
    keywords: [
      `House ${house.name}`,
      `Noble House ${house.name}`,
      `Game of Thrones houses of ${house.region}`,
      `House with ${house.religion} religion in Game of Thrones`,
      `House wich seats in ${house.seat}`,
      `House with ${house.words} motto`,
      `House with ${house.titles} titles`,
    ],
  };
}

export default async function House({ params }: HouseParams) {
  const house: IHouse = await getHouse(housesNames[params.name]);

  return (
    <main className="m-auto w-11/12">
      <div
        className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat opacity-7"
        style={{
          backgroundImage: `url(${housesBgs[+house.id - 1].src})`,
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
