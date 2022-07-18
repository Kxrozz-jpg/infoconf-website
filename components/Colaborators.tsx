import Collage from "./Collage";

export default function Colaborators() {
  const Colab = [
    {
      id: 1,
      name: "Stalin Rafael",
      role: "Desarrollador",
      img: "/hombre.png",
    },
    {
      id: 2,
      name: "Oliver",
      role: "Desarrollador",
      img: "/anteojos.png",
    },
    {
      id: 3,
      name: "Elian Emil",
      role: "Desarrollador",
      img: "/chico.png",
    },
  ];
  return (
    <section className="w-full px-10 mx-auto bg-white lg:py-24 max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className="mb-20 space-y-5 sm:mx-auto sm:space-y-4">
          <span
            id="colaborators"
            className="block tracking-widest text-gray-400 uppercase pt-28"
          >
            #colaboradores
          </span>
          <h2 className="text-4xl font-black text-gray-800 xl:text-5xl">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-yellow-300 to-amber-500">
              Colaboradores
            </span>{" "}
            en este proyecto
          </h2>
          <p className="text-xl text-gray-500">
            ¡Queremos que nuestro proyecto se mantega y buscamos personas que
            quiera compartir sus aprendizajes!{" "}
            <a
              href=""
              target="_blank"
              rel="noopener"
              className="font-medium text-red-500 underline"
            >
              Envía tu propuesta
            </a>
            .
          </p>
        </div>
        <div className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
          {Colab.map((colab) => (
            <Collage key={colab.id} name={colab.name} role={colab.role} img={colab.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
