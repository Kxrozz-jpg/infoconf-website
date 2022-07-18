import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout>
      <h1 className="mb-4 text-5xl font-extrabold">
        Aplicaciones útiles para un mejor espacio de trabajo
      </h1>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-600">
        Espacios de desarrollo
      </h2>
      <p className="mb-4 text-gray-700">
        Lo mejor para tener proyectos eficientes es tener recursos para un buen
        espacio de desarrollo, en esto influye en tener las aplicaciones,
        componentes y equipos para mejor la capacidad y escalabilidad del
        proyecto. A la hora de utilizar diferentes programas que permiten
        administrar datos, compilar código o hacer simple lógina en un lenguaje
        de progrmación, tu equipo necesitará ciertas herramientas para poder dar
        el mejor desempeño en estás tareas.
      </p>
      <p className="mb-4 text-gray-700">
        A continuación mostraremos algunas herramientas para tu espacio de
        desarrollo:
      </p>
      <ul className="pb-8 pl-4 text-gray-700 list-disc list-inside">
        <li>
          Un visualizador de código, prefiblemente{" "}
          <a
            href="https://code.visualstudio.com/"
            className="hover:text-red-500 underline transition-colors duration-100"
          >
            Visual Studio Code
          </a>
        </li>
        <li>Un lenguaje de programación orientado a objetos</li>
        <li>Frameworks dependiendo como trabajarás</li>
        <li>
          Conocimientos previos de la documentación del proyecto que trabajarás
        </li>
      </ul>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-600">
        ¿Cómo aplicarlos?
      </h2>
      <p className="mb-4 text-gray-700">
        Para aplicarlos podemos crear proyectos en diferentes lenguajes de
        progrmación, pero generalmente los mejores para empezar suelen ser
        Python, JavaScript o C#. En este caso lo mejor es usar JavaScript debido
        que es más de comprender y su manera en como se maneja dentro sí el
        lenguaje es muy amigable con los nuevos programadores.
      </p>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-600">
        Ejecutar código de JavaScript
      </h2>
      <p className="mb-4 text-gray-700">
        Para ejecutar código de JavaScript generalmente se usan Runtime
        Environment, los cuales se dedican en crear un entorno de ejecución de
        código como su mismo nombre lo dice, estos suelen usar otros lenguajes
        diferentes para propocionar este tipo de servicios a los programadores,
        estos lenguajes generalmente son Rust, C#, C++ y otros más, lo
        importante que este le permite aplicaciones de entorno de ejecución dar
        resultados interpretando código, algunos de los entornos de ejecución de
        código más importantes son:
      </p>
      <ul className="pb-8 pl-4 text-gray-700 list-disc list-inside">
        <li>
          <a
            href="https://nodejs.org/es/"
            className="hover:text-red-500 underline transition-colors duration-100"
          >
            Node.js
          </a>
        </li>
        <li>
          <a
            href="https://deno.land/"
            className="hover:text-red-500 underline transition-colors duration-100"
          >
            Deno
          </a>
        </li>
        <li>
          <a
            href="https://bun.sh/"
            className="hover:text-red-500 underline transition-colors duration-100"
          >
            Bun
          </a>
        </li>
      </ul>
      <p className="mb-4 text-gray-700">
        Gracias a estos entornos de ejecución podemso crear diferentes
        aplicaciones para múltiples proposistos, así haciendo que sea más fácil
        realizar tareas que puede que sean muy complicadas hacerlas manualmente
        o que en casos más aislados usarlas dentro de otra aplicación ya
        existente.
      </p>
      <img src="/restful-rest-diagram.jpg" alt="" className="rounded-lg" />
    </Layout>
  );
}
