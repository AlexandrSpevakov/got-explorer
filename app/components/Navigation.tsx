import Logo from './Logo';
import Menu from './Menu';

export default function Navigation() {
  return (
    <nav className="my-3 mx-auto flex w-11/12 items-center justify-between">
      <Logo />
      <Menu />
    </nav>
  );
}
