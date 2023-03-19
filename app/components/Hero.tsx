import { TbArrowDownRhombus } from 'react-icons/tb';

import bg from '../../public/home/heroBg.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      <h2 className="absolute top-1/4 right-1/2 w-5/6 translate-x-1/2 text-center font-cardo text-7xl lg:w-4/6 lg:text-7.5xl xl:text-8xl 2xl:text-8.5xl">
        Explore The World of Ice & Fire
      </h2>

      <a
        href="#houses"
        className="absolute top-8.5/10 right-1/2 translate-x-1/2 text-center text-7xl duration-300 hover:text-orange-600 2xl:text-7.5xl"
      >
        <TbArrowDownRhombus />
      </a>
    </section>
  );
}
