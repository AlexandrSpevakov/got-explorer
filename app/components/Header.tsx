import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="fixed z-20 flex w-screen bg-black shadow-xl">
      <nav className="my-3 mx-auto flex w-11/12 items-center justify-between 2xl:my-5">
        <Logo />
        <Menu />
      </nav>
    </header>
  );
}
