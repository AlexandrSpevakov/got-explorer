import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="w-screen bg-black shadow-xl">
      <ul className="mx-auto flex w-11/12 justify-around py-20 text-xl">
        <li>
          <a
            href="mailto:spievakov@gamil.com"
            className="duration-300 hover:text-orange-600"
          >
            <span>spievakov@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+16474739502"
            className="duration-300 hover:text-orange-600"
          >
            <span>+1 (647) 473-9502 </span>
          </a>
        </li>
        <li className="flex gap-x-[3.35rem] text-3xl">
          <a
            href="https://github.com/AlexandrSpevakov/got-explorer"
            target="_blank"
            rel="noreferrer"
            className="duration-300 hover:text-orange-600"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oleksandr-spievakov/"
            target="_blank"
            rel="noreferrer"
            className="duration-300 hover:text-orange-600"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_spevakov_/"
            target="_blank"
            rel="noreferrer"
            className="duration-300 hover:text-orange-600"
          >
            <BsInstagram />
          </a>
        </li>
      </ul>
      <span className="block pb-5 text-center">2023 Spievakov &#169;</span>
    </footer>
  );
}
