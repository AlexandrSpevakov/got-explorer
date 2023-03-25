import { Metadata } from 'next';

import { dragonsNames } from './data/dragonsNames';
import { IDragon } from '@/app/types/IDragon';
import TopSection from './components/TopSection';
// import Card from './components/Card';
import Description from './components/Description';

interface DragonParams {
  params: {
    name: string;
  };
}

// export async function generateStaticParams() {
//   const data = await fetch(
//     'https://641ef7ddf228f1a83eadac82.mockapi.io/dragons',
//   );
//   const dragons: IDragon[] = await data.json();

//   return dragons.map((dragon: IDragon) => ({
//     name: dragon.name,
//   }));
// }

// async function getDragon(id: number) {
//   const data = await fetch(
//     `https://641ef7ddf228f1a83eadac82.mockapi.io/dragons/${id}`,
//   );
//   const dragon: IDragon = await data.json();
//   return dragon;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { name: string };
// }): Promise<Metadata> {
//   const dragon: IDragon = await getDragon(
//     dragonsNames[params.name.split(' ').join('')],
//   );

//   return {
//     title: `GOT | ${dragon.name}`,
//     description: `Description of ${dragon.name} in of Game of Thrones`,
//     keywords: [
//       dragon.name,
//       `Game of Thrones ${dragon.name}`,
//       `Game of Thrones ${dragon.title}`,
//       `Song of Ice and Fire ${dragon.name}`,
//       `Riders of ${dragon.name}`,
//       `${dragon.riders} and ${dragon.name}`,
//     ],
//   };
// }

// export default async function Dragon({ params }: DragonParams) {
//   const dragon: IDragon = await getDragon(
//     dragonsNames[params.name.split(' ').join('')],
//   );

//   return (
//     <main className="m-auto w-11/12">
//       <TopSection dragonName={dragon.name} id={dragon.id} />

//       {dragon.title ? (
//         <div className="flex items-center justify-center gap-x-3 xl:gap-x-4 2xl:gap-x-5">
//           <span className="text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
//             Also known as:
//           </span>
//           <h3 className="text-xl text-orange-600 xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
//             {dragon.title}
//           </h3>
//         </div>
//       ) : null}

//       {dragon.riders ? (
//         <div className="mt-4 flex items-center justify-center gap-x-3 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 xl:gap-x-4 2xl:mt-14 2xl:gap-x-5">
//           <span className="text-base text-orange-600 xs:text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
//             Riders:
//           </span>
//           <div>
//             {dragon.riders.map((rider, i) => (
//               <span
//                 className="text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
//                 key={i}
//               >
//                 {rider},&nbsp;&nbsp;
//               </span>
//             ))}
//           </div>
//         </div>
//       ) : null}

//       <Description description={dragon.description} />
//     </main>
//   );
// }

export default async function Dragon({ params }: DragonParams) {
  return null;
}
