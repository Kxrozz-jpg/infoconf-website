import Algolia from "../assets/Algolia";
import Git from "../assets/Git";
import Github from "../assets/Github";
import Rapidapi from "../assets/Rapidapi";
import Apps from "./Apps";

export default function Importants() {
  const svgElements = [
    { id: 1, name: Algolia },
    { id: 2, name: Git },
    { id: 3, name: Github },
    { id: 4, name: Rapidapi },
  ];

  return (
    <section>
      <div className="flex-col flex items-start px-10 mx-auto lg:space-y-20 lg:flex-row max-w-7xl">
        <div className="flex flex-col justify-center flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800 lg:pr-4 lg:max-w-none lg:w-5/12 xl:w-6/12">
          <span
            id="importantes"
            className="block tracking-widest text-gray-400 uppercase pt-28"
          >
            #importantes
          </span>
          <h2 className="text-4xl font-black xl:text-5xl">
            Aplicaciones{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-yellow-300 to-amber-500">
              útiles
            </span>{" "}
            para un mejor espacio de trabajo
          </h2>
          <p className="text-xl text-gray-500">
            Con estás aplicaciones podrás ser más productivo. También hará que
            tus proyectos sean más organizados, escalables y faciles de trabajar
            en confunto.
          </p>
          <div className="relative flex flex-col items-start w-full space-y-5 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="relative inline-block">
              <div className="w-full h-full bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"></div>
              <a href="/app" className="Button">
                ¡Ver el artículo!
              </a>
            </div>
          </div>
        </div>
        <Apps>
          {svgElements.map((value) => (
            <a
              href=""
              key={value.id}
              className="flex items-center justify-center hover:text-gray-600"
            >
              <value.name className="w-auto h-10 transition-colors fill-current" />
            </a>
          ))}
        </Apps>
      </div>
    </section>
  );
}
