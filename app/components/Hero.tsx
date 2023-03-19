import { TbArrowDownRhombus } from 'react-icons/tb';

import bg from '../../public/home/heroBg.jpg';

export default function Hero() {
  return (
    <section
      className="relative top-0 left-0 w-screen bg-cover bg-center bg-no-repeat after:absolute after:h-full after:w-full after:bg-neutral-900 after:opacity-50 md:h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      id="homeHero"
    >
      <h2 className="absolute top-1/3 right-1/2 z-10 w-11/12 translate-x-1/2 text-center font-cardo text-6xl md:top-1/4 md:w-5/6 md:text-7xl lg:w-4/6 lg:text-7.5xl xl:text-8xl 2xl:w-3/5 2xl:text-8.5xl">
        Explore The World of Ice & Fire
      </h2>

      <a
        href="#houses"
        className="absolute top-8.5/10 right-1/2 z-10 translate-x-1/2 text-center text-7xl duration-300 hover:text-orange-600 2xl:text-7.5xl"
      >
        <TbArrowDownRhombus />
      </a>
    </section>
  );
}
