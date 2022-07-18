export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-r from-red-500 via-red-500 to-red-700">
      <div className="block px-6 py-10 mx-auto max-w-7xl">
        <p className="mb-4 font-semibold text-center text-slate-900 hover:underline">
          ¿Necisitas más información? Escríbenos a infoconf@gmail.com
        </p>
        <p className="font-semibold text-center text-slate-900">
          Créditos a{" "}
          <a
            href="https://github.com/midudev/miduconf-website"
            className="text-black underline"
          >
            MiduConf
          </a>
        </p>
      </div>
    </footer>
  );
}
