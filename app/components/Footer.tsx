import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="w-screen bg-black shadow-xl">
      <ul className="mx-auto flex w-11/12 flex-col justify-around gap-y-5 py-7 text-base sm:flex-row sm:py-12 md:py-20 md:text-xl 2xl:py-24 2xl:text-2xl">
        <li>
          <a
            href="mailto:spievakov@gamil.com"
            className="block text-center duration-300 hover:text-orange-600"
          >
            spievakov@gmail.com
          </a>
        </li>
        <li>
          <a
            href="tel:+16474739502"
            className="block text-center duration-300 hover:text-orange-600"
          >
            +1 (647) 473-9502
          </a>
        </li>
        <li className="mx-auto flex gap-x-8 text-xl sm:text-2xl md:text-3xl lg:gap-x-[3.35rem] 2xl:text-4xl">
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
