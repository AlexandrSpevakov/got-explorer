import bg1 from '../../public/hero-bg1.jpg';

export default function Hero() {
  return (
    <>
      <section
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bg1.src})`,
        }}
      />
      <h2 className="absolute top-1/4 right-1/2 z-10 translate-x-1/2 text-center font-cardo text-7xl">
        Explore The World of Ice & Fire
      </h2>
    </>
  );
}
