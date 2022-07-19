import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function FAQ() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <section
      className="pt-20 pb-10 bg-gradient-to-r from-red-500 via-red-500 to-red-700 sm:py-16 md:py-20 lg:py-24 mt-14"
      style={{ clipPath: "polygon(100% 1%, 100% 101%, 0 100%, 0 0)" }}
    >
      <div className="max-w-6xl px-8 mx-auto lg:px-16">
        <h2 className="mb-2 text-4xl font-black text-gray-800 xl:text-5xl">
          Preguntas frecuentes
        </h2>
        <div className="relative flex flex-col mt-16 lg:flex-row" id="faq">
          <div className="relative w-full space-y-3 lg:space-y-5 lg:w-1/2 lg:pr-4">
            <div className="relative px-6 py-2 overflow-hidden text-black border-2 border-gray-800 rounded-lg select-none">
              <button
                onClick={() => setBox1(!box1)}
                className="flex items-center justify-between w-full text-gray-800 transition-colors cursor-pointer hover:text-black gap-x-2"
              >
                <h4 className="py-4 pr-2 text-base font-extrabold text-left gap-x-2 sm:text-lg">
                  ¿Es gratis la información propocionada?
                </h4>
                <ChevronDownIcon
                  className={`flex-shrink-0 w-4 h-4 transition-all duration-200 ease-out transform ${
                    box1 ? "rotate-0" : "rotate-90"
                  }`}
                />
              </button>
              <p
                className={`px-1 pt-0 mt-1 text-black sm:text-lg py-7 ${
                  box1 ? "" : "hidden"
                }`}
              >
                Si, la información que hemos creado es para uso de estudiantes
                de informatica del Politecnico Urbano Gilbert.
              </p>
            </div>

            <div className="relative px-6 py-2 overflow-hidden text-black border-2 border-gray-800 rounded-lg select-none">
              <button
                onClick={() => setBox2(!box2)}
                className="flex items-center justify-between w-full text-gray-800 transition-colors cursor-pointer hover:text-black gap-x-2"
              >
                <h4 className="py-4 pr-2 text-base font-extrabold text-left gap-x-2 sm:text-lg">
                  ¿Con qué objetivo está hecho este proyecto?
                </h4>
                <ChevronDownIcon
                  className={`flex-shrink-0 w-4 h-4 transition-all duration-200 ease-out transform ${
                    box2 ? "rotate-0" : "rotate-90"
                  }`}
                />
              </button>
              <p
                className={`px-1 pt-0 mt-1 text-black sm:text-lg py-7 ${
                  box2 ? "" : "hidden"
                }`}
              >
                El objetivo es facilitar la manera en que aprenden los
                estudiante de iformatica, ampliando su conocimiento a algo más
                avanzado.
              </p>
            </div>
          </div>
          <div className="relative w-full mt-3 space-y-3 lg:mt-0 lg:space-y-5 lg:w-1/2 lg:pl-4">
            <div className="relative px-6 py-2 overflow-hidden text-black border-2 border-gray-800 rounded-lg select-none">
              <button
                onClick={() => setBox3(!box3)}
                className="flex items-center justify-between w-full text-gray-800 transition-colors cursor-pointer hover:text-black gap-x-2"
              >
                <h4 className="py-4 pr-2 text-base font-extrabold text-left gap-x-2 sm:text-lg">
                  ¿Qué se tiene en cuenta para agregar un guía de aprendizaje?
                </h4>
                <ChevronDownIcon
                  className={`flex-shrink-0 w-4 h-4 transition-all duration-200 ease-out transform ${
                    box3 ? "rotate-0" : "rotate-90"
                  }`}
                />
              </button>
              <p
                className={`px-1 pt-0 mt-1 text-black sm:text-lg py-7 ${
                  box3 ? "" : "hidden"
                }`}
              >
                Primeramente comprabar que el colaborador sepa de lo que habla y
                que tenga buena redacción para brindar un explicación de
                calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
