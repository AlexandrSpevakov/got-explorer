import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black py-3 px-14 shadow-xl">
      <Logo />
      <Navigation />
    </header>
  );
}
