import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed z-10 flex w-screen items-center justify-between bg-black py-3 px-14 shadow-xl">
      <Logo />
      <Navigation />
    </header>
  );
}
