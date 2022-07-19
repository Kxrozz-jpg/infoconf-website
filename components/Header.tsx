import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center p-6 text-center lg:justify-center">
      <input type="checkbox" id="menu" hidden className="peer " />
      <label
        htmlFor="menu"
        className="relative z-50 lg:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block"
      >
        <MenuAlt1Icon className="w-6 h-6 first" />
        <XIcon className="hidden w-6 h-6 last" />
      </label>
      <nav className="absolute top-0 left-0 right-0 z-40 hidden min-h-screen py-24 bg-white peer-checked:block lg:block lg:static lg:bg-inherit lg:py-0 lg:min-h-0 bg-opacity-40 backdrop-blur-lg lg:backdrop-blur-0">
        <ul className="flex flex-col items-center lg:items-start lg:flex-row font-semibold tracking-tight gap-x-8 text-slate-800 [&>li>a]:border-b-2 [&>li>a]:border-b-transparent [&>li>a]:transition-all gap-y-4">
          <li className="flex-1">
            <a href="/" className="hover:border-b-black hover:text-black">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/#importantes"
              className="hover:border-b-black hover:text-black"
            >
              Importantes
            </a>
          </li>
          <li className="relative flex lg:flex-col">
            <a
              href="/#aprendizaje"
              className="relative hover:border-b-black hover:text-black"
            >
              Aprendizaje
            </a>
            <div className="pl-2">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                ¡Envía tu solicitud!
              </span>
            </div>
          </li>
          <li>
            <a
              href="/#colaborators"
              className="hover:border-b-black hover:text-black"
            >
              Colaboradores
            </a>
          </li>
          <li>
            <a href="/#faq" className="hover:border-b-black hover:text-black">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
