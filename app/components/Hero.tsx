import bg1 from '../../public/hero-bg1.jpg';

export default function Hero() {
  return (
    <section
      className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center bg-no-repeat opacity-50"
      style={{ backgroundImage: `url(${bg1.src})` }}
    >
      <h2>fdwf</h2>
    </section>
  );
}
