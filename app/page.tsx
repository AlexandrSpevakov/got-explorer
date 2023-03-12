import Characters from './components/Characters';
import Dragons from './components/Dragons';
import Hero from './components/Hero';
import Houses from './components/Houses';

export default function Home() {
  return (
    <main>
      <Hero />
      <Houses />
      <Characters />
      <Dragons />
    </main>
  );
}
