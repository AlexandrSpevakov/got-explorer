import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="w-screen bg-black shadow-xl">
      <ul className="mx-auto flex w-11/12 justify-around py-20 text-xl 2xl:py-24 2xl:text-2xl">
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
    </footer>
  );
}
